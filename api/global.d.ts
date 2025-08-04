import { Sequelize } from "sequelize-typescript"

declare global {
  namespace NodeJS {
    interface Global {
      connection: Sequelize
    }
  }

  var connection: Sequelize
}

export {}