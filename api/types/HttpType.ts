import { Request } from "express"

export interface HttpType<T = any> {
  success: boolean;
  message: string;
  data: T | null;
  code: number;
}

export interface AuthRequest extends Request {
  idUsuario: number 
}

export interface AuthData {
  token: string;
}