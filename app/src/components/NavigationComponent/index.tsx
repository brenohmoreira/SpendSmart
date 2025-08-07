import { AlignJustify, AlignLeft, Bolt, House, Moon } from "lucide-react";

export default function NavigationComponent() {
  return (
    <nav className="w-[15vw] h-full bg-white border-r-1 border-r-gray-200">
      <div className="w-full py-6">
        <div className="from-indigo-400 to-indigo-300 bg-gradient-to-b w-9/10 p-3 rounded-r-full flex row items-center gap-2">
          <House color="white"/>
          <span className="text-white text-sm"> Dashboard </span>
        </div>
      </div>
    </nav>
  )
}