import React from "react";
import SectionTitle from "@/app/_components/SectionTitle";
import { Flex } from "@radix-ui/themes";
import ProjectCard from "@/app/_components/ProjectCard";
import SectionBlock from "@/app/_components/SectionBlock";
import { projects } from "@/data";

function ProjectsSection() {

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
