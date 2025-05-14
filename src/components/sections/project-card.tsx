
"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Dialog>
      <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={project.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             <div className="absolute bottom-4 left-4">
              <CardTitle className="text-xl font-semibold text-primary-foreground line-clamp-2">{project.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">
            {project.shortDescription}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-between items-center gap-2">
           <DialogTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <ExternalLink className="mr-2 h-4 w-4" /> View Details
            </Button>
          </DialogTrigger>
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[625px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
          <div className="relative aspect-video w-full my-4 rounded-md overflow-hidden">
            <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint}
            />
          </div>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {project.detailedOverview}
          </DialogDescription>
        </DialogHeader>
         <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        <div className="mt-6 flex justify-end">
          <Button asChild>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
