'use client'

import NavigationItemComponent from "../NavigationItemComponent";

import { useState, useEffect } from "react";
import { ArrowRightLeft, House } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isOpen: boolean;
}

export default function NavigationComponent({ isOpen }: NavigationProps) {
  const selectedPath = usePathname()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [expanded, setExpanded] = useState(isOpen)

  useEffect(() => {
    console.log(selectedPath)

    if (!isOpen) 
      setExpanded(isMouseOver)
    else 
      setExpanded(isOpen)
  }, [isMouseOver, isOpen])

  return (
    <nav
      className={`h-full bg-[var(--componentsColor)] border-r border-gray-200 transition-all duration-300 ease-in-out ${expanded ? "w-[15vw]" : "w-[4vw]"}`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="w-full py-6">
        <NavigationItemComponent selectedItem={selectedPath == "/"} redirect="/" label="Dashboard" icon={House} expanded={expanded}/>
        <NavigationItemComponent selectedItem={selectedPath.includes("/transacoes")} redirect="/transacoes" label="Transações" icon={ArrowRightLeft} expanded={expanded}/>
      </div>
    </nav>
  );
}

 