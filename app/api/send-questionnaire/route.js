// app/api/send-questionnaire/route.js
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
    const {
      name,
      location,
      postCode,
      email,
      phone,
      startDate,
      hasPlans,
      budget,
      financeApproval,
      hearAboutUs,
      projectDescription,
    } = body;

    // Basic validation
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: "tyler@twilsonbuilders.co.nz",
      subject: `New Project Questionnaire Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Project Questionnaire Submission
          </h2>
          
          <div style="background: #f8f8f8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Post Code:</strong> ${postCode}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background: #fff; padding: 20px; border-radius: 5px; border: 1px solid #eee; margin: 20px 0;">
            <h3 style="color: #444; margin-top: 0;">Project Details</h3>
            <p><strong>Desired Start Date:</strong> ${
              startDate || "Not specified"
            }</p>
            <p><strong>Professional Plans:</strong> ${hasPlans}</p>
            <p><strong>Approximate Budget:</strong> ${budget}</p>
            <p><strong>Finance Approval:</strong> ${financeApproval}</p>
            <p><strong>How they heard about us:</strong> ${hearAboutUs}</p>
          </div>

          <div style="background: #f8f8f8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${projectDescription}</p>
          </div>

          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>To reply to this inquiry, simply reply to this email and your response will be sent to ${email}</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Questionnaire email sent:", info);

    // Send confirmation email to the form submitter
    const confirmationMail = {
      from: `"T.Wilson Builders" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your project questionnaire - T.Wilson Builders`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for submitting your project questionnaire!</h2>
          <p>Dear ${name},</p>
          <p>We have received your project questionnaire and will review it shortly. Our team will get back to you with more information about your project.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Project Summary</h3>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Desired Start Date:</strong> ${
              startDate || "Not specified"
            }</p>
            <p><strong>Project Description:</strong></p>
            <p style="white-space: pre-wrap;">${projectDescription}</p>
          </div>

          <div style="margin-top: 20px; padding: 20px; border-top: 1px solid #eee;">
            <h3>Next Steps</h3>
            <p>Our team will:</p>
            <ul>
              <li>Review your project requirements</li>
              <li>Prepare a detailed quote</li>
              <li>Contact you to discuss your project further</li>
            </ul>
          </div>

          <hr style="margin: 20px 0" />
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation. Please don't reply to this email.<br/>
            We will contact you at ${email} or ${phone} soon.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMail);

    return NextResponse.json(
      { message: "Questionnaire submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit questionnaire" },
      { status: 500 }
    );
  }
}
