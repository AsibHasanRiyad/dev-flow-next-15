import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navigation/navbar";

import ThemeProvider from "../context/Theme";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  display: "swap",
  // weight: "100  800",
});
const josefin = localFont({
  src: "./fonts/josefinSans.ttf",
  variable: "--font-josefin",
  weight: "100  800",
  display: "swap",
});
const asimovian = localFont({
  src: "./fonts/Asimovian-Regular.ttf",
  variable: "--font-asimovian",
  weight: "100  800",
  display: "swap",
});
const karla = localFont({
  src: "./fonts/Karla.ttf",
  variable: "--font-karla",
  weight: "100  800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A cheaper version of Stack Overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.variable} ${josefin.variable} ${asimovian.variable} ${karla.variable}  antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
