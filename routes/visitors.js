const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// CRUD operations
router.post('/', visitorController.addVisitor);
router.get('/', visitorController.getVisitors);
router.get('/activity', visitorController.getVisitorActivity);
// ... other routes

module.exports = router; 