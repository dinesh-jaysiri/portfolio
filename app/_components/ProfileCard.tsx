import React from "react";
import { Card, Box, Flex, Text, Avatar, IconButton } from "@radix-ui/themes";
import { MoreVertical } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="hidden lg:block mt-2 group relative hover:z-50 transition-all duration-300 hover:scale-105">
      <Card
        size="3"
        variant="surface"
        className="w-[300px] h-[400px] rounded-xl shadow-2xl relative border border-white/20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black -rotate-3 hover:-rotate-1 transition-transform duration-500 overflow-hidden"
      >
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Animated connection dots */}
        <div className="absolute top-6 left-6 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Three-dot menu with hover effect */}
        <Box className="absolute top-4 right-4 transition-opacity opacity-70 group-hover:opacity-100">
          <IconButton size="1" variant="ghost" className="shadow-sm">
            <MoreVertical className="text-white/80 group-hover:text-white transition-colors" />
          </IconButton>
        </Box>

        <Flex
          direction="column"
          align="center"
          gap="4"
          className="relative z-10 h-full justify-center"
        >
          {/* Avatar with hover effect */}
          <div className="relative group/avatar">
            <Avatar
              className="border-2 border-white/30 group-hover/avatar:border-green-400 transition-all duration-300 w-20 h-20"
              size="8"
              fallback="D"
              radius="full"
              src="/avatar_image.png"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-slow [border-image:linear-gradient(to_bottom,transparent_25%,#22c55e_50%,transparent_75%)_1] opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-2">
            <Text
              size="5"
              weight="bold"
              className="block text-white bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 text-transparent"
            >
              Dinesh Jayasiri
            </Text>
            <Text size="2" className="text-gray-400 font-medium block">
              Software Engineer
            </Text>
            <Text
              align={"left"}
              size="1"
              className="text-emerald-400/80 font-mono mt-1 block"
            >
              {`// Building digital experiences`}
            </Text>
            <Text
              align={"left"}
              size="1"
              className="text-emerald-400/80 font-mono block"
            >
              {`// Clean code & performance`}
            </Text>
            <Text
              align={"left"}
              size="1"
              className="text-emerald-400/80 font-mono block"
            >
              {`// Ideas into scalable solutions`}
            </Text>
          </div>

          {/* Decorative status bar */}
          <div className="absolute bottom-6 w-full px-6">
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 animate-progress"
                style={{ animationPlayState: "paused" }}
              />
            </div>
            <Text size="1" className="text-center text-emerald-400/60 mt-2">
              Current Status: Coding...
            </Text>
          </div>
        </Flex>
      </Card>

      {/* Floating tech icons */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-xl animate-pulse" />
    </div>
  );
};

export default ProfileCard;
