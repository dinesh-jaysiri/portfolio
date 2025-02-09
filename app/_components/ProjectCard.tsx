import type React from "react";
import {
  Card,
  Flex,
  Text,
  Badge,
  Box,
  Button,
  Heading,
} from "@radix-ui/themes";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <Card
      variant="surface"
      size="3"
      className="w-full overflow-hidden"
    >
      <Flex direction="row" gap="6">
        {/* Left Content */}
        <Box className="flex-1 space-y-8">
          <Heading as="h3" size="5" weight="bold" className="text-white">
            {title}
          </Heading>
          <Text as="p" size="3" className="text-gray-400 max-w-xl">
            {description}
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

          {/* Action Buttons */}
          <Flex gap="3" mt="4">
            {liveLink && (
              <Link href={liveLink} className="no-underline">
                <Button radius="full" size="2" variant="surface" color="teal">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink} className="no-underline cursor-pointer">
                <Button className="cursor-pointer" radius="full" size="2" variant="outline" color="gray">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Repository
                </Button>
              </Link>
            )}
          </Flex>
        </Box>

        {/* Right Image */}
        <Box className="relative hidden md:block w-[400px] h-[220px]">
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
