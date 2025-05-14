
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Certificate } from "@/types";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={certificate.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1 line-clamp-2">{certificate.title}</CardTitle>
        <p className="text-sm text-muted-foreground">Issued by: {certificate.issuedBy}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={certificate.certificateLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificateCard;
