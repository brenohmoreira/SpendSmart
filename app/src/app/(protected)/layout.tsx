'use client'

import HeaderComponent from "@/components/HeaderComponent";
import NavigationComponent from "@/components/NavigationComponent";
import { useState } from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <>
      <HeaderComponent toggleNav={() => setIsNavOpen((prev) => !prev)} />
      <div className="w-full h-[93vh] flex">
        <NavigationComponent isOpen={isNavOpen} />
        <div className="bg-layout overflow-y-auto h-full flex-1">
          {children}
        </div>
      </div>
    </>
  );
}
