import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeScript } from "@thirdbracket/bracketui";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blacpool Brew: A Natural Aromatic Blend of Ancient Herbs & Spices",
  description: "Fragrant, warming and pungent. Specially crafted to nourish your body and instantly delight your senses. Get your free sample now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth `}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
