import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'AgenorIT Contact Form <onboarding@resend.dev>';
    const toEmail = process.env.CONTACT_EMAIL || 'info@agenorit.com.au';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Consultation Request: ${name} (${company || 'Individual'})`,
      text: `New consultation request received from AgenorIT website:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service || 'General Inquiry'}\n\nProject Goal / Message:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
          <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 16px; margin-bottom: 20px;">
            <h1 style="font-size: 20px; font-weight: 700; color: #1e3a8a; margin: 0;">New Consultation Request</h1>
            <p style="font-size: 13px; color: #64748b; margin: 4px 0 0 0;">Received via agenorit.com.au</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #64748b; width: 140px; font-weight: 600;">Prospect Name:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #64748b; font-weight: 600;">Company:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${company || 'Not Specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #64748b; font-weight: 600;">Service of Interest:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #0f172a;"><span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${service || 'General Inquiry'}</span></td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6; border-radius: 6px; padding: 16px; margin-top: 16px;">
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin: 0 0 8px 0;">Primary Business Goal:</h3>
            <p style="font-size: 14px; line-height: 1.6; color: #1e293b; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend delivery error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
