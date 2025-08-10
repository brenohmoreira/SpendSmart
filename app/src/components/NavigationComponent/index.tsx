'use client'

import { useState, useEffect } from "react";
import { ClipboardList, House, Landmark } from "lucide-react";
import NavigationItemComponent from "../NavigationItemComponent";
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
        <NavigationItemComponent isGroup={true} selectedItem={selectedPath == "/"} label="Dashboard" customClasses="cursor-pointer" icon={House} expanded={expanded}/>
        
        {/* BANK GROUP */}
        <NavigationItemComponent isGroup={true} selectedItem={selectedPath.includes("/bank")} label="Banco" icon={Landmark} expanded={expanded}/>
        <NavigationItemComponent isGroup={false} selectedItem={selectedPath == "/bank/list"} customClasses="cursor-pointer" label="Bancos" expanded={expanded}/>
        <NavigationItemComponent isGroup={false} selectedItem={selectedPath == "/bank/transaction"} customClasses="cursor-pointer" label="Transações" expanded={expanded}/>
        <NavigationItemComponent isGroup={false} selectedItem={selectedPath == "/bank/config"} customClasses="cursor-pointer" label="Configurações" expanded={expanded}/>
        
        {/* REPORT GROUP */}
        <NavigationItemComponent isGroup={true} selectedItem={selectedPath.includes("/report")} customClasses="cursor-pointer" label="Relatórios" icon={ClipboardList} expanded={expanded}/>
      </div>
    </nav>
  );
}

 