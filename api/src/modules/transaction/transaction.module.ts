import { Module } from "@nestjs/common"
import { DatabaseUtils } from "src/database/database.utils"
import { TransactionService } from "./services/transaction.service"
import { TransactionRepository } from "./repositories/transaction.repository"

@Module({
    imports: [DatabaseUtils],
    controllers: [TransactionModule],
    providers: [TransactionService, TransactionRepository],
    exports: [TransactionService]
})

export class TransactionModule {}