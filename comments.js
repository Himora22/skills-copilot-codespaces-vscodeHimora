// Create web server
var express = require('express');
var app = express();

// Create a GET route that returns a list of comments
app.get('/comments', function(req, res) {
    res.json([
        // Add closing square bracket
        {
            id: 1,
            text: 'Comment 1'
        },
        {
            id: 2,
            text: 'Comment 2'
        }
    ]); // Add closing square bracket
});

