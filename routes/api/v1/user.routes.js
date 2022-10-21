const express = require('express');
const userController = require('../../../controller/user.controller');
const { verifyAdmin } = require('../../../middleware/verifyAdmin');
const { verifyToken } = require('../../../middleware/verifyToken');

const router = express.Router()

router.put('/', userController.addUser)

router.delete('/', verifyToken, verifyAdmin, userController.deleteUser)

router.put('/create-admin', verifyToken, verifyAdmin, userController.makeAdmin)

router.get('/', verifyToken, userController.getUser)

router.get('/all', verifyToken, verifyAdmin, userController.getAllUser)

module.exports = router;