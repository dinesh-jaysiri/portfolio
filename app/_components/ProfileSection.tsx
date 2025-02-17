import React from "react";
import { Box, Flex, Heading, Separator, Text, Tooltip } from "@radix-ui/themes";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import TooltipCard from "./TooltipCard"; // Import TooltipCard component

const techStack = [
  {
    name: "Next.js",
    icon: "/tech/nextjs.svg",
    link: "https://nextjs.org",
    description:
      "My go-to framework for static generation, dynamic paths, and built-in API. ps: I prefer the pages folder over the new app router.",
  },
  {
    name: "Prisma",
    icon: "/tech/prisma.svg",
    link: "https://www.prisma.io",
    description:
      "I use Prisma for its strong type safety and database migrations, making database management seamless.",
  },
  {
    name: "React Query",
    icon: "/tech/reactquery.svg",
    link: "https://tanstack.com/query",
    description:
      "Helps me handle server state efficiently with caching and background synchronization.",
  },
  {
    name: "Auth.js",
    icon: "/tech/authjs.svg",
    link: "https://authjs.dev",
    description:
      "Handles authentication securely with built-in OAuth, JWT, and credential-based authentication.",
  },
  {
    name: "TypeScript",
    icon: "/tech/ts.svg",
    link: "https://www.typescriptlang.org",
    description:
      "I prefer TypeScript for its static typing, which helps catch errors at compile time.",
  },
  {
    name: "Solidity",
    icon: "/tech/solidity.svg",
    link: "https://soliditylang.org",
    description:
      "I use Solidity to write smart contracts for blockchain applications.",
  },
];

const ProfileSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-32">
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
              <Tooltip key={tech.name} content={<TooltipCard {...tech} />}>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </Tooltip>
            ))}
          </Flex>
        </Box>

        <Separator size="4" className="my-6" />

        {/* Work Experience Section */}
        <Box className="mb-8">
          <Heading as="h3" size="5" weight="bold" className="mb-4">
            Work Experience
          </Heading>
          <Flex direction="column" gap="6">
            {/* Senior Software Engineer */}
            <Box>
              <Text size="3" weight="bold">
                Senior Software Engineer {"  "}
              </Text>
              <Text size="2" className="text-gray-500">
                XYZ Company | 2022 - Present
              </Text>
              <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                <li>
                  Developing a multi-tenant pharmacy e-commerce platform using
                  Next.js and Prisma.
                </li>
                <li>
                  Implementing authentication with Auth.js for secure user
                  management.
                </li>
                <li>
                  Optimizing PostgreSQL queries for better database performance.
                </li>
                <li>Integrating Stripe for subscription-based billing.</li>
              </ul>
            </Box>

            {/* Software Engineer */}
            <Box>
              <Text size="3" weight="bold">
                Software Engineer {"  "}
              </Text>
              <Text size="2" className="text-gray-500">
                ABC Tech | 2019 - 2022
              </Text>
              <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                <li>
                  Built scalable SaaS applications with Next.js and TypeScript.
                </li>
                <li>
                  Designed and implemented a role-based access control system.
                </li>
                <li>Refactored backend services to improve API performance.</li>
                <li>
                  Led a team of developers to migrate a legacy system to a
                  modern stack.
                </li>
              </ul>
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
