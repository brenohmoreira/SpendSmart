import { Request, Response } from "express"
import { AuthResult } from "../types/AuthType"
import { AuthService } from "../services/AuthService"

export const AuthController = {
  login: (req: Request, res: Response) => {
    const functionLabel: string = "AuthController.login"
    const auth: AuthResult = AuthService.auth(req.body?.email, req.body?.password)

    if (auth.success) {
      return res.status(200).json({
        success: true,
        message: auth.message,
        token: auth.token
      })
    }
    
    // Not authenticated 
    return res.status(401).json({
      success: false,
      message: auth.message,
      token: null
    })
  }
}