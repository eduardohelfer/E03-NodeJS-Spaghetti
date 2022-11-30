const express = require('express')         //* A express library instance
const db = require('./utils/database')     //* Database access parameters
const usersRouter = require('./users/users.router')  //* Router object
const port = 9000                          //* Specified port number
const app = express()                      //* Express application

app.use(express.json())                    //* Enable usage of json format messages throughout the body

db.authenticate()
    .then(() => console.log('Dtabase Authenticated Ok'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Syncronized Ok'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {                //* To check app with a simple Get sent to /root
    res.status(200).json({ message: 'Ok!' })
})

app.use('/api/v1/users', usersRouter)       //* All routes served to access 'Users' table

app.listen(port, () => {                    //* Port listener
    console.log(`Server started at port ${port}`)
})
