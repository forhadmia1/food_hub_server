const express = require('express');
const userController = require('../../../controller/user.controller')

const router = express.Router()

router.put('/', userController.addUser)

module.exports = router;