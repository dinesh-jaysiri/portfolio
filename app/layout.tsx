import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Box, Container, Theme } from "@radix-ui/themes";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinesh Jayasiri | Portfolio",
  description: "Personal portfolio of Dinesh Jayasiri",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="teal">
          <Box className="bg-neutral-950">
            <Container className="overflow-x-hidden" size="4">
              {children}
              <Footer />
            </Container>
            
          </Box>
          <NavBar />
        </Theme>
      </body>
    </html>
  );
}
