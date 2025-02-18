import React from "react";
import { Box, Section } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

function SectionBlock({
  children,
  className,
  id
}: {
  className?: string;
  children?: React.ReactNode;
  id?:string
}) {
  return (
    <Box id={id}  px="4" className={cn("bg-none relative z-0 py-[60px]", className)}>
      <Section size="2" className="bg-none space-y-8 ">
        {children}
      </Section>
    </Box>
  );
}

export default SectionBlock;
