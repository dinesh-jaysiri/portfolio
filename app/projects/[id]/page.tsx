import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge, Flex, Heading, Text, Box, Grid } from "@radix-ui/themes";
import { projects } from "@/data";
import SectionBlock from "@/app/_components/SectionBlock";
import SectionTitle from "@/app/_components/SectionTitle";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: Props) {
  const id = (await params).id;
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <SectionBlock className="pt-[100px]">
      <SectionTitle
        whiteTitle={project.title}
        subTitle={project.shortDescription}
      />

      {/* Screenshots Gallery */}
      {project.screenshots.length > 0 && (
        <Box className="mt-16">
          <Heading size="5" className="text-gray-300 mb-6">
            Screenshots
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-400/20 transition-colors group"
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </Box>
      )}

      {/* Project Details Grid */}
      <Grid columns={{ initial: "1" }} gap="8" className="mt-12">
        {/* Description */}
        <Box>
          <Heading size="5" className="text-gray-300 mb-4">
            Project Overview
          </Heading>
          <Text className="text-gray-400 leading-relaxed">
            {project.description}
          </Text>
        </Box>

        {/* Tech Stack */}
        <Box className="space-y-4">
          <Heading size="5" className="text-gray-300 mb-4">
            Technologies
          </Heading>
          <Flex wrap="wrap" gap="2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="soft"
                className="bg-gray-800/50 text-emerald-300 border border-emerald-400/20"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Grid>
    </SectionBlock>
  );
}
