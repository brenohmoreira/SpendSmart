interface NavigationItemProps {
    expanded: boolean,
    label: string,
    isGroup: boolean, 
    selectedItem: boolean,
    customClasses?: string,
    icon?: React.ElementType
}

export default function NavigationItemComponent({ expanded, customClasses, isGroup, selectedItem, label, icon: Icon }: NavigationItemProps) {
    return (
        <>
            <div className={`
                ${selectedItem && isGroup ? 'from-indigo-400 to-indigo-300 bg-gradient-to-b' : 'bg-[var(--componentsColor)]'}
                px-3 
                ${isGroup ? 'py-3' : 'pl-7 py-1'}
                rounded-r-full transition-all duration-300
                ${customClasses}
                ${expanded || isGroup ? 'flex items-center gap-2' : 'hidden'}
                ${expanded ? "w-[90%]" : "w-[90%] justify-center"}
                `}
            >
                {Icon && <Icon 
                    color={isGroup && !selectedItem ? 'black' : 'white'} 
                    className={!expanded ? "relative right-0.5" : ""} 
                />}
                {expanded && <span 
                    className={`${isGroup ? 'text-sm' : 'text-[13px]'} ${
                    selectedItem 
                        ? (isGroup ? 'text-[var(--selectedGroupColor)]' : 'text-[var(--selectedItemColor)]') 
                        : (isGroup ? 'text-[var(--nonSelectedGroupColor)]' : 'text-[var(--nonSelectedItemColor)]')
                    } ${!isGroup ? 'hover:brightness-50' : ''} `}> 
                    { isGroup ? label : `| ${label}` } 
                </span>}
            </div>
        </>
    )
}