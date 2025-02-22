import { Flex, Tooltip } from '@radix-ui/themes';
import { FileUserIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function SocialLinks() {
    return (
      <Flex gap="4">
        <Link href="https://github.com/dinesh-jaysiri" target="_blank" className="opacity-60 ">
          <Tooltip content="Github">
            <GithubIcon strokeWidth={1} size={"20"} />
          </Tooltip>
        </Link>
        <Link
          href="https://www.linkedin.com/in/dinesh-jayasiri/"
          className="opacity-60 "
          target="_blank"
        >
          <Tooltip content="Linkedin">
            <LinkedinIcon strokeWidth={1} size={"20"} />
          </Tooltip>
        </Link>
        <Link href="/DineshCV2025.pdf" target="_blank" download className="opacity-60 ">
          <Tooltip content="Download resume">
            <FileUserIcon strokeWidth={1} size={"20"} />
          </Tooltip>
        </Link>
      </Flex>
    );
}

export default SocialLinks;