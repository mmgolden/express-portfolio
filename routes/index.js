// Require Express
const express = require('express');

// Import data
const data = require('../data.json');

// Create new router
const router = express.Router();

// Handle index route
router.get('/', (req, res) => {
    res.locals.data = data.projects;
    res.render('index');
});

// Export router
module.exports = router;