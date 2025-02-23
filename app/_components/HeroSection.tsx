import React from "react";
import HeroButton from "@/app/_components/HeroButton";
import {
  Box,
  Button,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import {
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import HeroIllustration from "@/app/_components/HeroIllustration";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

function HeroSection() {
  return (
    <Box px="4" className="bg-neutral-950 relative pt-40 md:pb-20">
      <Section size="2" className="bg-neutral-950 space-y-8 z-10 ">
        {/* Hero Button */}
        <HeroButton />

        {/* Heading Section */}
        <Heading
          as="h1"
          size="9"
          style={{ letterSpacing: "1.3px" }}
          aria-label="I'm Dinesh | Full-Stack Software Engineer Specializing in Next.js and Blockchain Development"
        >
          I&apos;m Dinesh
        </Heading>
        <Text as="p" className="max-w-lg">
          I specialize in the JavaScript ecosystem, architecting scalable
          applications while exploring how AI, security, and modern web
          technologies reshape digital experiences.
        </Text>

        {/* Buttons Section */}
        <Flex gap="4" className="inline-flex">
          <Link className="cursor-pointer" href="#projects">
            <Button
              radius="full"
              size="4"
              color="gray"
              variant="surface"
              className={cn("pointer")}
            >
              Learn How
            </Button>
          </Link>

          <Link href={"#about"}>
            <Button
              radius="full"
              size="4"
              color="gray"
              variant="outline"
              className="pointer"
            >
              More about me
              <ChevronDown />
            </Button>
          </Link>
        </Flex>
        <SocialLinks />
      </Section>
      <div className="absolute top-8 right-8 w-40 h-56 rounded-full bg-emerald-400/10 blur-3xl " />
      <HeroIllustration />
    </Box>
  );
}

export default HeroSection;
