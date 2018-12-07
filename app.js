// Import dependencies and routes
const express = require('express');
const indexRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

// Port
const port = 3000;

// Create Express app
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');

// Serve static files
app.use('/static', express.static('public'));

// Routes
app.use(indexRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

// Handle errors
app.use((req, res, next) => {
    const err = new Error('Something went wrong');
    err.status = 500;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status).render('error');
});

// Create server
app.listen(port, () => console.log(`App is listening to port ${port}`));