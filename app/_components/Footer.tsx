import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Github, Linkedin, Twitter } from "lucide-react";

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

        {/* Social Icons */}
        <Flex gap="4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} className="hover:text-white transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} className="hover:text-white transition" />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
