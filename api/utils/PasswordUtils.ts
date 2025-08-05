import bcrypt from "bcryptjs"

export const PasswordUtils = {
  compare: (plain: string, hash: string) => bcrypt.compare(plain, hash),
  hash: (plain: string) => bcrypt.hash(plain, 10)
}
