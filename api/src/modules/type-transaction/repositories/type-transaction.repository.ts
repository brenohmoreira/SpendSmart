import { Injectable } from "@nestjs/common"
import { ITypeTransaction } from "src/common/interfaces/transaction/type-transaction-interfaces"
import { DatabaseUtils } from "src/database/database.utils"

@Injectable()
export class TypeTransactionRepository {
    constructor(private database: DatabaseUtils) {}

    async getAll(): Promise<ITypeTransaction[]> {
        const query = `
            SELECT * FROM typetransaction
        `

        const typesTransactions = await this.database.select(query)
    
        return typesTransactions 
    }
}