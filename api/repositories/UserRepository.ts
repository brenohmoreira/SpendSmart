import { UserType } from "../types/UserType";
import { insertQuery, selectQuery } from "../database/Database";

export const UserRepository = {
  findByEmail: async (email: string): Promise<UserType[]> => {
    const query = `SELECT * FROM users WHERE email = :email` 
    
    try {
      const users: UserType[] = await selectQuery<UserType>(query, { email })
      return users 
    }
    catch (error) {
      throw error
    }
  },

  create: async (user: UserType): Promise<number> => {
    const query = `INSERT INTO users (name, email, password) VALUES (:name, :email, :password)`
    
    try {
      const userId: number = await insertQuery(query, user)
      return userId 
    } catch (error) {
      throw error
    }
  }
}