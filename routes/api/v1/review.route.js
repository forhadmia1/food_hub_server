const express = require('express');
const reviewController = require('../../../controller/review.controller');
const router = express.Router()

router.post('/', reviewController.addReview)

router.put('/:id', reviewController.approvedReview)

router.get('/all', reviewController.getAllReview)

router.delete('/:id', reviewController.deleteReview)


module.exports = router;