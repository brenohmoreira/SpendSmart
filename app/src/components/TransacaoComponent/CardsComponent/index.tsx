import { Coins, ScrollText, ShoppingCart, TrendingDown, TrendingUp, Wallet } from "lucide-react"
import CardComponent from "@/components/CardComponent"

const cardData = [
  {
    title: "Despesas Totais",
    value: "R$ 28.346,00",
    variation: "+12.0%",
    variationColor: "bg-lime-200 text-lime-700",
    icon: ShoppingCart,
    iconBg: "bg-amber-200",
    iconColor: "bg-amber-400",
    trendIcon: TrendingUp,
    trendColor: "text-lime-500"
  },
  {
    title: "Compras Totais",
    value: "R$ 3.456,00",
    variation: "+3.4%",
    variationColor: "bg-red-200 text-red-500",
    icon: ScrollText,
    iconBg: "bg-blue-200",
    iconColor: "bg-blue-400",
    trendIcon: TrendingDown,
    trendColor: "text-red-500"
  },
  {
    title: "Recebimentos Totais",
    value: "R$ 28.346,00",
    variation: "+14.2%",
    variationColor: "bg-red-200 text-red-500",
    icon: Wallet,
    iconBg: "bg-green-200",
    iconColor: "bg-green-400",
    trendIcon: TrendingDown,
    trendColor: "text-red-500"
  },
  {
    title: "Dívidas Totais",
    value: "R$ 1.346,00",
    variation: "+4.6%",
    variationColor: "bg-lime-200 text-lime-700",
    icon: Coins,
    iconBg: "bg-red-200",
    iconColor: "bg-red-400",
    trendIcon: TrendingUp,
    trendColor: "text-lime-500"
  }
];

export default function CardsComponent() {
  return (
    <div className="w-full h-full flex flex-row flex-wrap lg:flex-nowrap lg:flex-col justify-between items-center gap-x-[1%] gap-y-4 lg:gap-y-[2%]">
      {cardData.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  )
}
