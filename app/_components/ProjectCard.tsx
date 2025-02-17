import type React from "react";
import {
  Card,
  Flex,
  Text,
  Badge,
  Box,
  Button,
  Heading,
  Separator,
} from "@radix-ui/themes";
import Image from "next/image";
import { GithubIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  shortDescription,
  imageSrc,
  technologies,
  liveLink,
  githubLink,
  index,
}) => {
  return (
    <Card variant="surface" size="2" className="w-full overflow-hidden">
      <Flex
        direction={{
          initial: "column-reverse",
          sm: index % 2 === 0 ? "row" : "row-reverse",
        }} // Swap order for every alternate project
        gap="6"
      >
        {/* Left Content */}
        <Flex direction="column" className="flex-1 space-y-6 justify-between">
          <Box className="space-y-6">
            <Heading as="h3" size="6" weight="bold" className="text-white">
              {title}
            </Heading>
            <Text as="p" size="3" className="text-gray-400 max-w-xl">
              {shortDescription}
            </Text>

            {/* Tools Section */}
            <Flex align="center" gap="2">
              <Text size="2" className="text-gray-500">
                Tools:
              </Text>
              <Flex gap="2" wrap="wrap">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="soft" color="teal" radius="large">
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </Box>

          {/* Full-Width Separator */}
          <Box className="w-full">
            <Separator size="4" className="bg-gray-800" />
          </Box>

          {/* Action Buttons */}
          <Flex gap="3">
            {liveLink && (
              <Link href={liveLink} className="no-underline">
                <Button radius="full" size="3" variant="surface" color="teal">
                  <LinkIcon strokeWidth={1} size={"20"} />
                  View Project
                </Button>
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink} className="no-underline cursor-pointer">
                <Button
                  className="cursor-pointer"
                  radius="full"
                  size="3"
                  variant="outline"
                  color="gray"
                >
                  <GithubIcon strokeWidth={1} size={"20"} />
                  Repository
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>

        {/* Right Image */}
        <Box
          width={{ initial: "100%", sm: "350px", md: "400px" }}
          height="250px"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10 rounded-lg overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover rounded-lg"
              style={{ mixBlendMode: "luminosity" }}
            />
          </div>
        </Box>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
