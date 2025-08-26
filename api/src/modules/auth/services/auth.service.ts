import { Injectable, UnauthorizedException } from "@nestjs/common"
import { IUser } from "../../../common/interfaces/user-interfaces"
import { PasswordService } from "src/common/services/password.service"
import { UserService } from "src/modules/user/services/user.service"
import { IAuth } from "../interfaces/auth-interfaces"
import jwt from "jsonwebtoken"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private passwordService: PasswordService,
    private configService: ConfigService
  ) {}

  async auth (auth: IAuth): Promise<{ token: string }> {
    const users: IUser[] = await this.userService.findByEmail(auth.email)

    if (!users || users.length === 0) 
      throw new UnauthorizedException("Invalid credentials")

    const passwordMatch: boolean = await this.passwordService.compare(auth.password, users[0]?.password)

    if (!passwordMatch) 
      throw new UnauthorizedException("Invalid credentials")

    const token: string = jwt.sign({ id: users[0].id }, this.configService.get<string>("JWT_SECRET")!, { 
      expiresIn: auth.rememberMe ? "30d" : "8h" 
    })

    return { token }
  }
}