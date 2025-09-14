import { Body, Controller, Get, HttpCode, Param, Post, Query } from "@nestjs/common";
import { TransactionService } from "../services/transaction.service";
import { CreateTransactionDTO } from "src/modules/transaction/dtos/create-transaction-dto";
import { GetAllOfMonthDto } from "../dtos/get-all-month-dto";

@Controller("transaction")
export class TransactionController {
    constructor(private transactionService: TransactionService) {}

    @Get("/user/:idUser")
    @HttpCode(200)
    async getAll(@Param("idUser") idUser: number) {
        return await this.transactionService.getAll(idUser)
    }

    @Get("/getAllOfMonth/user/:idUser")
    @HttpCode(200)
    async getAllOfMonth(@Param("idUser") idUser: number, @Query() query: GetAllOfMonthDto) {
        return await this.transactionService.getAllOfMonth(idUser, query.month, query.year)
    } 

    @Post("/create")
    @HttpCode(201) 
    async create(@Body() transaction: CreateTransactionDTO) {
        return await this.transactionService.create(transaction)
    }
}