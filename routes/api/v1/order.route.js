const express = require('express');
const orderController = require('../../../controller/order.controller');
const { verifyAdmin } = require('../../../middleware/verifyAdmin');
const { verifyToken } = require('../../../middleware/verifyToken');
const router = express.Router()

router.post('/', verifyToken, orderController.postAOrder)

router.get('/', verifyToken, orderController.getOrder)

router.get('/all', verifyToken, verifyAdmin, orderController.getAllOrders)

router.delete('/:id', verifyToken, verifyAdmin, orderController.deleteOrderById)

router.put('/:id', verifyToken, orderController.updateOrderById)

router.put('/admin/:id', verifyToken, verifyAdmin, orderController.updateOrderByAdmin)

router.post("/create-payment-intent", verifyToken, orderController.payment)

module.exports = router;