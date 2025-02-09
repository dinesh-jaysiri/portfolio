import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";
import NavBar from "./_components/NavBar";

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
          <NavBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
