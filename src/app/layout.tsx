import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florin Sabin Sarca — Full Stack Developer",
  description:
    "Full Stack Developer building and extending modern web applications across frontend and backend.",
  openGraph: {
    title: "Florin Sabin Sarca — Full Stack Developer",
    description:
      "Full Stack Developer building and extending modern web applications across frontend and backend.",
    type: "website",
    images: [
      {
        url: "../../public/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Florin Sabin Sarca — Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
