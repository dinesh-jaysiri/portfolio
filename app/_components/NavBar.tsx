"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdown when switching to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      className={`fixed w-full px-4 top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      {/* Large Screen Navbar */}
      <div className="hidden md:block">
        <Card className="mx-auto p-3 px-6 w-fit shadow-lg rounded-2xl">
          <Flex gap="6" align="center" justify="center">
            {/* Avatar & Name */}
            <Link
              href="/"
              className="hover:text-teal-600 transition-colors duration-200 cursor-pointer"
            >
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="/avatar_image.png"
                  radius="full"
                  fallback="DJ"
                  referrerPolicy="no-referrer"
                />
                <Text className="text-nowrap" as="div" size="2" weight="bold">
                  Dinesh Jayasiri
                </Text>
              </Flex>
            </Link>

            {/* Navigation Links */}
            <Flex gap="6" align="center">
              {["projects", "about", "blog", "products"].map((item) => (
                <Link key={item} href={`#${item}`}>
                  <Text
                    size="2"
                    weight="bold"
                    className="hover:text-teal-600 transition-colors duration-200"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Card>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden ">
        <Flex justify="end" className="w-full">
          <DropdownMenu.Root
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <DropdownMenu.Trigger>
              <Button size="3" color="gray" variant="soft">
                Menu
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="right-4"
            >
              {["projects", "about", "blog", "products"].map((item) => (
                <DropdownMenu.Item key={item}>
                  <Link href={`#${item}`}>
                    <Text>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                  </Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </div>
    </Box>
  );
}

export default NavBar;
