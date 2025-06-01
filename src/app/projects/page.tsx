import type { FC } from "react";
import ProjectCard from "@/components/sections/project-card";
import { projectsData } from "@/lib/projectsData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AllProjectsPage: FC = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <Button variant="outline" asChild className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            All My Projects
          </h1>
          <p className="text-lg text-muted-foreground mt-4 text-center">
            Explore the complete collection of my data science projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;
