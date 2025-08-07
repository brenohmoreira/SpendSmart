import { Sequelize } from "sequelize-typescript"
import { QueryTypes } from "sequelize"

const connection: Sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export const connectDB = async () => {
  connection.authenticate().then(() => {
    console.log("Authentication with the database was successful")
    global.connection = connection
    global.jwtSecret = process.env.JWT_SECRET!
  }).catch((error) => {
    console.log(error)
    throw error 
  })
}

export const selectQuery = async <T = any>(sql: string, params: Record<string, any> = {}): Promise<T[]> => {
  try {
    const result = await global.connection.query(sql, {
      replacements: params,
      type: QueryTypes.SELECT
    })

    if (process.env.LOG === "S") console.log(result)

    return result as T[] 
  }
  catch (err) {
    console.error(err)
    throw err 
  }
}


export const insertQuery = async (sql: string, params: Record<string, any> = {}): Promise<number> => {
  try {
    const result = await global.connection.query(sql, { replacements: params, type: QueryTypes.INSERT })
    const affectedRows = Array.isArray(result) ? result[1] ?? 0 : 0

    if (process.env.LOG === "S") console.log({ affectedRows })

    return affectedRows
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const updateQuery = async (sql: string, params: Record<string, any> = {}): Promise<number> => {
  try {
    const result = await global.connection.query(sql, { replacements: params, type: QueryTypes.UPDATE })
    const affectedRows = Array.isArray(result) ? result[1] ?? 0 : 0

    if (process.env.LOG === "S") console.log({ affectedRows })

    return affectedRows
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const deleteQuery = async (sql: string, params: Record<string, any> = {}): Promise<number> => {
  try {
    const result = await global.connection.query(sql, { replacements: params, type: QueryTypes.DELETE })
    const affectedRows = Array.isArray(result) ? result[1] ?? 0 : 0
    
    if (process.env.LOG === "S") console.log({ affectedRows })

    return affectedRows
  } catch (err) {
    console.error(err)
    throw err
  }
}