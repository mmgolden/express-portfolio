// Require Express
const express = require('express');

// Create new router
const router = express.Router();

// Handle about route
router.get('/', (req, res) => {
    res.render('about');
});

// Export router
module.exports = router;