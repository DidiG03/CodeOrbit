import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, projectType, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable or use a default
    const recipientEmail = process.env.QUOTE_RECIPIENT_EMAIL || process.env.EMAIL || 'your-email@example.com';

    // Format the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
          New Quote Request
        </h2>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #555; margin-bottom: 10px;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        </div>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #555; margin-bottom: 10px;">Project Details</h3>
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
          ${budget ? `<p><strong>Budget Range:</strong> $${budget}</p>` : ''}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        </div>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #555; margin-bottom: 10px;">Message</h3>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>This email was sent from the CodeOrbit quote request form.</p>
          <p>Reply directly to this email to respond to ${name} at ${email}</p>
        </div>
      </div>
    `;

    // Initialize Resend only when needed
    const resend = getResend();

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'CodeOrbit <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New Quote Request from ${name}${company ? ` - ${company}` : ''}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

