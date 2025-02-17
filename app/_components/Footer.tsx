import React from "react";
import { Box, Flex, Text, Tooltip } from "@radix-ui/themes";
import { FileUserIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* Gradient Separator */}
      <Box className="h-[1px] w-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 opacity-50 mb-6" />

      <Flex
        justify="between"
        align="center"
        className="text-gray-400 px-6 py-2"
      >
        {/* Copyright */}
        <Text size="2">© 2025 Dinesh Jayasiri. All rights reserved.</Text>

        <Flex gap="4">
          <Link href="#" className="opacity-60 ">
            <Tooltip content="Github">
              <GithubIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
          <Link href="#" className="opacity-60 ">
            <Tooltip content="Linkedin">
              <LinkedinIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
          <Link href="#" className="opacity-60 ">
            <Tooltip content="Download resume">
              <FileUserIcon strokeWidth={1} size={"20"} />
            </Tooltip>
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
