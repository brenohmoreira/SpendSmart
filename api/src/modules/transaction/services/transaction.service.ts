import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "../repositories/transaction.repository";
import { ICreateTransaction, ITransaction } from "src/common/interfaces/transaction-interfaces";

@Injectable()
export class TransactionService {
    constructor(private transactionRepository: TransactionRepository) {}

    async getAll(idUser: number): Promise<ITransaction[]> {
        const transactions = await this.transactionRepository.getAll(idUser)
        return transactions
    }

    async getAllOfMonth(idUser: number): Promise<ITransaction[]> {
        const transactions = await this.transactionRepository.getAllOfMonth(idUser)
        return transactions 
    }

    async create(transaction: ICreateTransaction): Promise<{ message: string }> {
        await this.transactionRepository.create(transaction)
        return { message: "Transaction was created successfully" }
    }
}