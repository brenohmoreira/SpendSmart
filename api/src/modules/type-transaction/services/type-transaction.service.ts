import { Injectable } from "@nestjs/common";
import { TypeTransactionRepository } from "../repositories/type-transaction.repository";
import { ITypeTransaction } from "src/common/interfaces/transaction/type-transaction-interfaces";

@Injectable() 
export class TypeTransactionService {
    constructor(private typeTransactionRepository: TypeTransactionRepository) {}

    async getAll(): Promise<ITypeTransaction[]> {
        return await this.typeTransactionRepository.getAll() 
    }
}