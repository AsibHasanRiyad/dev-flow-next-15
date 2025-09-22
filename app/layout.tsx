import type { Metadata } from "next";
// eslint-disable-next-line import/order
import localFont from "next/font/local";

import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { auth } from "@/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${josefin.variable} ${asimovian.variable} ${karla.variable}  antialiased`}
      lang="en"
    >
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
