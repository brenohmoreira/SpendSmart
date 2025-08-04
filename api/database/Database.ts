import { Sequelize } from "sequelize-typescript"

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
    global.connection = connection;
  }).catch((error) => {
    console.log(error)
    throw error 
  })
}

export const executeSQL = async <T = any>(sql: string): Promise<T[]> => {
  try {
    const [result] = await global.connection.query(sql) as [T[], unknown];

    if (process.env.LOG === "S") 
      console.log(result)

    return result || []
  }
  catch (err) {
    console.error(err)
    throw err 
  }
}