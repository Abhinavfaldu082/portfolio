
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

  // IMPORTANT: This function currently only SIMULATES sending an email.
  // The details are logged to the server console.
  // To actually send an email, you need to integrate an email service provider
  // (e.g., SendGrid, Resend, Nodemailer with an SMTP service).
  console.log("Received contact form submission (simulation):");
  console.log("To: abhinavfaldu@gmail.com"); // Target email
  console.log("From Name:", name);
  console.log("From Email:", email);
  console.log("Message:", message);
  
  // Example of what real email sending logic might look like:
  // await sendEmail({ 
  //   to: "abhinavfaldu@gmail.com", 
  //   from: email, // Or a designated "no-reply" address from your domain
  //   subject: `Contact Form Submission from ${name}`, 
  //   text: message 
  // });

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you! Your message has been sent successfully.",
    status: "success",
  };
}
