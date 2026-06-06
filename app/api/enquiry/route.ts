import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { mortgageType, propertyValue, deposit, ltv, employment, name, phone, email } = data;

    if (!name || !email || !phone || !mortgageType) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // Save to Supabase CRM
    try {
      const db = getSupabaseAdmin()
      if (db) await db.from("leads").insert([{
        form_type: "mortgage-adviser-london",
        name,
        email,
        phone,
        mortgage_type: mortgageType,
        property_value: propertyValue,
        deposit_amount: deposit,
        employment_status: employment,
        source: "mortgageadviser.london",
        source_page: "/",
        status: "New",
      }]);
    } catch (dbErr: unknown) {
      console.error("Supabase error:", dbErr);
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const firstName = name.split(" ")[0];

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

      // ── Admin notification email ──────────────────────────
      const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f3f4f6">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <tr>
          <td style="background:#1a4a2e;padding:24px 32px">
            <p style="margin:0;font-size:20px;font-weight:700;color:#fff">Mortgage Adviser London</p>
            <p style="margin:4px 0 0;font-size:13px;color:#86efac">New lead from mortgageadviser.london</p>
          </td>
        </tr>

        <tr>
          <td style="background:#d4a017;padding:10px 32px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#1a4a2e">
              New enquiry — ${mortgageType} — ${name}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #d1fae5;border-radius:8px;overflow:hidden">
              ${rows}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px 32px">
            <p style="margin:0 0 16px;font-size:14px;color:#6b7280">
              Call <strong>${firstName}</strong> on <strong>${phone}</strong> or reply to this email.
            </p>
            <div style="display:flex;gap:12px;flex-wrap:wrap">
              <a href="mailto:${email}" style="display:inline-block;background:#d4a017;color:#1a4a2e;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-right:12px">
                Reply to ${firstName} →
              </a>
              <a href="https://www.mortgageinternational.co.uk/admin" style="display:inline-block;background:#1a4a2e;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
                View in CRM →
              </a>
            </div>
          </td>
        </tr>

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

      // ── Confirmation email to enquirer ────────────────────
      const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f3f4f6">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <tr>
          <td style="background:#1a4a2e;padding:24px 32px">
            <p style="margin:0;font-size:20px;font-weight:700;color:#fff">Mortgage Adviser London</p>
            <p style="margin:4px 0 0;font-size:13px;color:#86efac">Independent Mortgage Adviser · CeMAP Qualified · FCA Regulated</p>
          </td>
        </tr>

        <tr>
          <td style="background:#d4a017;padding:10px 32px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#1a4a2e">We've received your enquiry ✓</p>
          </td>
        </tr>

        <tr>
          <td style="padding:32px">
            <p style="margin:0 0 16px;font-size:16px;color:#1a4a2e;font-weight:600">Hi ${firstName},</p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6">
              Thank you for getting in touch with Mortgage Adviser London. I've received your ${mortgageType} enquiry and will be in touch within <strong>2 working hours</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6">
              In the meantime, if you have any urgent questions please call me directly or reply to this email.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0faf4;border-radius:8px;padding:20px;margin:0 0 24px">
              <tr>
                <td>
                  <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1a4a2e;text-transform:uppercase;letter-spacing:0.5px">Contact details</p>
                  <p style="margin:0 0 6px;font-size:14px;color:#374151">📞 <a href="tel:08448849748" style="color:#1a4a2e;text-decoration:none;font-weight:600">0844 884 9748</a></p>
                  <p style="margin:0 0 6px;font-size:14px;color:#374151">✉️ <a href="mailto:admin@mortgageinternational.co.uk" style="color:#1a4a2e;text-decoration:none">admin@mortgageinternational.co.uk</a></p>
                  <p style="margin:0 0 6px;font-size:14px;color:#374151">🕐 Mon–Sat 9am–7pm</p>
                  <p style="margin:0;font-size:14px;color:#374151">📍 3rd Floor, 207 Regent Street, London W1B 3HH</p>
                </td>
              </tr>
            </table>

            <a href="https://www.mortgageadviser.london" style="display:inline-block;background:#d4a017;color:#1a4a2e;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
              Visit mortgageadviser.london →
            </a>
          </td>
        </tr>

        <tr>
          <td style="background:#f0faf4;padding:16px 32px;border-top:1px solid #d1fae5">
            <p style="margin:0 0 4px;font-size:11px;color:#6b7280">
              Mortgage Adviser London is a trading name of Mortgage Int Ltd, an Appointed Representative of The Right Mortgage Ltd, authorised and regulated by the Financial Conduct Authority (Ref: 478810).
            </p>
            <p style="margin:0;font-size:11px;color:#6b7280">
              Your home may be repossessed if you do not keep up repayments on your mortgage.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

      // Send both emails
      await Promise.all([
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({
            from: "notifications@mortgageinternational.co.uk",
            to: "admin@mortgageinternational.co.uk",
            reply_to: email,
            subject: `New enquiry: ${mortgageType} — ${name} — mortgageadviser.london`,
            html: adminHtml,
          }),
        }),
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({
            from: "notifications@mortgageinternational.co.uk",
            to: email,
            reply_to: "admin@mortgageinternational.co.uk",
            subject: `Thanks for your enquiry, ${firstName} — Mortgage Adviser London`,
            html: confirmHtml,
          }),
        }),
      ]);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry route error:", error);
    return NextResponse.json({ ok: false, error: "Failed to process enquiry" }, { status: 500 });
  }
}
