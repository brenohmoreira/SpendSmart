import { Module } from "@nestjs/common"
import { DatabaseUtils } from "src/database/database.utils"
import { TransactionService } from "./services/transaction.service"
import { TransactionRepository } from "./repositories/transaction.repository"
import { TransactionController } from "./controllers/transaction.controller"

@Module({
    imports: [],
    controllers: [TransactionController],
    providers: [TransactionService, TransactionRepository, DatabaseUtils],
    exports: [TransactionService]
})

export class TransactionModule {}