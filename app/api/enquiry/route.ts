import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { mortgageType, propertyValue, deposit, ltv, name, phone, email } = data;

    if (!name || !email || !phone || !mortgageType) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const emailBody = `
New mortgage enquiry from mortgageadviser.london

Name:           ${name}
Phone:          ${phone}
Email:          ${email}
Mortgage type:  ${mortgageType}
Property value: £${propertyValue}
Deposit:        £${deposit}
LTV:            ${ltv}

---
Sent from the Lead Form on mortgageadviser.london
      `.trim();

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "notifications@mortgageadviser.london",
          to: "admin@mortgageinternational.co.uk",
          subject: `New Mortgage Enquiry — ${mortgageType} — ${name}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        // Still return success to user — log the failure server-side
      }
    } else {
      // Fallback: log to console when RESEND_API_KEY not set
      console.log("New mortgage enquiry (no RESEND_API_KEY set):", {
        mortgageType,
        propertyValue,
        deposit,
        ltv,
        name,
        phone,
        email,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry route error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
