//* Services to solve REQuests and bring RESponses to promises of 'Users' table DB controllers

usersControllers = require('./users.controllers')
/* {
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
} */
const getAllUsers = (req, res) => {
  usersControllers.findAllUsers()
    .then((data) => {
      res.status(200).json(data)        //* OK
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersControllers.findUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data)      //* OK
      } else {
        res.status(404).json({ message: 'Invalid ID' })  //* Not Found
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })  //* Bad Request
    })
}

const postUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  usersControllers.createUser({ first_name, last_name, email, password, birthday })
    .then((data) => {
      res.status(201).json(data)        //* Created
    })
    .catch((err) => {
      res.status(400).json({            //* Bad Request
        message: err.message,
        fields: {
          first_name: 'string',
          last_name: 'string',
          email: 'string',
          password: 'string',
          birthday: 'YYYY/MM/DD'
        }
      })
    })
}

const patchUser = (req, res) => {
  const id = req.params.id
  const { first_name, last_name, email, password, birthday } = req.body
  usersControllers.updateUser(id, { first_name, last_name, email, password, birthday })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: 'User Modified Successfully' })  //* OK
      } else {
        res.status(404).json({          //* Not Found
          message: 'Invalid ID',
          fields: {
            first_name: 'string',
            last_name: 'string',
            email: 'string',
            password: 'string',
            birthday: 'YYYY/MM/DD'
          }
        })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })    //* Bad Request
    })

}

const removeUser = (req, res) => {
  const id = req.params.id
  usersControllers.deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json({ message: 'User Removed from the DB' }) //* No Content
      } else {
        res.status(404).json({ message: 'Invalid ID' }) //* Not Found
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })    //* Bad Request
    })
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  removeUser
}
