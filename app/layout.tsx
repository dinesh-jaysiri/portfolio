import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Box, Container, Theme } from "@radix-ui/themes";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"], display:"swap"
});

export const metadata: Metadata = {
  title:
    "Dinesh Jayasiri | Full-Stack Engineer | Next.js & Blockchain Developer",
  description:
    "Portfolio of Dinesh Jayasiri, a Full-Stack Software Engineer specializing in Next.js, TypeScript, Prisma, and Blockchain Development.",
  openGraph: {
    title: "Dinesh Jayasiri | Full-Stack Engineer",
    description:
      "Portfolio of Dinesh Jayasiri, showcasing expertise in Next.js, TypeScript, and Blockchain Development.",
    url: "https://dineshjayasiri.vercel.app",
    siteName: "Dinesh Jayasiri Portfolio",
    images: [
      {
        url: "https://dineshjayasiri.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Dinesh Jayasiri Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Jayasiri | Full-Stack Engineer",
    description:
      "Specializing in Next.js, TypeScript, and Blockchain Development.",
    images: ["https://dineshjayasiri.vercel.app/og.png"],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dinesh Jayasiri",
              jobTitle: "Full-Stack Software Engineer",
              url: "https://dineshjayasiri.vercel.app",
              sameAs: [
                "https://github.com/dinesh-jaysiri",
                "https://linkedin.com/in/dinesh-jayasiri",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open to Work",
              },
            }),
          }}
        />
      </head>
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
