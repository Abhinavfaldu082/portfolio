// 'use server'

/**
 * @fileOverview An AI agent to optimize a resume based on a job description.
 *
 * - optimizeResume - A function that optimizes the resume.
 * - OptimizeResumeInput - The input type for the optimizeResume function.
 * - OptimizeResumeOutput - The return type for the optimizeResume function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeResumeInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be optimized.'),
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume towards.'),
});
export type OptimizeResumeInput = z.infer<typeof OptimizeResumeInputSchema>;

const OptimizeResumeOutputSchema = z.object({
  optimizedResume: z
    .string()
    .describe('The optimized resume tailored to the job description.'),
  suggestions: z
    .string()
    .describe('Suggestions for improving the resume based on the job description.'),
});
export type OptimizeResumeOutput = z.infer<typeof OptimizeResumeOutputSchema>;

export async function optimizeResume(input: OptimizeResumeInput): Promise<OptimizeResumeOutput> {
  return optimizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeResumePrompt',
  input: {schema: OptimizeResumeInputSchema},
  output: {schema: OptimizeResumeOutputSchema},
  prompt: `You are an expert resume writer. Your goal is to optimize the user's resume based on a provided job description.

        Here is the resume:
        {{resumeText}}

        Here is the job description:
        {{jobDescription}}

        Please provide an optimized version of the resume, highlighting the skills and experiences that are most relevant to the job description. Also, include suggestions for improving the resume.
        Ensure the optimized resume is complete and well-formatted, ready to be used for job applications. Return the optimized resume and suggestions in the format specified by the schema.
        `,
});

const optimizeResumeFlow = ai.defineFlow(
  {
    name: 'optimizeResumeFlow',
    inputSchema: OptimizeResumeInputSchema,
    outputSchema: OptimizeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
