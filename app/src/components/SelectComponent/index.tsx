'use client'

import { ChevronUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface SelectOption {
  label: string;
  value: number | string;
}

interface SelectProps {
  placeholder: string;
  options: SelectOption[];
  onChange?: (selected: SelectOption) => void;
}

export function SelectComponent({ onChange, placeholder, options }: SelectProps) {
    const [expanded, setExpanded] = useState(false)
    const [selected, setSelected] = useState<string>("")
    const containerRef = useRef<HTMLDivElement>(null)

    const handleSelect = (option: SelectOption) => {
        setSelected(option.label) 
        setExpanded(false)
        if (onChange) onChange(option)
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setExpanded(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (expanded && e.key === "Backspace") {
                setExpanded(false)
                setSelected("")
            }
        }

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [expanded]);

    return (
        <>
            <div ref={containerRef} className="relative w-full">
                <div
                onClick={() => setExpanded(prev => !prev)}
                className="p-2 w-full border-gray-300 border rounded-sm 
                bg-gray-50 text-sm flex justify-between items-center 
                cursor-pointer hover:brightness-95 transition-all"
                >
                <span className="text-gray-600 truncate block w-full">{selected || placeholder}</span>
                <ChevronUp
                    className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    color="gray"
                    size={16}
                />
                </div>

                {/* Dropdown */}
                <div
                className={`
                    absolute top-full left-0 w-full border border-gray-300 rounded-sm bg-white 
                    overflow-hidden transition-all duration-200
                    ${expanded ? "max-h-60 opacity-100 mt-1" : "max-h-0 opacity-0"}
                `}
                >
                {options.map((opt, i) => (
                    <div
                    key={i}
                    onClick={() => handleSelect(opt)}
                    className="px-2 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                    >
                    {opt.label} 
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}
