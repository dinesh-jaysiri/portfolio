import React from "react";
import { Box, Flex, Heading, Separator, Text, Tooltip } from "@radix-ui/themes";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import TooltipCard from "./TooltipCard"; 
import Link from "next/link";

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
    <section
      id="about"
      className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-32"
    >
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
            <Box>
              <Text size="3" weight="bold">
                Software Engineer {"  "}
              </Text>
              <Text size="2" className="text-gray-500">
                Infragist | Jul 2024 – Dec 2024 (Part-time)
              </Text>
              <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                <li>
                  Developed LoveTickets.co.uk, an event management platform for
                  concerts and live events.
                </li>
                <li>
                  Designed the database architecture with Laravel and
                  implemented key features for ticket purchasing and event
                  management
                </li>
                <li>
                  Built React-based UI components, converting Figma designs into
                  interactive pages, and collaborated with BA, UI designers, and
                  project managers to deliver features per SRS documents.
                </li>
              </ul>
            </Box>

            {/* Software Engineer */}
            <Box>
              <Text size="3" weight="bold">
                Software Engineer {"  "}
              </Text>
              <Text size="2" className="text-gray-500">
                10QBIT | Jan 2023 – Oct 2024
              </Text>
              <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                <li>
                  Maintained and enhanced the pharmacy management application
                  Primed.com, supporting 10K+ monthly transactions.
                </li>
                <li>
                  Implemented client-side caching to enhance user experience and
                  reduce server load.
                </li>
                <li>
                  Applied the repository pattern to organize backend code,
                  increasing maintainability and scalability.
                </li>
              </ul>
            </Box>

            {/* Associate Blockchain Developer */}
            <Box>
              <Text size="3" weight="bold">
                Associate Blockchain Developer {"  "}
              </Text>
              <Text size="2" className="text-gray-500">
                10QBIT | Apr 2023 – Dec 2023
              </Text>
              <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                <li>
                  Built an experimental voting system for a small organization,
                  demonstrating practical applications of blockchain technology.
                </li>
                <li>
                  Integrated Ethereum smart contracts with frontend using
                  Ethers.js.
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
                BSc (Hons) Electrical & Electronics Engineering (ug){" "}
              </Text>
              <Text size="2" className="text-gray-500">
                2016 - 2021 South Eastern University of Sri Lanka
              </Text>
            </Box>
            <Box>
              <Link
                href={
                  "https://certificates.cs50.io/e9aa9cf1-b818-4f13-a0f4-a974f0a4ec45.pdf?size=letter"
                }
              >
                <Text className="pointer" size="3" weight="bold">
                  CS50x: Intro to Computer Science{" "}
                </Text>
              </Link>

              <Text size="2" className="text-gray-500">
                Harvard - Feb 2023
              </Text>
            </Box>
            <Box>
              <Link
                href={
                  "https://www.credly.com/badges/bd4fc0d5-a55d-4694-a701-aecf589312b0/linked_in_profile"
                }
              >
                <Text className="pointer" size="3" weight="bold">
                  IBM Blockchain Essentials{" "}
                </Text>
              </Link>

              <Text size="2" className="text-gray-500">
                Nov 2022
              </Text>
            </Box>
            <Box>
              <Link
                href={
                  "https://freecodecamp.org/certification/DineshJayasiri/javascript-algorithms-and-data-structures"
                }
              >
                <Text className="pointer" size="3" weight="bold">
                  JavaScript Algorithms and Data Structures{" "}
                </Text>
              </Link>

              <Text size="2" className="text-gray-500">
                Mar 2023
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </section>
  );
};

export default ProfileSection;
