//* Model for 'Users' table in 'spaghetti' DB

const { DataTypes } = require('sequelize');
const db = require('../utils/database');
/* {
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
}  */
const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,        //* Managed by the DBMS itself
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY   //* The only optional field
  }
}, {
  timestamps: false         //* Avoid timestamp fields on every record of the table
})
module.exports = Users


