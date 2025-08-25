import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { ICreateUser, IUser } from "src/common/interfaces/user-interfaces";
import { PasswordService } from "src/common/services/password.service";

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private passwordService: PasswordService
  ) {}

  async create (user: ICreateUser): Promise<{ success: boolean }> {
    const existingUsers: IUser[] = await this.userRepository.findByEmail(user.email)

    if (existingUsers && existingUsers.length > 0) 
      return { success: false }

    const hashedPassword: string = await this.passwordService.hash(user.password)

    await this.userRepository.create({ ...user, password: hashedPassword })
  
    return { success: true }
  }

  async findByEmail(email: string): Promise<IUser[]> {
    return this.userRepository.findByEmail(email)
  }
}