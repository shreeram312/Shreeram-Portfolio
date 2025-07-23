import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Databuddy } from "@databuddy/sdk";
import GoogleAnalytics from "@/components/google-analytics";

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
      <Databuddy clientId="u0syca9wZFhc8JqnnlZVp" enableBatching={true} />
      <GoogleAnalytics />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
