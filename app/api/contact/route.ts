import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  subject?: string;
  email?: string;
  message?: string;
  locale?: string;
  // Honeypot: real users never fill this. Bots often do.
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Spam honeypot — pretend success so bots don't retry, but send nothing.
  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in name, email and message.' },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  // Until you verify bbrahma.de in Resend, this default sender works out of the box.
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>';

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    );
  }

  const lastName = (body.lastName ?? '').trim();
  const company = (body.company ?? '').trim();
  const subject = (body.subject ?? '').trim();
  const fullName = [firstName, lastName].filter(Boolean).join(' ');

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject || `Portfolio enquiry from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        company ? `Company: ${company}` : null,
        `Email: ${email}`,
        body.locale ? `Sent from: ${body.locale} site` : null,
        '',
        message,
      ]
        .filter((line) => line !== null)
        .join('\n'),
    });

    if (error) {
      return NextResponse.json(
        { error: 'Could not send the message.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Could not send the message.' },
      { status: 502 },
    );
  }
}
