
"use server";

import { z } from "zod";
import { optimizeResume as optimizeResumeFlow, type OptimizeResumeInput, type OptimizeResumeOutput } from "@/ai/flows/resume-optimizer";

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


// Resume Optimizer Schema & Action
const ResumeOptimizerSchema = z.object({
  resumeText: z.string().min(50, { message: "Resume text must be at least 50 characters." }),
  jobDescription: z.string().min(50, { message: "Job description must be at least 50 characters." }),
});

export type ResumeOptimizerFormState = {
  message: string;
  status: "success" | "error" | "idle";
  data?: OptimizeResumeOutput;
  errors?: {
    resumeText?: string[];
    jobDescription?: string[];
  };
};

export async function handleResumeOptimization(
  prevState: ResumeOptimizerFormState,
  formData: FormData
): Promise<ResumeOptimizerFormState> {
  const validatedFields = ResumeOptimizerSchema.safeParse({
    resumeText: formData.get("resumeText"),
    jobDescription: formData.get("jobDescription"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const inputData: OptimizeResumeInput = validatedFields.data;

  try {
    const result = await optimizeResumeFlow(inputData);
    return {
      message: "Resume optimized successfully!",
      status: "success",
      data: result,
    };
  } catch (error) {
    console.error("Error optimizing resume:", error);
    return {
      message: "An error occurred while optimizing the resume. Please try again.",
      status: "error",
    };
  }
}
