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
        "A full-stack e-commerce solution with real-time inventory management. A full-stack e-commerce solution with real-time inventory management.",
      imageSrc: "/projects/project-1.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/yourusername/ecommerce-project",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates. A collaborative task management tool with real-time updates.",
      imageSrc: "/projects/project-2.png",
      technologies: ["React", "Firebase", "Material-UI"],
      liveLink: "https://example-task-app.com",
      githubLink: "https://github.com/yourusername/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with data visualization. A responsive weather dashboard with data visualization.",
      imageSrc: "/projects/project-3.jpg",
      technologies: ["Vue.js", "D3.js", "OpenWeather API"],
      liveLink: "https://example-weather-dashboard.com",
      githubLink: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot using OpenAI's GPT model. An AI-powered chatbot using OpenAI's GPT model.",
      imageSrc: "/projects/project-4.png",
      technologies: ["Python", "OpenAI API", "React"],
      liveLink: "https://example-chatbot.com",
      githubLink: "https://github.com/yourusername/chatbot-project",
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

      <Flex direction="column" gap="6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </Flex>
    </SectionBlock>
  );
}

export default ProjectsSection;
