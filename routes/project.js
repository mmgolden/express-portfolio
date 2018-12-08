// Require Express
const express = require('express');

// Import data
const data = require('../data.json');

// Create new router
const router = express.Router();

// Handle project route
router.get('/:id', (req, res) => {
    res.locals.data = data.projects;
    res.render('project', req.params);
});

// Export router
module.exports = router;