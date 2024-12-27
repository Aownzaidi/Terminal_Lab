const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionController');

// CRUD operations
router.post('/', attractionController.addAttraction);
router.get('/', attractionController.getAttractions);
router.get('/top-rated', attractionController.getTopRatedAttractions);

module.exports = router; 