import React from "react";
import {  Text } from "@radix-ui/themes";

interface TooltipCardProps {
  icon: string;
  name: string;
  link: string;
  description: string;
}

const TooltipCard: React.FC<TooltipCardProps> = ({
  name,
  link,
  description,
}) => {
  return (
    <div className=" space-y-2">
      {/* Header with Icon + Link */}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-bold block"
      >
        {name}
      </a>

      {/* Description */}
      <Text size="2" className=" mt-2">
        {description}
      </Text>
    </div>
  );
};

export default TooltipCard;
