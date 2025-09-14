import { Plus, Search } from "lucide-react";

export default function TransacaoComponent() {
    return (
        <div className="w-full h-full bg-white rounded-md shadow-[var(--shadow-container-base)]">
            <div className="w-full h-[8%] border-b-gray-200 border-b-1"> 
                <div className="w-full h-full flex items-center justify-between p-3">
                    <h3> Transações </h3>

                    <div className="flex items-center justify-center gap-[5px]">
                        <button className="px-3 py-1 bg-indigo-500 text-white rounded-md">
                        Filtrar
                        </button>
                        <button className="px-3 py-1 bg-indigo-500 text-white rounded-md">
                        Incluir
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-[92%]">
                <div className="w-full h-[95%]">

                </div>
                <div className="w-full h-[5%]">
                    
                </div>
            </div>
        </div>
    )
}