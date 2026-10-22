import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateInquiryPDF, InquiryData } from '@/lib/pdfGenerator';

// Visitor input goes into HTML emails, so escape it before interpolating.
const escapeHtml = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    // The form only has these three fields; all are required.
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required inquiry fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('[Inquiry API] RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const inquiryData: InquiryData = { name, email, message };

    // 1. Generate PDF Report in-memory
    console.log('[Inquiry API] Generating PDF report...');
    const pdfBuffer = await generateInquiryPDF(inquiryData);
    console.log(`[Inquiry API] PDF successfully generated (${pdfBuffer.length} bytes)`);

    const resend = new Resend(resendApiKey);
    const companyEmail = 'info@sialathletics.com';
    const salesNotificationEmail = 'sales@sialathletics.com';

    // Prepare Email templates
    const cleanNameFilename = name.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 60) || 'Inquiry';
    const attachmentFilename = `SIAL_Athletics_Inquiry_${cleanNameFilename}.pdf`;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const salesEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0;">New Website Inquiry</h2>
        <p>A new inquiry has been submitted through the website contact form. A PDF copy is attached.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Contact Name:</td>
            <td style="padding: 10px;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Work Email:</td>
            <td style="padding: 10px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
        </table>
        
        <h3 style="margin-top: 20px; color: #111111;">Message:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #eeeeee; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #333333;">${safeMessage}</div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 10px;">
          SIAL Athletics lead capture automated email.
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0; font-size: 20px;">Thank You for Reaching Out to SIAL Athletics</h2>
        <p>Dear ${safeName},</p>
        <p>Thank you for your inquiry to SIAL Athletics. We are excited about the prospect of partnering with your brand.</p>
        <p>A copy of your inquiry <strong>(PDF)</strong> is attached to this email for your records.</p>
        
        <p>Our sales and production teams at SIAL Athletics will review your requirements and get back to you within <strong>24 business hours</strong>.</p>
        
        <p>If you have any immediate corrections or additional details, please reply directly to this email or write to us at <a href="mailto:${companyEmail}" style="color: #E31B23; text-decoration: none; font-weight: bold;">${companyEmail}</a>.</p>
        
        <p style="margin-top: 30px; margin-bottom: 5px;">Best Regards,</p>
        <p style="font-weight: bold; margin: 0; color: #111111;">SIAL Athletics B2B Team</p>
        
        <div style="margin-top: 30px; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; padding-top: 15px; text-align: center;">
          © ${new Date().getFullYear()} SIAL Athletics. All rights reserved. <br/>
          <a href="https://www.sialathletics.com" style="color: #999999; text-decoration: underline;">www.sialathletics.com</a>
        </div>
      </div>
    `;

    const attachments = [
      {
        filename: attachmentFilename,
        content: pdfBuffer,
      },
    ];

    // 2. Send notification email to company inbox
    console.log('[Inquiry API] Dispatching notification to company...');
    const { error: salesError } = await resend.emails.send({
      from: 'Sial Athletics <sales@sialathletics.com>',
      to: salesNotificationEmail,
      replyTo: email,
      subject: `New Website Inquiry: ${name}`,
      html: salesEmailHtml,
      attachments,
    });

    if (salesError) {
      console.error('[Inquiry API] Error sending notification email to sales team:', salesError);
      return NextResponse.json(
        { success: false, error: 'Failed to send notification email.', details: salesError.message },
        { status: 500 }
      );
    }

    // 3. Send confirmation email to the client
    console.log('[Inquiry API] Dispatching confirmation to client...');
    const { error: clientError } = await resend.emails.send({
      from: 'Sial Athletics <sales@sialathletics.com>',
      to: email,
      replyTo: companyEmail,
      subject: `Your Inquiry — SIAL Athletics`,
      html: clientEmailHtml,
      attachments,
    });

    if (clientError) {
      console.error('[Inquiry API] Error sending confirmation email to client:', clientError);
      // We don't fail the whole request if the client confirmation fails, but we'll log it
    }

    console.log('[Inquiry API] Emails successfully processed.');

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Confirmation and notification emails sent successfully.',
    });
  } catch (error: any) {
    console.error('[Inquiry API ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
