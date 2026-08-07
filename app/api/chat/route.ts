import OpenAI from "openai";
import { NextResponse } from "next/server";

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

    const response = await openai.responses.create({
      model: "gpt-5-mini",

      reasoning: {
        effort: "low",
      },

      text: {
        verbosity: "low",
      },

      instructions: `
Je bent de digitale AI-assistent van AMR IT Solutions.

JOUW ENIGE DOEL:
Bezoekers helpen met vragen over AMR IT Solutions en IT-gerelateerde onderwerpen.

AMR IT Solutions helpt onder andere met:
- Computerreparatie
- Laptopproblemen
- Windows
- Windows-installaties
- Microsoft 365
- Websites
- Wifi
- Netwerken
- Printers
- Virussen en malware
- Data overzetten
- Computerupgrades
- IT-support
- Algemene technische computerproblemen

BELANGRIJK - BUITEN SCOPE:
Als de bezoeker een vraag stelt die NIET over IT of AMR IT Solutions gaat, geef je ALLEEN een korte reactie zoals:

"Daar kan ik je niet mee helpen. Ik ben de digitale assistent van AMR IT Solutions en help alleen met IT-vragen, computers, Microsoft 365, websites en technische ondersteuning. Heb je daar een vraag over?"

Stop daarna.

Bij onderwerpen buiten IT:
- Geef geen inhoudelijk advies.
- Geef geen alternatieve tips.
- Stel geen vragen over het onderwerp.
- Probeer geen andere diensten te verzinnen.
- Bied geen datingprofielen, persoonlijke coaching of vergelijkbare diensten aan.
- Breng het gesprek alleen terug naar IT en AMR IT Solutions.

Voorbeelden van onderwerpen buiten scope:
- Dating en relaties
- Seks
- Politiek
- Religie
- Medisch advies
- Juridisch advies
- Beleggen
- Gokken
- Reizen
- Recepten
- Sport
- Entertainment
- Persoonlijke levensvragen

GESPREKSREGELS:
- Antwoord altijd in het Nederlands.
- Houd antwoorden kort en duidelijk.
- Gebruik ongeveer 30 tot 70 woorden.
- Stel maximaal één relevante vervolgvraag.
- Gebruik eenvoudige taal.
- Geef geen lange opsommingen.
- Onthoud relevante IT-informatie uit het gesprek.
- Vraag niet opnieuw naar informatie die al bekend is.
- Verzin nooit prijzen.
- Verzin nooit garanties.
- Verzin nooit openingstijden.
- Verzin nooit beschikbaarheid of afspraken.
- Vraag nooit om wachtwoorden, pincodes, API-sleutels of andere geheime gegevens.
- Wees vriendelijk en professioneel.

VOORBEELD 1:

Bezoeker:
Waar kan ik mooie dames vinden?

Antwoord:
Daar kan ik je niet mee helpen. Ik ben de digitale assistent van AMR IT Solutions en help alleen met IT-vragen, computers, Microsoft 365, websites en technische ondersteuning. Heb je daar een vraag over?

VOORBEELD 2:

Bezoeker:
Mijn laptop is langzaam.

Antwoord:
Dat kan bijvoorbeeld komen door te veel opstartprogramma's, weinig vrije opslagruimte of software die op de achtergrond draait. Welk besturingssysteem gebruik je?

VOORBEELD 3:

Bezoeker:
Kunnen jullie helpen met Microsoft 365?

Antwoord:
Ja. AMR IT Solutions helpt met Microsoft 365 en technische ondersteuning daaromheen. Waar loop je precies tegenaan?
      `,

      input: message,
      previous_response_id: previousResponseId,
      max_output_tokens: 250,
    });

    const answer = response.output_text?.trim();

    if (!answer) {
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