
import type { FC } from "react";
import CertificateCard from "./certificate-card";
import type { Certificate } from "@/types";

const certificatesData: Certificate[] = [
  {
    id: "1",
    title: "Google Data Analytics Professional Certificate",
    imageUrl: "./google.png",
    imageHint: "certificate document",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/professional-cert/JRM4LGZET5BI",
    issuedBy: "Google",
  },
  {
    id: "2",
    title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    imageUrl: "./linkedin_microsoft.png",
    imageHint: "certificate document",
    certificateLink:
      "https://www.linkedin.com/learning/certificates/c1ed81456f1bc097aede67cd840f1731f784c98af92f89ae5e07380ec2866ed0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCLMUi5fzRCWxIyide22sSA%3D%3D",
    issuedBy: "Microsoft and LinkedIn",
  },
  {
    id: "3",
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    imageUrl: "./genai.png",
    imageHint: "certificate document",
    certificateLink:
      "https://www.linkedin.com/learning/certificates/8b3997216720446809d0fe86c58df7eec12220ed26a654ce4e67d9c7c4a88b4e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCLMUi5fzRCWxIyide22sSA%3D%3D",
    issuedBy: "Microsoft and LinkedIn",
  },
  {
    id: "4",
    title: "HackerRank SQL Advanced Certificate",
    imageUrl: "./sql.png",
    imageHint: "certificate document",
    certificateLink: "https://www.hackerrank.com/certificates/88204a8f395a",
    issuedBy: "HackerRank",
  },
];

const CertificatesSection: FC = () => {
  return (
    <section id="certificates" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Certificates</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Credentials and specializations I have earned.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
