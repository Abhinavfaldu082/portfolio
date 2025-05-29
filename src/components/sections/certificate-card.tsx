"use client";

import type { FC } from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Certificate } from "@/types";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useCursorGlow({ elementRef: cardRef, glowSize: 350 });

  return (
    <Card
      ref={cardRef}
      className={cn(
        "card-glow-effect interactive-glow-border",
        "group relative rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col"
      )}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={certificate.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1 line-clamp-2">
          {certificate.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Issued by: {certificate.issuedBy}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link
            href={certificate.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificateCard;
