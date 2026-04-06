import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

// Rate limiting: simple in-memory store (resets on deploy)
const submissions = new Map<string, { count: number; resetAt: number }>();
const MAX_PER_HOUR = 3;

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const entry = submissions.get(email);
  if (!entry || now > entry.resetAt) {
    submissions.set(email, { count: 1, resetAt: now + 3600000 });
    return false;
  }
  if (entry.count >= MAX_PER_HOUR) return true;
  entry.count++;
  return false;
}

// Block disposable email domains
const blockedDomains = [
  "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
  "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com",
  "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com",
  "maildrop.cc", "temp-mail.org", "getnada.com", "tempinbox.com",
  "mohmal.com", "burpcollaborator.net", "mailnesia.com", "tempr.email",
];

function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const domain = email.split("@")[1]?.toLowerCase();
  return !blockedDomains.includes(domain);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, company, category, story, complaint } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !country || !company?.trim() || !category || !story?.trim()) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid or disposable email address." }, { status: 400 });
    }

    // Validate story length
    if (story.trim().length < 50) {
      return NextResponse.json({ error: "Story must be at least 50 characters." }, { status: 400 });
    }

    // Rate limit
    if (isRateLimited(email)) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    const countryName =
      country === "IN" ? "India" :
      country === "US" ? "United States" :
      country === "UK" ? "United Kingdom" : "Other";

    // Send email via Resend
    await getResend().emails.send({
      from: "The Consumer Story <submissions@theconsumerstory.com>",
      to: "editor@theconsumerstory.com",
      replyTo: email,
      subject: `New Story Submission: ${company} — ${category}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
            New Consumer Story Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px; font-weight: bold; color: #475569; width: 120px;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Country</td><td style="padding: 8px;">${countryName}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Company</td><td style="padding: 8px; font-weight: bold;">${company}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Category</td><td style="padding: 8px;">${category}</td></tr>
          </table>
          <h3 style="color: #1e293b; margin-top: 24px;">Story</h3>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${story}</div>
          ${complaint ? `
            <h3 style="color: #1e293b; margin-top: 24px;">Complaint Filed</h3>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${complaint}</div>
          ` : ""}
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Submitted via theconsumerstory.com/submit
          </p>
        </div>
      `,
    });

    // Send confirmation to submitter
    await getResend().emails.send({
      from: "The Consumer Story <noreply@theconsumerstory.com>",
      to: email,
      subject: "We received your story — The Consumer Story",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1e293b;">Thank you for sharing your story, ${name}.</h2>
          <p>We have received your submission about <strong>${company}</strong> and our editorial team will review it.</p>
          <p>What happens next:</p>
          <ul>
            <li>Our team will review your submission for accuracy and completeness</li>
            <li>We may reach out to you at this email for additional details or evidence</li>
            <li>If verified, your story will be published on theconsumerstory.com</li>
          </ul>
          <p>If you have additional evidence (screenshots, receipts, court documents), you can reply to this email with attachments.</p>
          <p style="color: #64748b; margin-top: 24px;">— The Consumer Story Team<br>theconsumerstory.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
