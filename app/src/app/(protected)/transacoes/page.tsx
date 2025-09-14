import TransacaoComponent from "@/components/TransacaoComponent";
import CardsComponent from "@/components/TransacaoComponent/CardsComponent";

export default function Transacoes() {
    return (
        <>
            <div className="w-full h-full p-3"> 
                <div className="w-full h-[100%] flex row gap-[1%]">
                    <div className="w-[74.5%] h-full">
                        <TransacaoComponent/>
                    </div>
                    <div className="w-[24.5%] h-full">
                        <CardsComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}