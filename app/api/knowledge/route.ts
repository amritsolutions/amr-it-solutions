import { NextResponse } from "next/server";

const WEBSITE_PAGES = [
  "https://www.amritsolutions.nl/",
  "https://www.amritsolutions.nl/it-support-breda",
  "https://www.amritsolutions.nl/websites",
  "https://www.amritsolutions.nl/microsoft-365",
];

function cleanHtml(html: string) {
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

export async function GET() {
  try {
    const results = [];

    for (const url of WEBSITE_PAGES) {
      const response = await fetch(url, {
        cache: "no-store",
      });

      if (!response.ok) {
        results.push({
          url,
          success: false,
          text: "",
        });

        continue;
      }

      const html = await response.text();
      const text = cleanHtml(html);

      results.push({
        url,
        success: true,
        text: text.slice(0, 12000),
      });
    }

    return NextResponse.json({
      success: true,
      pages: results,
    });
  } catch (error) {
    console.error("Knowledge fout:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Onbekende fout bij ophalen van websitekennis.",
      },
      { status: 500 }
    );
  }
}