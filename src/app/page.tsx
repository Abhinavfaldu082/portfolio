
import IntroSection from "@/components/sections/intro-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import CertificatesSection from "@/components/sections/certificates-section";
import ContactSection from "@/components/sections/contact-section";
import ResumeImproverSection from "@/components/sections/resume-improver-section";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ResumeImproverSection />
      <ContactSection />
    </>
  );
}
