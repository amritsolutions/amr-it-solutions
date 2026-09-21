import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

export async function POST(request: Request) {
  try {
    if (!ADMIN_PASSWORD || !ADMIN_SESSION_SECRET) {
      return NextResponse.json(
        {
          error: "Admin-beveiliging is nog niet ingesteld.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();
    const password = String(body.password || "");

    if (!password) {
      return NextResponse.json(
        {
          error: "Vul je wachtwoord in.",
        },
        {
          status: 400,
        }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        {
          error: "Onjuist wachtwoord.",
        },
        {
          status: 401,
        }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set({
      name: "amr_admin_session",
      value: ADMIN_SESSION_SECRET,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Admin login fout:", error);

    return NextResponse.json(
      {
        error: "Inloggen is niet gelukt.",
      },
      {
        status: 500,
      }
    );
  }
}