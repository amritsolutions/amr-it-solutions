import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY ontbreekt.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const description = String(body.description || "").trim();

    if (!name || !email || !service || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Niet alle verplichte gegevens zijn ingevuld.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Niet opgegeven");
    const safeService = escapeHtml(service);
    const safeDescription = escapeHtml(description).replaceAll(
      "\n",
      "<br />"
    );

    const { data, error } = await resend.emails.send({
      from: "AMR IT Solutions <info@amritsolutions.nl>",
      to: ["info@amritsolutions.nl"],
      replyTo: email,
      subject: `Nieuwe offerteaanvraag via chatbot van ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f1f5f9; padding:30px;">
          <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:16px;">
            
            <h2 style="color:#2563eb;">
              Nieuwe offerteaanvraag via chatbot
            </h2>

            <p><strong>Naam:</strong> ${safeName}</p>
            <p><strong>E-mail:</strong> ${safeEmail}</p>
            <p><strong>Telefoon:</strong> ${safePhone}</p>
            <p><strong>Dienst:</strong> ${safeService}</p>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:24px 0;" />

            <p><strong>Omschrijving:</strong></p>
            <p>${safeDescription}</p>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:24px 0;" />

            <p style="font-size:12px; color:#64748b;">
              Deze aanvraag is verstuurd via de AMR AI Assistent.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend-fout chatbot:", error);

      return NextResponse.json(
        {
          success: false,
          message: `Resend-fout: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Chatbot offertefout:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Onbekende fout bij het verzenden.",
      },
      { status: 500 }
    );
  }
}