const express = require('express');
const orderController = require('../../../controller/order.controller');
const router = express.Router()

router.post('/', orderController.postAOrder)

router.get('/', orderController.getAllOrder)

router.delete('/:id', orderController.deleteOrderById)

router.put('/:id', orderController.updateOrderById)

router.post("/create-payment-intent", orderController.payment)

module.exports = router;