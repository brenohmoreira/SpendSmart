import { Injectable } from "@nestjs/common"
import { InjectConnection } from "@nestjs/sequelize"
import { BindOrReplacements, Sequelize, Transaction } from "sequelize"

@Injectable()
export class DatabaseUtils {
  constructor(@InjectConnection() private sequelize: Sequelize) {}

  async select<T = any>(query: string, replacements?: BindOrReplacements, transaction?: Transaction): Promise<T[]> {
    const [results] = await this.sequelize.query(query, { replacements, transaction })
    return results as T[]
  }

  async execute(query: string, replacements?: BindOrReplacements, transaction?: Transaction): Promise<unknown> {
    const [_, metadata] = await this.sequelize.query(query, { replacements, transaction })
    return metadata
  }
}