import { Injectable } from "@nestjs/common"
import { ICreateTransaction, ITransaction } from "src/common/interfaces/transaction/transaction-interfaces"
import { DatabaseUtils } from "src/database/database.utils"

@Injectable()
export class TransactionRepository {
    constructor(private database: DatabaseUtils) {}

    async getAll(idUser: number): Promise<ITransaction[]> {
        const query = `
            SELECT * FROM 
            bankTransaction
            WHERE idUser = :idUser  
        ` 

        const transactions: ITransaction[] = await this.database.select(query, { idUser })

        return transactions 
    }

    async getAllOfMonth(idUser: number, month: number, year: number): Promise<ITransaction[]> {
        const query = `
            SELECT * FROM 
            bankTransaction bt
            WHERE MONTH(bt.dateTransaction) = :month 
            AND YEAR(bt.dateTransaction) = :year 
            AND idUser = :idUser 
        `

        const transactions: ITransaction[] = await this.database.select(query, { 
            idUser,
            month, 
            year 
        })

        return transactions
    } 

    async create(transaction: ICreateTransaction): Promise<void> {
        const query = `
            INSERT INTO bankTransaction (
                idUser,
                idTypeTransaction,
                dateTransaction,
                valueTransaction
            ) VALUE (
                :idUser,
                :idTypeTransaction,
                :dateTransaction,
                :valueTransaction  
            )
        `

        await this.database.execute(query, { 
            idUser: transaction.idUser,
            idTypeTransaction: transaction.idTypeTransaction,
            dateTransaction: transaction.dateTransaction,
            valueTransaction: transaction.valueTransaction
        })
    }
}