// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ThemeScript } from "@thirdbracket/bracketui";
// import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Blacpool Brew: A Natural Aromatic Blend of Ancient Herbs & Spices",
//   description: "Fragrant, warming and pungent. Specially crafted to nourish your body and instantly delight your senses. Get your free sample now.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${inter.variable} antialiased scroll-smooth `}
//       suppressHydrationWarning
//     >
//       <head>
//         <ThemeScript />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Anton, Satisfy, Outfit } from "next/font/google";
import { ThemeScript } from "@thirdbracket/bracketui";
import "./globals.css";

// Bold condensed display — matches "BLACKPOOL BREW" in logo
const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
  weight: "400",
});

// Bold italic script — matches "Improve Your Lifestyle" arch tagline
const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satisfy",
  weight: "400",
});

// Clean modern sans — body text
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Blackpool Brew: A Natural Aromatic Blend of Ancient Herbs & Spices",
  description:
    "Fragrant, warming and pungent. Specially crafted to nourish your body and instantly delight your senses. Get your free sample now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${satisfy.variable} ${outfit.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
