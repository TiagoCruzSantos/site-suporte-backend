require("dotenv").config()

module.exports = module.exports = {
  client: 'postgresql',
  connection: process.env.DB_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};