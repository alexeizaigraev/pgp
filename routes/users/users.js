const users = require('express').Router()
const { 
  getAllUsers,
  getByEmail,
  getById,
  registerUser,
  updateUser,
  deleteUser,
} = require('../../queries/users/index')

users.get('/users', getAllUsers)
users.get('/getbyemail', getByEmail)
users.get('/getbyid', getById)
users.post('/register', registerUser)
users.put('/update/:id', updateUser)
users.delete('/delete/:id', deleteUser)


module.exports = users