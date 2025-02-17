import React from "react";
import { Box, Section } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

function SectionBlock({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Box  px="4" className={cn("bg-none relative z-0 py-[60px]", className)}>
      <Section size="2" className="bg-none space-y-8 ">
        {children}
      </Section>
    </Box>
  );
}

export default SectionBlock;
