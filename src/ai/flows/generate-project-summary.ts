// src/ai/flows/generate-project-summary.ts
'use server';

/**
 * @fileOverview AI flow to generate personalized project summaries based on user interests.
 *
 * - generateProjectSummary - Function to generate a personalized project summary.
 * - GenerateProjectSummaryInput - Input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - Output type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z.string().describe('Detailed description of the project.'),
  visitorInterests: z.string().describe('Inferred interests of the website visitor.'),
});

export type GenerateProjectSummaryInput = z.infer<typeof GenerateProjectSummaryInputSchema>;

const GenerateProjectSummaryOutputSchema = z.object({
  personalizedSummary: z.string().describe('A project summary tailored to the visitor\u2019s interests.'),
});

export type GenerateProjectSummaryOutput = z.infer<typeof GenerateProjectSummaryOutputSchema>;

export async function generateProjectSummary(input: GenerateProjectSummaryInput): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const projectSummaryPrompt = ai.definePrompt({
  name: 'projectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an expert at creating personalized project summaries.

  Based on the visitor's interests, create a project summary that highlights the most relevant aspects of the project.

  Project Description: {{{projectDescription}}}
  Visitor Interests: {{{visitorInterests}}}

  Personalized Summary:`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await projectSummaryPrompt(input);
    return output!;
  }
);
