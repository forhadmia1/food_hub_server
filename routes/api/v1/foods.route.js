const express = require('express');
const foodController = require('../../../controller/foods.controller');
const router = express.Router()

router.post('/', foodController.postAFood)

router.get('/', foodController.getAllFoods)


module.exports = router;

