'use client'

import { useState, useEffect } from "react";
import { House } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
}

export default function NavigationComponent({ isOpen }: NavigationProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [expanded, setExpanded] = useState(isOpen);

  useEffect(() => {
    if (!isOpen) 
      setExpanded(isMouseOver)
    else 
      setExpanded(isOpen)
  }, [isMouseOver, isOpen])

  return (
    <nav
      className={`h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        expanded ? "w-[15vw]" : "w-[3vw]"
      }`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="w-full py-6">
        <div
          className={`from-indigo-400 to-indigo-300 bg-gradient-to-b p-3 rounded-r-full flex items-center gap-2 transition-all duration-300 ${
            expanded ? "w-[90%]" : "w-[90%] justify-center"
          }`}
        >
          <House color="white" className={!expanded ? "relative right-0.5" : ""} />
          {expanded && <span className="text-white text-sm">Dashboard</span>}
        </div>
      </div>
    </nav>
  );
}
