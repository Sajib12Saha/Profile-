"use server";

import nodemailer from "nodemailer";

interface EmailProps {
  from: string;
  subject: string;
  text: string;
}

export async function sendEmail({ from, subject, text }: EmailProps) {
  // Validation
  if (!from || !subject || !text) {
    throw new Error("Missing required fields");
  }

  try {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },  
      tls: {
        rejectUnauthorized: false, // Ignore invalid certificates
      },

      
     
    });

    console.log({from,subject,text})
    const mailOptions = {
      from,
      to: process.env.EMAIL_USER,
      subject,
      text,
      
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a plain object (serializable)
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error details in a serializable format
    return { success: false, message: "Failed to send email", error: (error as Error).message };
  }
}
