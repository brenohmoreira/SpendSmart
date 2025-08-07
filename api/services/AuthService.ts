import { UserRepository } from "../repositories/UserRepository"
import { HttpType } from "../types/HttpType"
import { UserType } from "../types/UserType"
import { PasswordUtils } from "../utils/PasswordUtils"
import jwt from "jsonwebtoken"

export const AuthService = {
  auth: async (email: string, password: string, rememberMe: boolean = false): Promise<HttpType> => {
    const users: UserType[] = await UserRepository.findByEmail(email)

    if (!users || users.length === 0) {
      return {
        success: false,
        message: "User not found",
        data: null,
        code: 401
      }
    }

    const passwordMatch: boolean = await PasswordUtils.compare(password, users[0].password)

    if (!passwordMatch) {
      return {
        success: false,
        message: "Invalid credentials",
        data: null,
        code: 401
      }
    }

    const token: string = jwt.sign({ id: users[0].id }, global.jwtSecret, { expiresIn: rememberMe ? "30d" : "8h" })

    return {
      success: true,
      message: "Authentication successful",
      data: { token },
      code: 200
    }
  },

  register: async (name: string, email: string, password: string): Promise<HttpType> => {
    const existingUsers: UserType[] = await UserRepository.findByEmail(email)

    if (existingUsers && existingUsers.length > 0) {
      return {
        success: false,
        message: "Email already registered",
        data: null,
        code: 409
      }
    }

    const hashedPassword: string = await PasswordUtils.hash(password)

    const newUser: UserType = {
      id: 0, // This will be set by the database
      name,
      email,
      password: hashedPassword
    }

    const userId: number = await UserRepository.create(newUser)

    return {
      success: true,
      message: "User registered successfully",
      data: { userId },
      code: 201
    }
  }
}