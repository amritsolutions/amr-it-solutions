import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedFileTypes = [
  "image/jpeg",
  "image/png",
  "application/pdf",
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatContactPreference(value: string) {
  switch (value) {
    case "whatsapp":
      return "WhatsApp";

    case "phone":
      return "Bellen";

    case "email":
      return "E-mail";

    default:
      return "Niet opgegeven";
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const contactPreference = String(
      formData.get("contactPreference") || "",
    ).trim();
    const privacyAccepted = String(
      formData.get("privacyAccepted") || "",
    ).trim();

    const attachmentValue = formData.get("attachment");

    if (!name || !email || !service || !message || !contactPreference) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul alle verplichte velden in.",
        },
        { status: 400 },
      );
    }

    if (privacyAccepted !== "yes") {
      return NextResponse.json(
        {
          success: false,
          message: "U moet akkoord gaan met de privacyverklaring.",
        },
        { status: 400 },
      );
    }

    const attachments: Array<{
      filename: string;
      content: string;
    }> = [];

    if (
      attachmentValue instanceof File &&
      attachmentValue.size > 0
    ) {
      if (!allowedFileTypes.includes(attachmentValue.type)) {
        return NextResponse.json(
          {
            success: false,
            message: "Gebruik alleen JPG, PNG of PDF.",
          },
          { status: 400 },
        );
      }

      if (attachmentValue.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Het bestand mag maximaal 5 MB zijn.",
          },
          { status: 400 },
        );
      }

      const attachmentBuffer = Buffer.from(
        await attachmentValue.arrayBuffer(),
      );

      attachments.push({
        filename: attachmentValue.name,
        content: attachmentBuffer.toString("base64"),
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Niet opgegeven");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const safePreference = escapeHtml(
      formatContactPreference(contactPreference),
    );

    const { data, error } = await resend.emails.send({
      from: "AMR IT Solutions <info@amritsolutions.nl>",
      to: ["info@amritsolutions.nl"],
      replyTo: email,
      subject: `Nieuw contactbericht van ${name}`,
      html: `
        <div
          style="
            background-color: #f1f5f9;
            padding: 32px 16px;
            font-family: Arial, Helvetica, sans-serif;
            color: #0f172a;
          "
        >
          <div
            style="
              max-width: 640px;
              margin: 0 auto;
              overflow: hidden;
              border-radius: 20px;
              background-color: #ffffff;
              box-shadow: 0 15px 40px rgba(15, 23, 42, 0.12);
            "
          >
            <div
              style="
                background: linear-gradient(135deg, #1d4ed8, #2563eb);
                padding: 28px 32px;
                color: #ffffff;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  opacity: 0.8;
                "
              >
                AMR IT Solutions
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 1.3;
                "
              >
                Nieuw contactbericht
              </h1>
            </div>

            <div style="padding: 32px;">
              <table
                role="presentation"
                style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 15px;
                "
              >
                <tr>
                  <td
                    style="
                      width: 170px;
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      color: #64748b;
                    "
                  >
                    Naam
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      font-weight: 700;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      color: #64748b;
                    "
                  >
                    E-mailadres
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="color: #2563eb; text-decoration: none;"
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      color: #64748b;
                    "
                  >
                    Telefoonnummer
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                    "
                  >
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      color: #64748b;
                    "
                  >
                    Gekozen dienst
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      font-weight: 700;
                    "
                  >
                    ${safeService}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                      color: #64748b;
                    "
                  >
                    Contactvoorkeur
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e2e8f0;
                    "
                  >
                    ${safePreference}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      color: #64748b;
                    "
                  >
                    Bijlage
                  </td>

                  <td style="padding: 12px 0;">
                    ${
                      attachments.length > 0
                        ? escapeHtml(attachments[0].filename)
                        : "Geen bestand meegestuurd"
                    }
                  </td>
                </tr>
              </table>

              <div
                style="
                  margin-top: 28px;
                  border-radius: 16px;
                  background-color: #f8fafc;
                  padding: 22px;
                  border: 1px solid #e2e8f0;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #2563eb;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Bericht
                </p>

                <div
                  style="
                    font-size: 16px;
                    line-height: 1.7;
                    color: #334155;
                  "
                >
                  ${safeMessage}
                </div>
              </div>

              <p
                style="
                  margin: 24px 0 0;
                  font-size: 13px;
                  line-height: 1.6;
                  color: #94a3b8;
                "
              >
                De bezoeker heeft akkoord gegeven met de privacyverklaring.
                Beantwoord deze e-mail om rechtstreeks naar ${safeName} te
                reageren.
              </p>
            </div>
          </div>
        </div>
      `,
      attachments:
        attachments.length > 0 ? attachments : undefined,
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