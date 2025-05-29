
"use client";

import type { FC } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { cn } from "@/lib/utils";

const skills = [
  "Python (Pandas, NumPy, Scikit-learn)",
  "SQL & Database Management",
  "Machine Learning Algorithms",
  "Data Visualization (Matplotlib, Seaborn, Plotly)",
  "Statistical Analysis",
  "Big Data Technologies (Spark, Hadoop - Basic)",
  "Excel & Power BI",
  "Problem Solving & Critical Thinking",
];

const AboutSection: FC = () => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  useCursorGlow({ elementRef: card1Ref, glowSize: 350 }); 
  useCursorGlow({ elementRef: card2Ref, glowSize: 350 });

  return (
    <section id="about" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A glimpse into my journey, skills, and aspirations in data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card
            ref={card1Ref}
            className={cn(
              "card-glow-effect interactive-glow-border",
              "shadow-lg h-full flex flex-col"
            )}
          >
            <CardContent className="p-6 md:p-8">
              {/* <div className="relative aspect-video mb-6 rounded-md overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="My Workspace"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  data-ai-hint="workspace technology"
                />
              </div> */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hello! I am a recent graduate with a strong foundation in Data
                Science, equipped with analytical skills and a keen interest in
                leveraging data to drive decisions. My academic journey and
                personal projects have provided me with hands-on experience in
                machine learning, statistical modeling, and data visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am passionate about exploring complex datasets to find
                meaningful patterns and insights. I thrive in collaborative
                environments and am always eager to learn new technologies and
                methodologies in the ever-evolving field of data science.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to impactful projects where I can apply
                my skills to solve challenging problems and create value. I am
                actively seeking opportunities where I can grow as a data
                scientist and make a difference.
              </p>
            </CardContent>
          </Card>

          <Card
            ref={card2Ref}
            className={cn(
              "card-glow-effect interactive-glow-border",
              "shadow-lg"
            )}
          >
            <CardHeader>
              <CardTitle className="text-2xl">My Key Skills</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
