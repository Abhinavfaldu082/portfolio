import type { FC } from "react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { projectsData } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PROJECTS_TO_SHOW_ON_HOMEPAGE = 3;
const ProjectsSection: FC = () => {
  const displayedProjects = projectsData.slice(0, PROJECTS_TO_SHOW_ON_HOMEPAGE);
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A showcase of my data science endeavors and problem-solving skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projectsData.length > PROJECTS_TO_SHOW_ON_HOMEPAGE && (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;