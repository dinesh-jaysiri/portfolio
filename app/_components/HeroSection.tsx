import React from "react";
import HeroButton from "@/app/_components/HeroButton";
import {
  Box,
  Button,
  Flex,
  Heading,
  Section,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import { FileUserIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import HeroIllustration from "@/app/_components/HeroIllustration";

function HeroSection() {
  return (
    <Box
      px="4"
      className="bg-neutral-950 relative pt-28 md:pb-12"
    >
      <Section size="2" className="bg-neutral-950 space-y-8 z-10 ">
        {/* Hero Button */}
        <HeroButton />

        {/* Heading Section */}
        <Heading as="h1" size="9" style={{ letterSpacing: "1.3px" }}>
          I&apos;m Dinesh
        </Heading>
        <Text as="p" className="max-w-lg">
          I work with React Ecosystem and write to teach people how to rebuild
          and redefine fundamental concepts through mental models.
        </Text>

        {/* Buttons Section */}
        <Flex gap="4" className="inline-flex">
          <Button
            radius="full"
            size="3"
            color="gray"
            variant="surface"
            className="cursor-pointer"
          >
            Learn How
          </Button>
          <Button
            radius="full"
            size="3"
            color="gray"
            variant="outline"
            className="cursor-pointer"
          >
            More about me
          </Button>
        </Flex>

        {/* Separator */}
        {/*<Separator className="max-w-sm" size="4" />*/}

        {/* Social Links */}
        <Flex gap="4">
          <Link href="#" className="opacity-40 ">
            <Tooltip content="Github">
              <GithubIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
          <Link href="#" className="opacity-40 ">
            <Tooltip content="Linkedin">
              <LinkedinIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
          <Link href="#" className="opacity-40 ">
            <Tooltip content="Download resume">
              <FileUserIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
        </Flex>
      </Section>
      <HeroIllustration />
    </Box>
  );
}

export default HeroSection;
