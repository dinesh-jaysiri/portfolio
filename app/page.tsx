import HeroSection from "@/app/_components/HeroSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import BlogSection from "./_components/BlogSection";
import ProfileSection from "./_components/ProfileSection";
import OpenToWorkSection from "./_components/OpenToWorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      <ProfileSection />
      <OpenToWorkSection />
      
    </>
  );
}

//ToDo:
// checkout each project and create descriptions and ss if not deployed yet deploy them to vercel -done

// create separate social icon stack and remove duplicate code 
// add email to social icons stack 
// remove top border and add separator for consistency. 

// write new article about multi tenancy application development on nextjs 
// disable products link in the navbar 
// link application correctly with auto scroll to particular section 
// write content for here section buttons and about me section 
// complete education, and work experience part
// create cv
// buy domain 
// deploy vercel and link domain 
// create top banner for linkedin 
// update linkedin
// create excel sheet for track job applications 
// start apply for the jobs 
// move to complete other projects while applying jobs 
