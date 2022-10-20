const express = require('express');
const foodController = require('../../../controller/foods.controller');
const router = express.Router()

router.post('/', foodController.postAFood)

router.get('/', foodController.getAllFoods)

router.delete('/:id', foodController.deleteFoods)

router.get('/byname', foodController.getFoodsByName)


module.exports = router;

