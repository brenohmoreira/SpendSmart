import { AlignJustify, AlignLeft, Bolt, Moon } from "lucide-react";

export default function HeaderComponent() {
  return (
    <header className="w-full bg-white border-b-1 border-b-gray-200 flex row items-center">
      <div className="w-1/7 h-full p-6 border-r-1 border-r-gray-200 flex row justify-center items-center">
        <span className="text-primary"> SpendSmart </span>
      </div>
      <div className="w-6/7 h-full px-6 flex row justify-between">
        <div className="flex row gap-5"> 
          <AlignLeft className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all" color="#464D77"/>
          <input className="w-full border-1 border-gray-200 outline-0 rounded-full px-4 text-sm" type="text" placeholder="Pesquise aqui..."/>
        </div>
        
        <div className="flex row gap-3">
          <Moon className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
          <AlignJustify className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
          <Bolt className="w-9 h-9 p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition-all"/>
        </div>
      </div>
    </header>
  )
}