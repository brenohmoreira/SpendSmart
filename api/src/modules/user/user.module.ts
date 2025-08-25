import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { DatabaseModule } from "src/database/database.module";
import { PasswordService } from "src/common/services/password.service";
import { UserController } from "./controllers/user.controller";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    UserController
  ],
  providers: [
    PasswordService,
    UserRepository,
    UserService
  ],
  exports: [
    UserService
  ]
})

export class UserModule {}