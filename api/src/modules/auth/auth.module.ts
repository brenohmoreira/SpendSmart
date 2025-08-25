import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { AuthService } from "./services/auth.service";
import { PasswordService } from "src/common/services/password.service";
import { UserModule } from "../user/user.module";
import { AuthController } from "./controllers/auth.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ConfigModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    PasswordService
  ],
  exports: [
    AuthService
  ]
})

export class AuthModule {}