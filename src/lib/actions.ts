
"use server";

import { z } from "zod";

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

  // Simulate email sending
  console.log("Received contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  // In a real application, you would integrate an email service here (e.g., SendGrid, Nodemailer)
  // For example: await sendEmail({ to: "your.email@example.com", from: email, subject: `Contact from ${name}`, text: message });

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you! Your message has been sent successfully.",
    status: "success",
  };
}
