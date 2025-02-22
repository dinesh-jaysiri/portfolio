import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import SocialLinks from "./SocialLinks";

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
        <Text size="2">
          © 2025 Dinesh Jayasiri.{" "}
          <Text size="2" className="hidden md:inline">
            All rights reserved.
          </Text>
        </Text>

        <SocialLinks />
      </Flex>
    </footer>
  );
};

export default Footer;
