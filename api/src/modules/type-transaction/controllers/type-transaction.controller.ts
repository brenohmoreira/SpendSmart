import { Controller, Get, HttpCode } from "@nestjs/common";
import { TypeTransactionService } from "../services/type-transaction.service";

@Controller("/typesTransaction")
export class TypeTransactionController {
    constructor(private typeTransactionService: TypeTransactionService) {}
    
    @Get("/")
    @HttpCode(200) 
    async getAll() {
        return await this.typeTransactionService.getAll()
    }
}