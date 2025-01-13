import React from "react";
import GridSectionBg from "@/app/_components/GridSectionBg";
import SectionTitle from "@/app/_components/SectionTitle";
import { Card, IconButton } from "@radix-ui/themes";
import { GithubIcon, LucideBookType } from "lucide-react";

function ProjectsSection(props) {
  return (
    <GridSectionBg>
      <SectionTitle
        whiteTitle="Selected"
        accentTitle="Projects"
        subTitle={
          "Some description about this section and more Some description about this section and more."
        }
      />
    </GridSectionBg>
  );
}

export default ProjectsSection;
