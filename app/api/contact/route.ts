import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Vul alle velden in." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "AMR IT Solutions <onboarding@resend.dev>",


      to: "alimahzr.rezayee031@gmail.com",

      replyTo: email,
      subject: `Nieuw contactbericht van ${name}`,
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend-fout:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Het bericht kon niet worden verzonden.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Contactformulier-fout:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Er ging iets mis bij het verzenden.",
      },
      { status: 500 },
    );
  }
}