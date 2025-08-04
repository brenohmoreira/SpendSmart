import { UserRepository } from "../repositories/UserRepository"
import { AuthResult } from "../types/AuthType"
import { UserType } from "../types/UserType"

export const AuthService = {
  auth: (email: string, password: string): AuthResult => {
    const users: UserType[] | null = UserRepository.findByEmail(email)

    if (!users || users.length === 0) {
      return {
        success: false,
        message: "User not found",
        token: null
      }
    }

    // Create checking password method 

    return {  
      success: true,
      message: "Authentication successful",
      token: null 
    }
  }
}