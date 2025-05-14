
import type { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const IntroSection: FC = () => {
  return (
    <section id="home" className="bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A passionate <span className="font-semibold text-primary/90">Data Science Fresher</span> driven by curiosity and a love for uncovering insights from data. Eager to apply analytical skills and machine learning knowledge to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://docs.google.com/document/d/your-resume-id/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-primary/80 hover:text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6 text-primary/80 hover:text-primary" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group aspect-square max-w-md mx-auto md:max-w-none">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://placehold.co/600x600.png"
              alt="Your Name - Professional Portrait"
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-xl object-cover relative"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
