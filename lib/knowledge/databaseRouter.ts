import { supabaseAdmin } from "@/lib/supabase/server";

type KnowledgeItem = {
  title: string;
  slug: string;
  content: string;
};

type ScoredKnowledgeItem = KnowledgeItem & {
  score: number;
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_/]/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP_WORDS = new Set([
  "de",
  "het",
  "een",
  "en",
  "of",
  "ik",
  "je",
  "jij",
  "mijn",
  "met",
  "voor",
  "van",
  "op",
  "in",
  "aan",
  "is",
  "zijn",
  "heb",
  "heeft",
  "dit",
  "dat",
  "die",
  "wat",
  "hoe",
  "kan",
  "kunnen",
  "wil",
  "graag",
  "nodig",
  "probleem",
  "problemen",
  "hulp",
]);

const TOPIC_KEYWORDS: Record<string, string[]> = {
  "back-up": [
    "backup",
    "back up",
    "bestanden",
    "gegevens",
    "data",
    "kwijt",
    "verloren",
    "verliezen",
    "bewaren",
    "veilig",
    "herstellen",
    "terugzetten",
  ],

  windows: [
    "windows",
    "windows 10",
    "windows 11",
    "computer start niet",
    "pc start niet",
    "blauw scherm",
    "update",
  ],

  wifi: [
    "wifi",
    "wi fi",
    "internet",
    "netwerk",
    "verbinding",
    "router",
    "draadloos",
  ],

  printers: [
    "printer",
    "printen",
    "afdrukken",
    "scanner",
    "scannen",
    "inkt",
    "toner",
  ],

  websites: [
    "website",
    "webshop",
    "wordpress",
    "domeinnaam",
    "hosting",
  ],

  "microsoft-365": [
    "microsoft 365",
    "office",
    "outlook",
    "word",
    "excel",
    "onedrive",
    "teams",
  ],

  "virussen-malware": [
    "virus",
    "virussen",
    "malware",
    "spyware",
    "verdacht",
    "gehackt",
    "beveiliging",
  ],

  "computer-laptop": [
    "computer",
    "pc",
    "laptop",
    "traag",
    "langzaam",
    "opstarten",
  ],
};

function getWords(value: string) {
  return normalizeText(value)
    .split(" ")
    .filter(
      (word) =>
        word.length >= 3 &&
        !STOP_WORDS.has(word)
    );
}

function findTopicKey(item: KnowledgeItem) {
  const normalizedSlug = normalizeText(item.slug);
  const normalizedTitle = normalizeText(item.title);

  return Object.keys(TOPIC_KEYWORDS).find((key) => {
    const normalizedKey = normalizeText(key);

    return (
      normalizedKey === normalizedSlug ||
      normalizedKey === normalizedTitle
    );
  });
}

function scoreKnowledge(
  message: string,
  item: KnowledgeItem
) {
  const normalizedMessage = normalizeText(message);
  const title = normalizeText(item.title);
  const slug = normalizeText(item.slug);
  const content = normalizeText(item.content);

  const messageWords = getWords(message);

  let score = 0;

  // Volledige titel of slug = zeer sterke match.
  if (
    title &&
    normalizedMessage.includes(title)
  ) {
    score += 15;
  }

  if (
    slug &&
    normalizedMessage.includes(slug)
  ) {
    score += 15;
  }

  // Woorden uit titel of slug = sterke match.
  for (const word of messageWords) {
    if (title.split(" ").includes(word)) {
      score += 7;
    }

    if (slug.split(" ").includes(word)) {
      score += 7;
    }
  }

  // Specifieke trefwoorden per onderwerp.
  const topicKey = findTopicKey(item);

  if (topicKey) {
    for (const keyword of TOPIC_KEYWORDS[topicKey]) {
      const normalizedKeyword =
        normalizeText(keyword);

      if (
        normalizedKeyword &&
        normalizedMessage.includes(normalizedKeyword)
      ) {
        score += normalizedKeyword.includes(" ")
          ? 10
          : 5;
      }
    }
  }

  // Een overeenkomst alleen in de kennistekst
  // telt bewust maar heel licht mee.
  for (const word of messageWords) {
    if (content.includes(word)) {
      score += 0.5;
    }
  }

  return score;
}

function selectRelevantItems(
  items: ScoredKnowledgeItem[]
) {
  const sorted = items
    .filter((item) => item.score >= 4)
    .sort((a, b) => b.score - a.score);

  if (sorted.length === 0) {
    return [];
  }

  const bestScore = sorted[0].score;

  /*
   * Een tweede/derde onderwerp mag alleen mee als:
   *
   * 1. het minimaal 4 punten heeft;
   * 2. én minstens 60% van de beste score haalt.
   *
   * Hierdoor verdwijnen zwakke toevallige matches,
   * terwijl echte combinatievragen meerdere
   * onderwerpen kunnen behouden.
   */
  const relativeThreshold = bestScore * 0.6;

  return sorted
    .filter(
      (item) =>
        item.score >= relativeThreshold
    )
    .slice(0, 3);
}

export async function getDatabaseKnowledge(
  message: string
) {
  const { data, error } = await supabaseAdmin
    .from("knowledge")
    .select("title, slug, content")
    .eq("active", true);

  if (error) {
    console.error(
      "Databasekennis ophalen mislukt:",
      error
    );

    return "";
  }

  if (!data || data.length === 0) {
    return "";
  }

  const scored = (data as KnowledgeItem[])
    .map((item) => ({
      ...item,
      score: scoreKnowledge(message, item),
    }))
    .sort((a, b) => b.score - a.score);

  const ranked = selectRelevantItems(scored);

  console.log(
    "=== ALLE KENNIS SCORES ==="
  );

  console.log(
    scored.map((item) => ({
      onderwerp: item.title,
      score: item.score,
    }))
  );

  console.log(
    "=== KENNIS ROUTER RESULTATEN ==="
  );

  console.log(
    ranked.map((item) => ({
      onderwerp: item.title,
      score: item.score,
    }))
  );

  if (ranked.length === 0) {
    console.log(
      "Geen relevante databasekennis gevonden."
    );

    return "";
  }

  const result = ranked
    .map(
      (item) => `
ONDERWERP: ${item.title}

${item.content}
`.trim()
    )
    .join("\n\n---\n\n");

  console.log(
    "=== RELEVANTE DATABASEKENNIS ==="
  );
  console.log(result);
  console.log(
    "============================"
  );

  return result;
}