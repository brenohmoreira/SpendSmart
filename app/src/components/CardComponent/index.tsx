import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  variation: string;
  variationColor: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trendIcon: LucideIcon;
  trendColor: string;
}

export default function CardComponent ({ title, value, variation, variationColor, icon: Icon, iconBg, iconColor, trendIcon: TrendIcon, trendColor }: CardProps) {
  return (
    <div className="w-full md:w-[49%] lg:w-full bg-white rounded-md shadow-[var(--shadow-container-base)] p-2 flex items-center flex-row relative min-h-[200px] lg:min-h-0 h-[24%]">
      
      <div className="w-[30%] h-full flex items-center justify-center">
        <div className={`${iconBg} p-6 rounded-md`}>
          <Icon size={32} color="white" className={`${iconColor} p-1 rounded-md`} />
        </div>
      </div>

      <div className="w-[70%] h-full flex flex-col items-start justify-center">
        <h4 className="text-xl">{title}</h4>
        <h3 className="text-2xl font-bold">{value}</h3>
        <span className="text-sm">
          {variation.includes("-") ? "Diminuição" : "Aumento"} de{" "} <span className={`pl-1 mr-1 ${variationColor}`}>{variation}</span> este mês
        </span>
      </div>

      <TrendIcon className={`absolute top-[20px] right-[20px] ${trendColor}`} />
    </div>
  );
}
