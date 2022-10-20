const express = require('express');
const userController = require('../../../controller/user.controller')

const router = express.Router()

router.put('/', userController.addUser)

router.get('/', userController.getUser)

module.exports = router;