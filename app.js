// Import dependencies
const express = require('express');
const data = require('./data.json');

// Port
const port = 3000;

// Create Express app
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');

// Serve static files
app.use('/static', express.static('public'));

// Handle index route
app.get('/', (req, res) => {
    res.locals.data = data.projects;
    res.render('index');
});

// Handle about route
app.get('/about', (req, res) => {
    res.render('about');
});

// Handle project route
app.get('/project', (req, res) => {
    res.render('project');
});

// 404 Error
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// Handle errors
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render('error', {
            message: err.message
        });
    } else {
        console.error(`There was an error: ${err.message}`);
        res.status(500).send('Something went wrong');
    }
});

// Create server
app.listen(port, () => console.log(`App is listening to port ${port}`));