import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shreeram-mutukundu-30094028a/",
    },
    {
      title: "Leetcode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/shreeram312",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://github.com/shreeram312/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://x.com/realshreeram312",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "mailto:shreerammutukundu.2003@gmail.com",
    },
  ];

  return (
    <div>
      <div>{children}</div>

      {/* Persistent FloatingDock */}

      <div className="flex  items-center justify-center w-full fixed bottom-8 lg:bottom-8 z-50 shadow-lg">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
