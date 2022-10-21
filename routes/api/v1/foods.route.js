const express = require('express');
const foodController = require('../../../controller/foods.controller');
const { verifyAdmin } = require('../../../middleware/verifyAdmin');
const { verifyToken } = require('../../../middleware/verifyToken');
const router = express.Router()

router.post('/', verifyToken, verifyAdmin, foodController.postAFood)

router.get('/', foodController.getAllFoods)

router.delete('/:id', verifyToken, verifyAdmin, foodController.deleteFoods)

router.get('/byname', foodController.getFoodsByName)


module.exports = router;

