import React from "react";
import {
  Card,
  Box,
  Flex,
  Text,
  Avatar,
  Separator,
  Heading,
  IconButton,
} from "@radix-ui/themes";
import { MoreVertical } from "lucide-react";
import ProfileCard from "./ProfileCard";

const techStack = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Auth.js", icon: "/icons/authjs.svg" },
  { name: "ShadCN", icon: "/icons/shadcn.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
];

const ProfileSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Left: Profile Card */}
      <ProfileCard />

      {/* Right: About Details */}
      <Box className="flex-1">
        <Heading as="h2" size="7" weight="bold" className="mb-4">
          About Me
        </Heading>
        <Text size="3" className="text-gray-400 mb-6 leading-relaxed">
          I am a passionate software engineer with a focus on building scalable
          and high-performance web applications. With experience in full-stack
          development, I specialize in technologies like Next.js, Prisma, and
          PostgreSQL. I am also deeply interested in blockchain technology and
          its applications in decentralized systems.
        </Text>

        <Separator size="4" className="my-6" />

        {/* Tech Stack */}
        <Box className="mb-8">
          <Heading as="h3" size="5" weight="bold" className="mb-4">
            Tech Stack
          </Heading>
          <Flex gap="4" wrap="wrap">
            {techStack.map((tech) => (
              <Box key={tech.name} className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <Text size="3">{tech.name}</Text>
              </Box>
            ))}
          </Flex>
        </Box>

        <Separator size="4" className="my-6" />

        {/* Experience Section */}
        <Box className="mb-8">
          <Heading as="h3" size="5" weight="bold" className="mb-4">
            Work Experience
          </Heading>
          <Flex direction="column" gap="4">
            <Box>
              <Text size="3" weight="bold">
                Senior Software Engineer
              </Text>
              <Text size="2" className="text-gray-500">
                XYZ Company | 2022 - Present
              </Text>
              <Text size="2" className="text-gray-400">
                Developing a multi-tenant pharmacy e-commerce platform using
                Next.js and Prisma.
              </Text>
            </Box>
            <Box>
              <Text size="3" weight="bold">
                Software Engineer
              </Text>
              <Text size="2" className="text-gray-500">
                ABC Tech | 2019 - 2022
              </Text>
              <Text size="2" className="text-gray-400">
                Built scalable SaaS applications and optimized PostgreSQL
                performance.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Separator size="4" className="my-6" />

        {/* Education Section */}
        <Box>
          <Heading as="h3" size="5" weight="bold" className="mb-4">
            Education
          </Heading>
          <Flex direction="column" gap="4">
            <Box>
              <Text size="3" weight="bold">
                B.Sc. in Computer Science
              </Text>
              <Text size="2" className="text-gray-500">
                University of XYZ - 2020
              </Text>
            </Box>
            <Box>
              <Text size="3" weight="bold">
                Diploma in Software Engineering
              </Text>
              <Text size="2" className="text-gray-500">
                ABC Institute - 2018
              </Text>
            </Box>
            <Box>
              <Text size="3" weight="bold">
                Certified Full-Stack Developer
              </Text>
              <Text size="2" className="text-gray-500">
                Online Bootcamp - 2017
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </section>
  );
};

export default ProfileSection;
