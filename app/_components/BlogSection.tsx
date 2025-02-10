import React from "react";
import SectionBlock from "./SectionBlock";
import SectionTitle from "./SectionTitle";
import { Flex } from "@radix-ui/themes";
import BlogPostCard from "./BlogPostCard";

function BlogSection() {
  const blogs = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management. A full-stack e-commerce solution with real-time inventory management.",
      imageSrc: "/projects/project-1.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      read_time: "8",
      views: "1457",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates. A collaborative task management tool with real-time updates.",
      imageSrc: "/projects/project-2.png",
      tags: ["React", "Firebase", "Material-UI"],
      read_time: "8",
      views: "1457",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with data visualization. A responsive weather dashboard with data visualization.",
      imageSrc: "/projects/project-3.jpg",
      tags: ["Vue.js", "D3.js", "OpenWeather API"],
      read_time: "8",
      views: "1457",
    },
  ];
  return (
    <SectionBlock>
      <SectionTitle
        whiteTitle="Insights & Stories"
        accentTitle=""
        subTitle={
          "Explore our latest articles, deep dives, and industry insights to stay ahead in the world of technology and innovation"
        }
      />

      <Flex direction="column" gap="6">
        {blogs.map((blog) => (
          <BlogPostCard key={blog.title} {...blog} />
        ))}
      </Flex>
    </SectionBlock>
  );
}

export default BlogSection;
