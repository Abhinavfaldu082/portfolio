
import type { FC } from "react";
import CertificateCard from "./certificate-card";
import type { Certificate } from "@/types";

const certificatesData: Certificate[] = [
  {
    id: "1",
    title: "Data Science Professional Certificate",
    imageUrl: "https://placehold.co/600x375.png",
    imageHint: "certificate document",
    certificateLink: "https://coursera.org/verify/your-cert-id-1", // Replace with actual link
    issuedBy: "Coursera (IBM)",
  },
  {
    id: "2",
    title: "Machine Learning Specialization",
    imageUrl: "https://placehold.co/600x375.png",
    imageHint: "certificate document",
    certificateLink: "https://coursera.org/verify/your-cert-id-2", // Replace with actual link
    issuedBy: "Coursera (Stanford University)",
  },
  {
    id: "3",
    title: "Python for Data Science and AI",
    imageUrl: "https://placehold.co/600x375.png",
    imageHint: "certificate document",
    certificateLink: "https://coursera.org/verify/your-cert-id-3", // Replace with actual link
    issuedBy: "Coursera (IBM)",
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
