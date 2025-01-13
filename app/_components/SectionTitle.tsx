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
    <div className="space-y-2 ">
      <p className="text-5xl font-semibold">
        {whiteTitle}{" "}
        {accentTitle && (
          <span className="text-teal-600 underline">{accentTitle}</span>
        )}
      </p>
      <p className=" max-w-5xl">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
