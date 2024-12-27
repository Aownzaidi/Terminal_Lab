const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// CRUD operations
router.post('/', reviewController.addReview);
// ... other routes

module.exports = router; 