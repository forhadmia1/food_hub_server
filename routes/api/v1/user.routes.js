const express = require('express');
const userController = require('../../../controller/user.controller')

const router = express.Router()

router.put('/', userController.addUser)

router.delete('/', userController.deleteUser)

router.put('/create-admin', userController.makeAdmin)

router.get('/', userController.getUser)

router.get('/all', userController.getAllUser)

module.exports = router;