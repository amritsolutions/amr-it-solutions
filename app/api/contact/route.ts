import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await resend.emails.send({
      from: "AMR IT Solutions <onboarding@resend.dev>",
      to: "alimazhar.rezayee031@gmail.com",
      subject: "Nieuw bericht via AMR IT Solutions",
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.redirect(new URL("/?sent=true", request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/?sent=false", request.url));
  }
}