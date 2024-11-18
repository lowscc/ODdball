// Needed for Express
var express = require('express')
var app = express()

// Needed for public directory
app.use(express.static(__dirname));

// Needed for parsing form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Needed for path module
const path = require('path');

// Define the port
const port = process.env.PORT || 8080;

// Main landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`)
})