import { UserType } from "../types/UserType";

export const UserRepository = {
  findByEmail: async (email: string): Promise<UserType[] | null> => {
    const query = `SELECT * FROM users WHERE email = ?` 
    
    return null 
  }
}