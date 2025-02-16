import React from "react";
import { Card, Box, Flex, Text, Avatar, IconButton } from "@radix-ui/themes";
import { MoreVertical } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="hidden lg:block  pointer-events-none select-none mt-2">
      <Card
      size="3"
        variant="surface"
        className="w-[300px] h-[400px]  rounded-xl shadow-lg relative  border-white opacity-60 bg-neutral-950 -rotate-6"
      >
        <Flex direction="column" align="center" gap="4">
          {/* Three-dot menu (illustrative) */}
          <Box className="absolute top-4 right-4">
            <IconButton size="1" variant="ghost">
              <MoreVertical className="text-white" />
            </IconButton>
          </Box>

          {/* Avatar */}
          <Avatar
            className="border-white"
            crossOrigin="anonymous"
            size="6"
            fallback="D"
            radius="full"
            src="/avatar_image.png"
          />

          {/* Name & Title */}
          <Text size="4" weight="bold" className="text-white">
            Dinesh Jayasiri
          </Text>
          <Text size="2" className="text-gray-400">
            Software Engineer | Sri Lanka
          </Text>
        </Flex>
      </Card>
    </div>
  );
};

export default ProfileCard;
