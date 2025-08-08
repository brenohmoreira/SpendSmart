import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { AuthData, HttpType } from "../types/HttpType"
import { validateParams } from "../utils/ValidationUtils"
import cookie from "cookie"

export const AuthController = {
  login: async (req: Request, res: Response): Promise<Response> => {
    const functionLabel: string = "AuthController.login"
    const { email, password, rememberMe } = req.body

    if (!validateParams({ email, password }, res)) return res;

    try {
      const auth: HttpType<AuthData> = await AuthService.auth(email, password, rememberMe)

      console.log(`> ${functionLabel} - ${auth.code}: ${auth.message}`)

      if (auth.data?.token) { 
        res.setHeader('Set-Cookie', cookie.serialize('token', auth.data.token, {
          httpOnly: true, // A cookie só pode ser acessado pelo servidor
          secure: process.env.STAGE === "production", // Define como true se estiver em produção (prod só https)
          sameSite: 'strict', // A cookie só será enviada em requisições do mesmo site
          maxAge: 60 * 60 * 24, // 1 dia
          path: '/', // A cookie estará disponível em todo o site
        }))
      }
      
      return res.status(auth.code).json({
        success: auth.success,
        message: auth.message,
        data: auth.data ?? null
      })
    } catch (err: unknown) {
      console.error(`> ${functionLabel} - Erro inesperado`, err)

      return res.status(500).json({
        success: false,
        message: "Erro interno no servidor",
        data: null
      })
    }
  },

  register: async (req: Request, res: Response): Promise<Response> => {
    const functionLabel: string = "AuthController.register"
    const { name, email, password } = req.body

    if (!validateParams({ name, email, password }, res)) return res

    try {
      const auth: HttpType = await AuthService.register(name, email, password)

      console.log(`> ${functionLabel} - ${auth.code}: ${auth.message}`)

      return res.status(auth.code).json({
        success: auth.success,
        message: auth.message,
        data: null
      })
    } catch (err: unknown) {
      console.error(`> ${functionLabel} - Erro inesperado`, err)

      return res.status(500).json({
        success: false,
        message: "Erro interno no servidor",
        data: null
      })
    }
  }
}
