import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common"
import { AuthDTO } from "../dtos/auth-dto"
import { AuthService } from "../services/auth.service"

import type { Response } from "express"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async authenticate(@Body() authData: AuthDTO, @Res({ passthrough: true}) response: Response) {
    const { token } = await this.authService.auth(authData)

    response.cookie("jwtToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: authData.rememberMe ? 2592000000 : 2880000 
    })

    return { message: "Authenticated successfully" }
  }
}