
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Contact Form Schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Nodemailer transporter setup
  // IMPORTANT: Ensure these environment variables are set in your .env file
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // Default to 587 if not set
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your SMTP username
      pass: process.env.SMTP_PASS, // Your SMTP password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender address (can be the user's email or your 'no-reply' email)
    to: "abhinavfaldu@gmail.com", // Your receiving email address
    replyTo: email, // Set reply-to to the user's email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p>You have received a new message from your portfolio contact form.</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, "<br>")}</p>`,
  };

  try {
    console.log("Attempting to send email with Nodemailer...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return {
      message: "Thank you! Your message has been sent successfully.",
      status: "success",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    let errorMessage = "An unexpected error occurred while sending your message. Please try again later.";
    if (error instanceof Error) {
        // You might want to log error.message for more specific details on the server
        // but avoid sending detailed technical errors to the client.
        console.error("Nodemailer error details:", error.message);
    }
    return {
      message: errorMessage,
      status: "error",
    };
  }
}
