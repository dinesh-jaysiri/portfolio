import React from "react";
import SectionBlock from "./SectionBlock";
import SectionTitle from "./SectionTitle";
import { Button, Flex } from "@radix-ui/themes";
import BlogPostCard from "./BlogPostCard";
import { ChevronRightIcon } from "lucide-react";
import { blogs } from "@/data";
import Link from "next/link";

function BlogSection() {
  return (
    <SectionBlock id="blog">
      <SectionTitle
        whiteTitle="Insights & Stories"
        accentTitle=""
        subTitle={
          "Insights, deep dives, and best practices in software engineering and blockchain."
        }
      />

      <Flex direction="column" gap="6">
        {blogs.map((blog) => (
          <BlogPostCard key={blog.title} {...blog} />
        ))}
      </Flex>

      <Flex justify={"center"} className=" mt-8">
        <Link href="https://medium.com/@ywdinesh" target="_blank">
          <Button
            className="pointer"
            radius="full"
            size="3"
            variant="ghost"
            color="teal"
          >
            Read More
            <ChevronRightIcon className=" h-5 w-5" />
          </Button>
        </Link>
      </Flex>
    </SectionBlock>
  );
}

export default BlogSection;
