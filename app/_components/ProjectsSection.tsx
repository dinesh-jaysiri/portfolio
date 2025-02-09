import React from "react";
import SectionTitle from "@/app/_components/SectionTitle";
import { Flex } from "@radix-ui/themes";
import ProjectCard from "@/app/_components/ProjectCard";
import SectionBlock from "@/app/_components/SectionBlock";

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      imageSrc: "/projects/project-1.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/yourusername/ecommerce-project",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates.",
      imageSrc: "/projects/project-2.png",
      technologies: ["React", "Firebase", "Material-UI"],
      liveLink: "https://example-task-app.com",
      githubLink: "https://github.com/yourusername/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with data visualization.",
      imageSrc: "/projects/project-3.jpg",
      technologies: ["Vue.js", "D3.js", "OpenWeather API"],
      liveLink: "https://example-weather-dashboard.com",
      githubLink: "https://github.com/yourusername/weather-dashboard",
    },

    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      imageSrc: "/projects/project-4.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/yourusername/ecommerce-project",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates.",
      imageSrc: "/projects/project-5.png",
      technologies: ["React", "Firebase", "Material-UI"],
      liveLink: "https://example-task-app.com",
      githubLink: "https://github.com/yourusername/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with data visualization.",
      imageSrc: "/projects/project-6.png",
      technologies: ["Vue.js", "D3.js", "OpenWeather API"],
      liveLink: "https://example-weather-dashboard.com",
      githubLink: "https://github.com/yourusername/weather-dashboard",
    },
  ];
  return (
    <SectionBlock>
      <SectionTitle
        whiteTitle="Selected"
        accentTitle="Projects"
        subTitle={
          "Some description about this section and more Some description about this section and more."
        }
      />
      {/*<Grid*/}
      {/*  columns={{ initial: "1", md: "2", lg: "3" }}*/}
      {/*  gap="4"*/}
      {/*  className="mt-8"*/}
      {/*>*/}
      {/*  {projects.map((project, index) => (*/}
      {/*    <ProjectCard key={index} {...project} />*/}
      {/*  ))}*/}
      {/*</Grid>*/}

      <Flex direction="column" gap="6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Flex>
    </SectionBlock>
  );
}

export default ProjectsSection;
