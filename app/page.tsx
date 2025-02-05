import HeroSection from "@/app/_components/HeroSection";
import { Box, Container } from "@radix-ui/themes";
import ProjectsSection from "@/app/_components/ProjectsSection";
import HeroIllustration from "@/app/_components/HeroIllustration";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
}
