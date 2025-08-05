import { Sequelize } from "sequelize-typescript"

declare global {
  namespace NodeJS {
    interface Global {
      connection: Sequelize,
      jwtSecret: string,
    }
  }

  var connection: Sequelize
  var jwtSecret: string
}

export {}