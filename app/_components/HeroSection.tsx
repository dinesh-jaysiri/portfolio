import React from "react";
import HeroButton from "@/app/_components/HeroButton";
import {
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import { FileUserIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import GridSectionBg from "@/app/_components/GridSectionBg";
import HeroIllustration from "@/app/_components/HeroIllustration";

function HeroSection() {
  return (
    <GridSectionBg>
      <Box className=" relative mt-32 mb-12 space-y-8">
        {/* Hero Button */}
        <HeroButton />

        {/* Heading Section */}
        <Heading as="h1" size="9" style={{ letterSpacing: "1.3px" }}>
          I'm Dinesh
        </Heading>
        <Text as="p" className="max-w-lg">
          I work with React Ecosystem and write to teach people how to rebuild
          and redefine fundamental concepts through mental models.
        </Text>

        {/* Buttons Section */}
        <Flex gap="4" className="inline-flex">
          <Button size="3" color="gray" variant="surface" highContrast>
            Learn How
          </Button>
          <Button size="3" color="gray" variant="outline" highContrast>
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

        <HeroIllustration />
      </Box>
    </GridSectionBg>
  );
}

export default HeroSection;
