import { Module } from "@nestjs/common";
import { TypeTransactionRepository } from "./repositories/type-transaction.repository"
import { TypeTransactionService } from "./services/type-transaction.service"

@Module({
    imports: [],
    controllers: [], 
    providers: [
        TypeTransactionService,
        TypeTransactionRepository
    ],
    exports: [
        TypeTransactionService
    ]
})

export class TypeTransactionModule {}