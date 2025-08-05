import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { HttpType } from "../types/HttpType"
import { validateParams } from "../utils/ValidationUtils"

export const AuthController = {
  login: async (req: Request, res: Response): Promise<Response> => {
    const functionLabel: string = "AuthController.login"
    const { email, password, rememberMe } = req.body

    if (!validateParams({ email, password }, res)) return res;

    try {
      const auth: HttpType = await AuthService.auth(email, password, rememberMe)

      console.log(`> ${functionLabel} - ${auth.code}: ${auth.message}`)

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
