import React from "react";
import { Card, Text, Box, Flex } from "@radix-ui/themes";

const OpenToWorkCard = () => {
  return (
    <Card size="3" className="w-full p-6 relative">
      {/* Responsive Layout */}
      <Flex
        direction={{ initial: "column", md: "row" }}
        align={{ initial: "start", md: "center" }}
        justify="between"
        gap="4"
      >
        {/* Left Side - Heading */}

        <Text size="4" weight="bold" className="text-white">
          What I&apos;m Open to Working On ?
        </Text>

        {/* Right Side - Bullet Points */}
        <Box className="w-full lg:w-1/2">
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>🚀 Building Scalable Full-Stack SaaS Platforms</li>
            <li>🔗 Exploring Blockchain & Web3 for Real-World Use</li>
            <li>🎯 Developing AI-Powered Solutions for Automation</li>
          </ul>
        </Box>
      </Flex>
      <div className="absolute -top-20 -left-12 w-32 h-32 rounded-full bg-green-400/10 blur-2xl" />
    </Card>
  );
};

export default OpenToWorkCard;
