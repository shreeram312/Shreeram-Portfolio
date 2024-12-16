import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreeram Mutukundu ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/126177107?v=4"
        />
      </head>
      <body className={inter.className}>
        {children}

        <Analytics />
        <div className="flex items-center justify-center h-[35rem] w-full"></div>
      </body>
    </html>
  );
}
