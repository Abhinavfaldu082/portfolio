
"use client";

import type { FC } from "react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Phone, Send, User, MessageSquare, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
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
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" /> Send Message
        </>
      )}
    </Button>
  );
}

const ContactSection: FC = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null); // Form card
  const card2Ref = useRef<HTMLDivElement>(null); // Contact Info card

  useCursorGlow({ elementRef: card1Ref, glowSize: 350 }); 
  useCursorGlow({ elementRef: card2Ref, glowSize: 300 }); 

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      formRef.current?.reset();
    } else if (state.status === "error" && state.message && !state.errors) {
      toast({
        title: "Error!",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Let&apos;s connect! Reach out for collaborations or inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card
            ref={card1Ref}
            className={cn("card-glow-effect interactive-glow-border", "shadow-lg")}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form, and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center mb-1">
                    <User className="mr-2 h-4 w-4 text-primary" /> Your Name
                  </Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center mb-1">
                    <Mail className="mr-2 h-4 w-4 text-primary" /> Your Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="flex items-center mb-1">
                    <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Your Message
                  </Label>
                  <Textarea id="message" name="message" placeholder="Hi, I'd like to discuss..." rows={5} required />
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
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

          <div className="space-y-6">
            <Card
              ref={card2Ref}
              className={cn("card-glow-effect interactive-glow-border", "shadow-lg")}
            >
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="mailto:abhinavfaldu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    abhinavfaldu@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="tel:+918469134580" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8469134580
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
