//* Access parameters for a postgres DB named 'spaghetti'

const { Sequelize } = require('sequelize')
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'spaghetti',
  username: 'postgres',
  password: 'root',
  port: 5432
})
module.exports = db