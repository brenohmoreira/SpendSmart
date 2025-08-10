'use client'

import { AlignJustify, AlignLeft, Bolt, LogOut, Moon, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  toggleNav: () => void
}

export default function HeaderComponent({ toggleNav }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <header className="w-full h-[7vh] bg-white border-b-1 border-b-gray-200 flex row items-center">
      <div className="w-3/20 h-full p-6 border-r-1 border-r-gray-200 flex row justify-center items-center">
        <span className="text-primary"> SpendSmart </span>
      </div>
      <div className="w-17/20 h-full px-6 flex row justify-between">
        <div className="flex row gap-5 items-center"> 
          <AlignLeft onClick={toggleNav} className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all" color="#464D77"/>
          <input className="w-full border-1 border-gray-200 outline-0 rounded-full px-4 py-2 text-sm" type="text" placeholder="Pesquise aqui..."/>
        </div>
        
        <div className="flex row items-center gap-3">
          <Moon className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
          <AlignJustify className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
          <Bolt onClick={() => setOpenMenu((prev) => !prev)} className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
        </div>
      </div>

      <div className={`w-3/20 absolute top-[7vh] right-0 bg-white shadow transition-all duration-300 ease-in-out ${openMenu ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'}`}>
        <ul className="cursor-pointer">
          <li className="p-3 hover:bg-gray-50 transition-all ease-in-out duration-300 flex items-center gap-2"> 
            <User className="w-6 h-6"/>
            <span> Minha Conta </span> 
          </li>
          <li className="p-3 hover:bg-gray-50 transition-all ease-in-out duration-300 flex items-center gap-2"> 
            <LogOut className="w-6 h-6"/>
            <span> Sair </span> 
          </li>
        </ul>
      </div>

    </header>
  )
}