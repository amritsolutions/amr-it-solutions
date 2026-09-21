import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const WEBSITE_PAGES = [
  "https://www.amritsolutions.nl/",
  "https://www.amritsolutions.nl/it-support-breda",
  "https://www.amritsolutions.nl/microsoft-365",
  "https://www.amritsolutions.nl/computerreparatie",
  "https://www.amritsolutions.nl/data-overzetten",
  "https://www.amritsolutions.nl/printer-wifi-netwerk",
  "https://www.amritsolutions.nl/virus-verwijderen",
];

function cleanHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY ontbreekt.");
  }

  console.log("Websitekennis ophalen...");

  const sections = [];

  for (const url of WEBSITE_PAGES) {
    console.log(`Ophalen: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Overgeslagen: ${url}`);
      continue;
    }

    const html = await response.text();
    const text = cleanHtml(html);

    sections.push(`
PAGINA: ${url}

${text}
`);
  }

  const knowledge = `
AMR IT SOLUTIONS - WEBSITE KENNISBANK

Deze informatie komt van de officiële website van AMR IT Solutions.

${sections.join("\n\n--------------------\n\n")}
`;

  const filePath = "./scripts/amr-website-knowledge.txt";

  fs.writeFileSync(filePath, knowledge, "utf8");

  console.log("Kennisbestand aangemaakt.");
  console.log("Vector store aanmaken...");

  const vectorStore = await openai.vectorStores.create({
    name: "AMR IT Solutions Website",
  });

  console.log(`Vector store: ${vectorStore.id}`);
  console.log("Kennis uploaden...");

  const batch = await openai.vectorStores.fileBatches.uploadAndPoll(
    vectorStore.id,
    {
      files: [fs.createReadStream(filePath)],
    }
  );

  console.log("Upload klaar.");
  console.log(`Status: ${batch.status}`);
  console.log("");
  console.log("BELANGRIJK - BEWAAR DEZE VECTOR STORE ID:");
  console.log(vectorStore.id);
}

main().catch((error) => {
  console.error("Fout:", error);
  process.exit(1);
});