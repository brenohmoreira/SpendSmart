import TransacaoComponent from "@/components/TransacaoComponent";
import CardsComponent from "@/components/TransacaoComponent/CardsComponent";

export default function Transacoes() {
    return (
        <div className="w-full h-auto lg:h-full p-3"> 
            <div className="w-full h-auto lg:h-[100%] flex flex-col lg:flex-row gap-[1%]">
                <div className="w-full lg:w-[59%] 2xl:w-[69.5%] h-full">
                    <TransacaoComponent/>
                </div>
                <div className="w-full mt-3 lg:mt-0 lg:w-[40%] 2xl:w-[29.5%] h-full">
                    <CardsComponent/>
                </div>
            </div>
        </div>
    )
}