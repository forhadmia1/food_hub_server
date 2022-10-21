const express = require('express');
const reviewController = require('../../../controller/review.controller');
const { verifyAdmin } = require('../../../middleware/verifyAdmin');
const { verifyToken } = require('../../../middleware/verifyToken');
const router = express.Router()

router.post('/', verifyToken, reviewController.addReview)

router.put('/:id', verifyToken, verifyAdmin, reviewController.approvedReview)

router.get('/all', verifyToken, verifyAdmin, reviewController.getAllReview)

router.get('/', reviewController.getReview)

router.delete('/:id', verifyToken, verifyAdmin, reviewController.deleteReview)

module.exports = router;