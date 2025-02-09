import React, { PropsWithChildren } from "react";
import { Box, Container, Section } from "@radix-ui/themes";

function SectionBlock({ children }: PropsWithChildren) {
  return (
    <Box
      py="100px"
      px="4"
      className="bg-none relative z-0"
    >
      <Section size="2" className="bg-none space-y-8 ">
        {children}
      </Section>
    </Box>
  );
}

export default SectionBlock;
