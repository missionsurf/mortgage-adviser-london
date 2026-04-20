import { NextRequest, NextResponse } from "next/server";

// TODO: Integrate Resend (https://resend.com) to send email notifications
// Example: import { Resend } from "resend"; const resend = new Resend(process.env.RESEND_API_KEY);
// Then: await resend.emails.send({ from: "...", to: "admin@mortgageinternational.co.uk", subject: "...", text: ... })

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const enquiry_type = data.get("enquiry_type");
    const message = data.get("message");

    // Basic validation
    if (!name || !email || !enquiry_type) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log for now — replace with Resend email once API key is configured
    console.log("New contact enquiry:", { name, email, phone, enquiry_type, message });

    return NextResponse.json({ ok: true, message: "Enquiry received" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
