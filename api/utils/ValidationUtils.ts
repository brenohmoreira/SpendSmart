import { Response } from "express"

export function validateParams(params: Record<string, any>, res: Response): boolean {
  for (const [key, value] of Object.entries(params)) {
    if (!value) {
      res.status(400).json({
        success: false,
        message: `Parâmetro obrigatório ausente: ${key} é necessário`,
        data: null,
      })
      return false
    }
  }
  return true
}
