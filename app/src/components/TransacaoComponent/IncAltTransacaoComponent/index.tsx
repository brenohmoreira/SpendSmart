'use client'

import { SelectComponent } from "@/components/SelectComponent"
import { useGetTransactionTypes } from "@/hooks/useGetTransactionTypes"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

interface IncAltTransacaoProps {
  open: boolean,
  onClose: () => void 
}

export default function IncAltTransacaoComponent({ open, onClose }: IncAltTransacaoProps) {
    const { types, loading, error } = useGetTransactionTypes(open)
    const [ selectedType, setSelectedType ] = useState<string |  number>("")
    const [ selectedDirection, setSelectedDirection ] = useState<string |  number>("")

    const directions = [
        { label: 'Entrada', value: 'E' },
        { label: 'Saída', value: 'S' }
    ]

    /*
    useEffect(() => {
        if (!open) return;

        console.log(types)

        if (error) {
            toast.error("Erro ao carregar tipos de transação");
        } else if (!loading && types.length > 0) {
            toast.success("Tipos carregados!");
        }
    }, [open, error, loading, types]);
    */

    if (!open) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 bg-opacity-50">
            <div className="bg-white w-1/4 rounded-sm shadow-lg p-3 relative">
                <div className="flex flex-row items-start justify-between">
                    <div> 
                        <h2 className="font-semibold">Inserir Transação</h2>
                        <span className="text-xs text-gray-500"> Digite as informações da transação </span>
                    </div> 

                    <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-800"> ✕ </button>
                </div>

                <hr className="border-gray-300 my-4"/>

                <div className="flex flex-row gap-1"> 
                    <div className="flex flex-col gap-1 w-1/2"> 
                        <label className="text-sm"> Tipo </label>
                        <SelectComponent placeholder={"Selecione o tipo"} onChange={(opt) => setSelectedType(opt.value)} options={
                            types.map(t => ({
                                label: t.nameTransaction,
                                value: t.id
                            }))
                        }/>
                    </div>
                    <div className="flex flex-col gap-1 w-1/2"> 
                        <label className="text-sm"> Direção </label>
                        <SelectComponent placeholder={"Selecione a direção"} onChange={(opt) => setSelectedDirection(opt.value)} options={ 
                            directions 
                        }/>
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Fechar
                </button>
                </div>
            </div>
        </div>
    )
}