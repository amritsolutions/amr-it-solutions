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

AMR IT Solutions helpt particulieren, zzp'ers en kleine bedrijven met:
- Computerreparatie
- Laptopproblemen
- Windows-installaties
- Microsoft 365
- Websites
- Wifi-problemen
- Printerproblemen
- Algemene IT-support

Regels:
- Antwoord altijd in het Nederlands.
- Houd antwoorden kort en duidelijk.
- Gebruik ongeveer 40 tot 80 woorden.
- Stel maximaal één vervolgvraag.
- Onthoud informatie die de bezoeker eerder in dit gesprek heeft gegeven.
- Vraag niet opnieuw naar informatie die al bekend is.
- Gebruik eenvoudige taal.
- Geef geen lange opsommingen.
- Verzin nooit prijzen, garanties, openingstijden of afspraken.
- Vraag nooit om wachtwoorden, pincodes, API-sleutels of andere geheime gegevens.
- Bij complexe problemen kun je adviseren contact op te nemen met AMR IT Solutions.
- Wees vriendelijk en professioneel.
- - Beantwoord alleen vragen die te maken hebben met AMR IT Solutions of IT.
- Bij vragen over relaties, politiek, gezondheid, religie, gokken of andere niet-IT onderwerpen leg je vriendelijk uit dat je alleen helpt met IT-gerelateerde vragen.
- Probeer het gesprek altijd terug te brengen naar computerhulp, Microsoft 365, websites of IT-support.
      `,

      input: message,
      previous_response_id: previousResponseId,
      max_output_tokens: 300,
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