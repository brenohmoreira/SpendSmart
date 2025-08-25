import { Module } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { DatabaseUtils } from "./database.utils"

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: "mysql",
        host: config.get<string>("DB_HOST")!,
        port: +config.get<string>("DB_PORT")!,
        username: config.get<string>("DB_USER")!,
        password: config.get<string>("DB_PASSWORD")!,
        database: config.get<string>("DB_DATABASE")!,
        logging: false,
      }),
    }),
  ],
  providers: [DatabaseUtils],
  exports: [
    SequelizeModule,
    DatabaseUtils
  ],
})

export class DatabaseModule {}