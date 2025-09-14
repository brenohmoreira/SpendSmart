import Link from "next/link"

interface NavigationItemProps {
    expanded: boolean,
    label: string,
    selectedItem: boolean,
    redirect: string,
    customClasses?: string,
    icon?: React.ElementType
}

export default function NavigationItemComponent({ expanded, redirect, customClasses, selectedItem, label, icon: Icon }: NavigationItemProps) {
    return (
        <>
            <Link href={redirect} className={`
                ${selectedItem ? 'from-indigo-400 to-indigo-300 bg-gradient-to-b' : 'bg-[var(--componentsColor)]'}
                px-3 py-3
                transition-all duration-300
                cursor-pointer hover:brightness-95
                flex 
                ${customClasses}
                ${expanded ? 'items-center gap-2 w-[90%] rounded-r-full' : 'w-[100%] items-center justify-center'}
                `}
            >
                {Icon && <Icon
                    size={22} 
                    color={!selectedItem ? 'black' : 'white'} 
                    className={"relative right-0.9"} 
                />}
                {expanded && <span 
                    className={`text-[13px] ${
                    selectedItem 
                        ? ('text-[var(--selectedItemColor)]') 
                        : ('text-[var(--nonSelectedItemColor)]')
                    } 'hover:brightness-50' `}> 
                    { label } 
                </span>}
            </Link>
        </>
    )
}