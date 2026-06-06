import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { mortgageType, propertyValue, deposit, ltv, employment, name, phone, email } = data;

    if (!name || !email || !phone || !mortgageType) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const rows = [
        ["Mortgage type",   mortgageType],
        ["Property value",  propertyValue],
        ["Deposit",         deposit],
        ["LTV",             ltv],
        ["Employment",      employment],
        ["Name",            name],
        ["Phone",           phone],
        ["Email",           email],
      ].filter(([, v]) => v)
       .map(([k, v]) => `
        <tr>
          <td style="padding:8px 16px;font-weight:600;color:#1a4a2e;background:#f0faf4;border-bottom:1px solid #d1fae5;white-space:nowrap">${k}</td>
          <td style="padding:8px 16px;color:#374151;border-bottom:1px solid #d1fae5">${v}</td>
        </tr>`).join("");

      const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f3f4f6">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:#1a4a2e;padding:24px 32px">
            <p style="margin:0;font-size:20px;font-weight:700;color:#fff">Mortgage Adviser London</p>
            <p style="margin:4px 0 0;font-size:13px;color:#86efac">mortgageadviser.london</p>
          </td>
        </tr>

        <!-- Banner -->
        <tr>
          <td style="background:#d4a017;padding:10px 32px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#1a4a2e">
              New enquiry — ${mortgageType} — ${name}
            </p>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:24px 32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #d1fae5;border-radius:8px;overflow:hidden">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px">
            <p style="margin:0 0 16px;font-size:14px;color:#6b7280">
              Call <strong>${name.split(" ")[0]}</strong> on <strong>${phone}</strong> or reply to this email.
            </p>
            <a href="mailto:${email}" style="display:inline-block;background:#d4a017;color:#1a4a2e;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
              Reply to ${name.split(" ")[0]} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0faf4;padding:16px 32px;border-top:1px solid #d1fae5">
            <p style="margin:0;font-size:11px;color:#6b7280">
              Mortgage Adviser London · Roger Cooper CeMAP · FCA Regulated (Ref: 478810)<br>
              3rd Floor, 207 Regent Street, London W1B 3HH · 0844 884 9748
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "notifications@mortgageinternational.co.uk",
          to: "admin@mortgageinternational.co.uk",
          reply_to: email,
          subject: `New enquiry: ${mortgageType} — ${name} — mortgageadviser.london`,
          html,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry route error:", error);
    return NextResponse.json({ ok: false, error: "Failed to process enquiry" }, { status: 500 });
  }
}
