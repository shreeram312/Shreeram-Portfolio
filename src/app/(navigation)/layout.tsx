import { Contact } from "@/sections/contact";
import Header from "@/sections/header";
import React from "react";
import NextTopLoader from "nextjs-toploader";

interface DashboardProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardProps) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      
      <Header />

      <main className="flex-1 bg-primary overflow-y-auto overflow-x-hidden">
        <div className="min-h-full ">{children}</div>
      </main>

      {/* Footer if needed */}
      {/* <footer className="border-t border-gray-800 bg-primary/50">
      <Contact />
    </footer> */}
    </div>
  );
}
