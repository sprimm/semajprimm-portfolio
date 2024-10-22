const express = require('express')
const userController = require('../controllers/User.js')
const router = express.Router()

// add a new user
router.post('/api/users', userController.create)

// get all users
router.get('/api/users', userController.list)

// get users by id
router.get('/api/users/:userId', userController.userByID)

// update user by id
router.put('/api/users/:userId', userController.update)

// remove user by id
router.delete('/api/users/:userId', userController.removeById)

// remove all users
router.delete('/api/users', userController.remove)

module.exports = router;