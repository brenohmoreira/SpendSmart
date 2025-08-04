import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-background p-4">
      <div className="flex w-full max-w-5xl bg-white rounded shadow-lg overflow-hidden">
        {/* Imagem: aparece apenas em telas md (768px) ou maiores */}
        <div className="hidden md:flex w-1/2 bg-primary items-center justify-center">
          <img className="w-2/3 max-w-xs" src="/assets/images/login_image.svg" alt="Login visual" />
        </div>

        {/* Formulário: ocupa toda a largura no mobile, metade em telas maiores */}
        <div className="w-full md:w-1/2 bg-layout p-8">
          <h1 className="text-2xl text-gray-800">Log in</h1>
          <p className="text-sm text-gray-600">Insira suas credenciais</p>

          <hr className="my-4 border border-gray-400" />

          <form className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-shadow-gray-800">E-mail</label>
                <input
                  placeholder="Digite seu e-mail"
                  type="email"
                  className="w-full focus:border-blue-700 transition-all text-sm p-3 outline-0 border rounded-sm border-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-shadow-gray-800">Senha</label>
                <div className="relative w-full">
                  <input
                    placeholder="Digite sua senha"
                    type={showPassword ? "text" : "password"}
                    className="w-full focus:border-blue-700 transition-all text-sm p-3 pr-10 outline-0 border rounded-sm border-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <a href="#" className="text-primary decoration-0">Esqueceu sua senha?</a>

              <button className="bg-primary cursor-pointer w-full text-white py-4">
                Entrar
              </button>

              <a href="/register" className="text-center text-sm">
                Não tem uma conta? <span className="text-primary">Registre-se!</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
