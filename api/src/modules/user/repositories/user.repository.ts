import { Injectable } from "@nestjs/common";
import { DatabaseUtils } from "src/database/database.utils";
import { ICreateUser, IUser } from "../../../common/interfaces/user-interfaces";

@Injectable()
export class UserRepository {
  constructor(private database: DatabaseUtils) {}

  async findByEmail(email: string): Promise<IUser[]> {
    const query = `SELECT * FROM users WHERE email = :email` 
    const users: IUser[] = await this.database.select<IUser>(query, { email })
    
    return users 
  } 

  async create(user: ICreateUser): Promise<void> {
    const query = `INSERT INTO users (name, email, password) VALUES (:name, :email, :password)`

    await this.database.execute(query, { 
      name: user.name, 
      email: user.email, 
      password: user.password 
    })
  }
}