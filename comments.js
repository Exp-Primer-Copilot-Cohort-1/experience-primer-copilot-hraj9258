// Create web server with express
const express = require('express');
const app = express();

// Add CORS support
const cors = require('cors');
app.use(cors());

// Add body parser to parse JSON
app.use(express.json());

// Add a route to handle GET /comments
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, author: 'John Doe', body: 'Hello, World!' },
        { id: 2, author: 'Jane Doe', body: 'Hi there!' }
    ]);
});

// Add a route to handle POST /comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});

// Start listening on port 3000
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});