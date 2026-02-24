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
  title: "BlacpoolBrew: Your Wellness Drink",
  description: "Ready to boost immunity without any side effects? Get your free sample now.",
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
