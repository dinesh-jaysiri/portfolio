import type React from "react";
import { Card, Flex, Text, Badge, Box, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Clock, Eye } from "lucide-react";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  read_time: string;
  views: string;
  link: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  read_time,
  views,
  link,
}) => {
  return (
    <Card variant="surface" size="2" className="w-full overflow-hidden">
      <Flex
        direction={{ initial: "column", sm: "row-reverse" }} // Image on top for mobile, right for larger screens
        gap="6"
      >
        {/* Image Section */}
        <Box
          width={{ initial: "100%", sm: "250px", md: "300px" }}
          height="180px"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10 rounded-lg overflow-hidden">
            <Link href={link} target="_blank">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover rounded-lg pointer"
                style={{ mixBlendMode: "luminosity" }}
              />
            </Link>
          </div>
        </Box>

        {/* Content Section */}
        <Flex direction="column" className="flex-1 space-y-4">
          <Link href={link} target="_blank">
            <Heading as="h3" size="5" weight="bold" className="text-white">
              {title}
            </Heading>
          </Link>

          <Text as="p" size="3" className="text-gray-400 max-w-xl">
            {description}
          </Text>

          {/* Tags */}
          <Flex gap="2" wrap="wrap">
            {tags.map((tag, index) => (
              <Badge key={index} variant="soft" color="teal" radius="large">
                {tag}
              </Badge>
            ))}
          </Flex>

          {/* Metadata (at bottom) */}
          <Flex
            gap="4"
            align="center"
            className="pt-4 border-t border-gray-800 mt-4"
          >
            <Flex align="center" gap="1">
              <Clock className="h-4 w-4 text-gray-500" />
              <Text size="2" className="text-gray-500">
                {read_time} min read
              </Text>
            </Flex>
            <Flex align="center" gap="1">
              <Eye className="h-4 w-4 text-gray-500" />
              <Text size="2" className="text-gray-500">
                {views} views
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default BlogPostCard;
