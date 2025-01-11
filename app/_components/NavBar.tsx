"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide on scroll down
        setIsVisible(false);
      } else {
        // Show on scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <Box className="fixed top-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 w-full md:w-auto px-4">
      {/* Large Screen Nav */}
      <div className="hidden md:block">
        {/* Ensures this only shows on medium and larger screens */}
        <Card className="inline-flex mx-auto p-3 w-full max-w-5xl">
          <Flex gap="7" align="center" justify="between" className="w-full">
            {/* Left Section: Avatar and Name */}
            <Flex
              className="hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              gap="3"
              align="center"
            >
              <Avatar
                size="3"
                src={"/avatar_image.png"}
                radius="full"
                fallback="DJ"
                referrerPolicy="no-referrer"
              />
              <Box>
                <Text className="text-nowrap" as="div" size="2" weight="bold">
                  Dinesh Jayasiri
                </Text>
              </Box>
            </Flex>

            {/* Right Section: Navigation Links */}
            <Flex gap="6" align="center">
              <Link href="#projects">
                <Text
                  size="2"
                  weight="bold"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  Projects
                </Text>
              </Link>
              <Link href="#about">
                <Text
                  size="2"
                  weight="bold"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  About
                </Text>
              </Link>
              <Link href="#blog">
                <Text
                  size="2"
                  weight="bold"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  Blog
                </Text>
              </Link>
              <Link href="#products">
                <Text
                  size="2"
                  weight="bold"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  Products
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Card>
      </div>

      {/* Small Screen Dropdown Menu */}
      <div className="block md:hidden">
        <Flex justify="end" className="w-full">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button size="3" color="gray" variant="soft" className="relative">
                Menu
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              style={{
                minWidth: "200px",
                position: "absolute",
                right: "0",
              }}
            >
              <DropdownMenu.Item>
                <Link href="#projects">Projects</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="#about">About</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="#blog">Blog</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="#products">Products</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </div>
    </Box>
  );
}

export default NavBar;
