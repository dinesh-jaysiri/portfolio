import React from "react";
import { Card, Box, Flex, Text, Avatar, IconButton } from "@radix-ui/themes";
import { MoreVertical } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card
      variant="surface"
      className="w-[300px] p-6 rounded-xl shadow-lg relative bg-opacity-80"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Reduced opacity
    >
      <Flex direction="column" align="center" gap="4">
        {/* Three-dot menu (illustrative) */}
        <Box className="absolute top-4 right-4">
          <IconButton size="2" variant="ghost">
            <MoreVertical />
          </IconButton>
        </Box>

        {/* Avatar */}
        <Avatar size="6" fallback="D" radius="full" src="/profile.jpg" />

        {/* Name & Title */}
        <Text size="4" weight="bold" className="text-white">
          Dinesh Jayasiri
        </Text>
        <Text size="2" className="text-gray-400">
          Software Engineer | Sri Lanka
        </Text>
      </Flex>
    </Card>
  );
};

export default ProfileCard;
