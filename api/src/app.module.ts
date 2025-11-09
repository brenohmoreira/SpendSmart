import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { TransactionModule } from './modules/transaction/transaction.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    AuthModule,
    TransactionModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
