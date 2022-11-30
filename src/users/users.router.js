//* Set routes for each CRUD operation with a method and it`s service function

const router = require('express').Router()
const usersServices = require('./users.services')

router.get('/', usersServices.getAllUsers)  //* root "(" route methods go first
router.post('/', usersServices.postUser)
router.get('/:id', usersServices.getUserById)
router.patch('/:id', usersServices.patchUser)
router.delete('/:id', usersServices.removeUser)

module.exports = router

