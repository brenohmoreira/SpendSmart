import { Body, Controller, HttpCode, Post } from "@nestjs/common"
import { UserService } from "../services/user.service"
import { CreateUserDTO } from "../dtos/create-user-dto"

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("create")
  @HttpCode(201)
  async createUser(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }
}