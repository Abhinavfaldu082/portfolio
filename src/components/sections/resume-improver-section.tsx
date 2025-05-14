
"use client";

import type { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { BrainCircuit, UploadCloud, FileText, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { handleResumeOptimization, type ResumeOptimizerFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const initialState: ResumeOptimizerFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></span>
          Optimizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" /> Optimize Resume
        </>
      )}
    </Button>
  );
}

const ResumeImproverSection: FC = () => {
  const [state, formAction] = useFormState(handleResumeOptimization, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Optimization Complete!",
        description: state.message,
      });
    } else if (state.status === "error" && state.message && !state.errors) {
      toast({
        title: "Optimization Failed!",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="resume-improver" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            <BrainCircuit className="mr-3 h-10 w-10 text-primary" /> AI Resume Optimizer
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Enhance your resume by tailoring it to a specific job description using AI.
          </p>
        </div>

        <Card className="shadow-lg max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Optimize Your Resume</CardTitle>
            <CardDescription>
              Paste your current resume text and the job description you&apos;re targeting. Our AI will provide an optimized version and suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="resumeText" className="flex items-center mb-1 text-lg">
                    <UploadCloud className="mr-2 h-5 w-5 text-primary" /> Your Resume Text
                  </Label>
                  <Textarea
                    id="resumeText"
                    name="resumeText"
                    placeholder="Paste your full resume text here..."
                    rows={12}
                    required
                    className="text-sm"
                  />
                  {state.errors?.resumeText && <p className="text-sm text-destructive mt-1">{state.errors.resumeText[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="jobDescription" className="flex items-center mb-1 text-lg">
                    <FileText className="mr-2 h-5 w-5 text-primary" /> Target Job Description
                  </Label>
                  <Textarea
                    id="jobDescription"
                    name="jobDescription"
                    placeholder="Paste the job description here..."
                    rows={12}
                    required
                    className="text-sm"
                  />
                  {state.errors?.jobDescription && <p className="text-sm text-destructive mt-1">{state.errors.jobDescription[0]}</p>}
                </div>
              </div>
              <SubmitButton />
              {state.status === "error" && state.message && !state.errors && (
                <Alert variant="destructive" className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{state.message}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>

        {state.status === "success" && state.data && (
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-primary" /> Optimized Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap bg-muted/50 p-4 rounded-md text-sm leading-relaxed max-h-[500px] overflow-y-auto">
                  {state.data.optimizedResume}
                </pre>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Info className="mr-2 h-6 w-6 text-primary" /> Improvement Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap bg-muted/50 p-4 rounded-md text-sm leading-relaxed max-h-[500px] overflow-y-auto">
                  {state.data.suggestions}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
         {state.status === "idle" && (
            <Card className="mt-12 max-w-4xl mx-auto shadow-lg">
                <CardContent className="p-6 text-center text-muted-foreground">
                    <BrainCircuit className="mx-auto h-12 w-12 mb-4 text-primary/50" />
                    <p>Results of the AI optimization will appear here once you submit the form.</p>
                </CardContent>
            </Card>
        )}
      </div>
    </section>
  );
};

export default ResumeImproverSection;
