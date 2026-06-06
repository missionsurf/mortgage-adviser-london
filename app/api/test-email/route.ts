import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env.RESEND_API_KEY

  if (!key) {
    return NextResponse.json({ ok: false, error: 'RESEND_API_KEY not set' })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      from: 'notifications@mortgageinternational.co.uk',
      to: 'admin@mortgageinternational.co.uk',
      subject: 'Test — mortgageadviser.london form emails working ✓',
      text: 'If you received this, the mortgageadviser.london enquiry form emails are working correctly.',
    }),
  })

  const body = await res.json()

  if (!res.ok) {
    return NextResponse.json({ ok: false, status: res.status, error: body })
  }

  return NextResponse.json({ ok: true, id: body.id })
}
