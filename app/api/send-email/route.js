// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      // Set the from field to include the sender's name but use our Gmail address
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      // Set reply-to to the form submitter's email
      replyTo: `"${name}" <${email}>`,
      to: "tyler@twilsonbuilders.co.nz",
      subject: `New Contact Form Submission from ${name}`,
      // Add a header to make it clear who the message is actually from
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f8f8f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <strong>Message sent via contact form from:</strong><br/>
            Name: ${name}<br/>
            Email: ${email}
          </div>
          <div style="background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>To reply to this message, simply reply to this email and your response will be sent to ${email}</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    // Send confirmation email to the form submitter
    const confirmationMail = {
      from: `"T.Wilson Builders" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message - T.Wilson Builders`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>For your reference, here's what you sent us:</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
          <hr style="margin: 20px 0" />
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation. Please don't reply to this email.<br/>
            We will respond to your message at ${email} soon.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMail);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
