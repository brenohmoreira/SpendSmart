import { Response, NextFunction } from "express"
import { AuthRequest } from "../types/HttpType"
import jwt from "jsonwebtoken"
import cookie from "cookie"


export const verificarToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies.token

  if (!token) return res.status(401).json({ erro: 'Token not found' })

  try {
    const payload = jwt.verify(token, global.jwtSecret)
    req.idUsuario = Number(payload) 
    next()
  } catch (e) {
    return res.status(401).json({ erro: 'Invalid Token' })
  }
}
