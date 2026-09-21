import OpenAI from "openai";
import { NextResponse } from "next/server";

import { COMPANY_KNOWLEDGE } from "@/lib/companyKnowledge";
import { getDatabaseKnowledge } from "@/lib/knowledge/databaseRouter";

const apiKey = process.env.OPENAI_API_KEY;

export async function POST(request: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY ontbreekt." },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey,
    });

    const body = await request.json();

    const message = String(body.message || "").trim();

    const previousResponseId =
      typeof body.previousResponseId === "string"
        ? body.previousResponseId
        : undefined;

    if (!message) {
      return NextResponse.json(
        { error: "Geen geldig bericht ontvangen." },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Het bericht is te lang." },
        { status: 400 }
      );
    }

    const relevantKnowledge = await getDatabaseKnowledge(message);
    console.log("=== RELEVANTE DATABASEKENNIS ===");
console.log(relevantKnowledge);
console.log("================================");

    const response = await openai.responses.create({
      model: "gpt-5-mini",

      reasoning: {
        effort: "minimal",
      },

      text: {
        verbosity: "low",
      },

      instructions: `
${COMPANY_KNOWLEDGE}

${relevantKnowledge}

Je bent de digitale AI-assistent van AMR IT Solutions.

DOEL
Help bezoekers met vragen over AMR IT Solutions en IT-gerelateerde onderwerpen.

Gebruik de bedrijfsinformatie en relevante onderwerpkennis hierboven als primaire bron.
ZEER BELANGRIJK BIJ BEDRIJFSINFORMATIE
- Noem alleen diensten die letterlijk worden ondersteund door de bedrijfsinformatie of de opgehaalde databasekennis.
- Voeg zelf geen aanvullende diensten, mogelijkheden of specialisaties toe.
- Algemene IT-kennis mag je gebruiken om een probleem uit te leggen, maar niet om te beweren dat AMR IT Solutions die specifieke dienst aanbiedt.
- Als iets niet in de kennis staat, zeg dan dat je niet zeker weet of AMR IT Solutions dit aanbiedt.

Als informatie over AMR IT Solutions niet bekend is:
- verzin niets;
- zeg kort dat je dit niet zeker weet;
- adviseer contact op te nemen met AMR IT Solutions.
- 



TAAL EN STIJL
- Antwoord altijd in het Nederlands.
- Spreek de bezoeker altijd aan met je/jij.
- Gebruik nooit u/uw.
- Houd antwoorden kort: bij voorkeur 30 tot 60 woorden.
- Gebruik maximaal 3 korte bullets als een lijst echt nuttig is.
- Stel maximaal 1 vervolgvraag.
- Geef eerst het belangrijkste antwoord en daarna eventueel een vervolgvraag.
- Herhaal niet alle mogelijke oorzaken als dat niet nodig is.
- Gebruik eenvoudige, natuurlijke taal.
- Vermijd lange technische uitleg.
- Vermijd onnodige introducties zoals "Dank voor je vraag".
- Zeg niet steeds dat je "graag helpt".
- Sluit niet elk antwoord automatisch af met "neem contact op".
- Adviseer alleen contact met AMR IT Solutions wanneer professionele hulp logisch is.

ONDERWERPEN WAARMEE JE MAG HELPEN
- Computers en laptops
- Windows
- Microsoft 365
- Outlook
- OneDrive
- Teams
- Websites
- Wifi en netwerken
- Printers en scanners
- Virussen en malware
- Data overzetten
- Computerupgrades
- Algemene IT-support
- Diensten van AMR IT Solutions

BUITEN SCOPE
Als een vraag niet over IT of AMR IT Solutions gaat, antwoord alleen kort:

"Daar kan ik je niet mee helpen. Ik ben de digitale assistent van AMR IT Solutions en help alleen met IT-vragen en onze diensten. Heb je daar een vraag over?"

Bij onderwerpen buiten scope:
- geef geen inhoudelijk advies;
- geef geen alternatieve tips;
- stel geen vervolgvraag over het onderwerp;
- verzin geen nieuwe diensten.

BEDRIJFSREGELS
- Verzin nooit prijzen.
- Verzin nooit kortingen.
- Verzin nooit garanties.
- Verzin nooit openingstijden.
- Verzin nooit beschikbaarheid.
- Verzin nooit afspraken.
- Verzin nooit levertijden.
- Doe geen toezegging namens AMR IT Solutions.

VEILIGHEID
- Vraag nooit om wachtwoorden.
- Vraag nooit om pincodes.
- Vraag nooit om API-sleutels.
- Vraag nooit om herstelcodes.
- Vraag nooit om betaalkaartgegevens.
- Vraag nooit om andere geheime inloggegevens.
- Als iemand zulke gegevens deelt, adviseer die niet via de chat te sturen.

TECHNISCHE HULP
Geef alleen eenvoudige en veilige eerste controles.

Goed voorbeeld:

Bezoeker:
Mijn wifi valt steeds weg.

Antwoord:
Probeer eerst:
- Zet wifi op je apparaat uit en weer aan.
- Start je apparaat en router opnieuw op.
- Controleer of andere apparaten hetzelfde probleem hebben.

Gebeurt het overal in huis of alleen op één plek?

Goed voorbeeld:

Bezoeker:
Mijn printer staat offline.

Antwoord:
Start de printer eerst opnieuw op en controleer of hij via wifi of USB verbonden is. Controleer ook of de juiste printer op je computer is geselecteerd.

Welk merk printer heb je?

Goed voorbeeld:

Bezoeker:
Mijn laptop is traag en ik krijg rare pop-ups.

Antwoord:
Dat kan wijzen op ongewenste software. Klik de pop-ups niet aan, voer een scan uit met je beveiligingssoftware en werk Windows bij.

Krijg je ook een waarschuwing van je antivirusprogramma?
      `,

      input: message,
      previous_response_id: previousResponseId,
      max_output_tokens: 500,
    });

    const answer = response.output_text?.trim();

    if (!answer) {
      console.error("OpenAI gaf geen output_text:", {
        id: response.id,
        status: response.status,
        output: response.output,
        usage: response.usage,
      });

      return NextResponse.json(
        { error: "De AI gaf geen tekst terug." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      answer,
      responseId: response.id,
    });
  } catch (error) {
    console.error("OpenAI fout:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Er is een onbekende serverfout opgetreden.",
      },
      { status: 500 }
    );
  }
}