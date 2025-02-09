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
    <Box mb="9" >
      <Heading  mb="3" as="h2" size="8">
        {whiteTitle}{" "}
        {accentTitle && (
          <span className="text-teal-600 underline">{accentTitle}</span>
        )}
      </Heading>
      <Text>{subTitle}</Text>
    </Box>
  );
}

export default SectionTitle;
