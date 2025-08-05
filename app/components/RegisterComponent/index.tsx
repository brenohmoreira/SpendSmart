'use client'

import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-9/10 sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-layout p-8 border-gray-800">
      <h1 className="text-2xl text-gray-800"> Register </h1>
      <p className="text-sm text-gray-600"> Insira suas informações </p>

      <hr className="my-4 border border-gray-400"/>

      <form className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-shadow-gray-800"> Nome </label>
            <input placeholder="Digite seu e-mail" type="text" className="w-full focus:border-blue-700 transition-all text-sm p-3 outline-0 border rounded-sm border-gray-400"/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-shadow-gray-800"> E-mail </label>
            <input placeholder="Digite seu e-mail" type="email" className="w-full focus:border-blue-700 transition-all text-sm p-3 outline-0 border rounded-sm border-gray-400"/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-shadow-gray-800"> Senha </label>
            <div className="relative w-full">
              <input placeholder="Digite sua senha" type={showPassword ? "text" : "password"} className="w-full focus:border-blue-700 transition-all text-sm p-3 pr-10 outline-0 border rounded-sm border-gray-400"/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>          
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-shadow-gray-800"> Confirme sua Senha </label>
            <div className="relative w-full">
              <input placeholder="Digite sua senha" type={showConfirmPassword ? "text" : "password"} className="w-full focus:border-blue-700 transition-all text-sm p-3 pr-10 outline-0 border rounded-sm border-gray-400"/>
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>          
          </div>

          <button className="bg-primary cursor-pointer w-full text-white py-4">
            Cadastrar 
          </button>

          <Link href="/login" className="text-center text-sm">
            Já possui uma conta? <span className="text-primary"> Conecte-se! </span>
          </Link>
        </div>
      </form>
    </div>
  )
}