import chalk from 'chalk'
import postgres from 'postgres'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

import { env } from '@/env'

const connection = postgres(env.DB_URL, { max: 1 })
console.log(`connection: ${env.DB_URL}`)
const db = drizzle(connection)

await migrate(db, { migrationsFolder: 'drizzle' })

console.log(chalk.greenBright('Migrations applied successfully!'))

await connection.end()

process.exit()
