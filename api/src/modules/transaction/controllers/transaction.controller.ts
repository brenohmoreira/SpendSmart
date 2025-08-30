import { Controller, Get, HttpCode, Post } from "@nestjs/common";
import { TransactionService } from "../services/transaction.service";
import { CreateTransactionDTO } from "src/modules/transaction/dtos/create-transaction-dto";

@Controller("transaction")
export class TransactionController {
    constructor(private transactionService: TransactionService) {}

    @Get("/")
    @HttpCode(200)
    async getAll(idUser: number) {
        return await this.transactionService.getAll(idUser)
    }

    @Get("/getAllOfMonth")
    @HttpCode(200)
    async getAllOfMonth(idUser: number) {
        return await this.transactionService.getAllOfMonth(idUser)
    } 

    @Post("/create")
    @HttpCode(201) 
    async create(transaction: CreateTransactionDTO) {
        return await this.transactionService.create(transaction)
    }
}