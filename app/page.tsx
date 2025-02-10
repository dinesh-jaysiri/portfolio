import HeroSection from "@/app/_components/HeroSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import BlogSection from "./_components/BlogSection";
import ProfileSection from "./_components/ProfileSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      <ProfileSection />
      <Footer />
    </>
  );
}
