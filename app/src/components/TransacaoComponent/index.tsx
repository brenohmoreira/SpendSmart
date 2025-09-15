'use client'

import { ArrowDown, ArrowUp } from "lucide-react"
import { useState } from "react"
import IncAltTransacaoComponent from "./IncAltTransacaoComponent"

export default function TransacaoComponent() {
    const [open, setOpen] = useState<boolean>(false)

    const transacoes = [
        { tipo: "Crédito", nome: "PIX - Academia", valor: "R$ 1.200,00", data: "14/09/2025", time: "3 PM", direcao: "Entrada" },
        { tipo: "Débito", nome: "Shark - Whey Protein (2x)", valor: "R$ 300,00", data: "13/09/2025", time: "2 AM", direcao: "Saída" },
        { tipo: "Crédito", nome: "Shark - Creatina", valor: "R$ 450,00", data: "12/09/2025", time: "11 AM", direcao: "Entrada" },
    ]

    return (
        <div className="w-full min-h-[70vh] lg:h-full bg-white rounded-md shadow-[var(--shadow-container-base)]">
            <IncAltTransacaoComponent open={open} onClose={() => setOpen(false)}/>

            <div className="w-full h-[8%]"> 
                <div className="w-full h-full flex items-center justify-between p-3">
                    <div className="flex flex-row items-center gap-2">
                        <div className="h-6 w-1 bg-indigo-500 rounded-full"></div>
                        <h3> Transações </h3>
                    </div>

                    <div className="flex items-center justify-center gap-[5px]">
                        <button className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:brightness-90 cursor-pointer transition-all">
                            Filtrar
                        </button>
                        <button onClick={() => setOpen(true)} className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:brightness-90 cursor-pointer transition-all">
                            Incluir
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-[92%] text-sm">
                <div className="w-full h-[95%]">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200">
                        <tr>
                            <td className="p-4 hidden md:table-cell">Tipo</td>
                            <td className="p-4 hidden sm:table-cell">Nome</td>
                            <td className="p-4">Valor</td>
                            <td className="p-4">Data</td>
                        </tr>
                        </thead>

                        <tbody>
                        {transacoes.map((transacao, index) => (
                            <tr key={index} className="border-b border-gray-200">
                            <td className="px-4 py-2 hidden md:table-cell">{transacao.tipo}</td>
                            <td className="px-4 py-2 hidden sm:table-cell">{transacao.nome}</td>
                            <td className="px-4 py-2">
                                <div className="w-full h-full flex items-center justify-start gap-2">
                                {transacao.direcao === "Entrada" ? (
                                    <ArrowUp className="w-4 h-4 text-lime-600" />
                                ) : (
                                    <ArrowDown className="w-4 h-4 text-red-500" />
                                )}
                                <span className={`px-2 py-0.5 rounded ${
                                    transacao.direcao === "Entrada" ? "bg-lime-200 text-lime-700" : "bg-red-200 text-red-500"
                                }`}>
                                    {transacao.valor}
                                </span>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex flex-col">
                                <span>{transacao.data}</span>
                                <span className="text-gray-500 text-xs">{transacao.time}</span>
                                </div>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full h-[5%]">
                    
                </div>
            </div>
        </div>
    )
}