import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

function SectionTitle({
  whiteTitle,
  accentTitle,
  subTitle,
}: {
  whiteTitle: string;
  accentTitle?: string;
  subTitle?: string;
}) {
  return (
    <Box mb="9" className=" relative">
      <Heading mb="3" as="h2" size="8">
        {whiteTitle}{" "}
        {accentTitle && (
          <span className="text-teal-600 underline">{accentTitle}</span>
        )}
      </Heading>
      <Text>{subTitle}</Text>
      {/* Floating tech icons */}
      <div className="absolute -top-20 -left-12 w-32 h-32 rounded-full bg-green-400/10 blur-2xl" />
    </Box>
  );
}

export default SectionTitle;
