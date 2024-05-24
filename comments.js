// create web server
const express = require('express');
const app = express();
// create port
const port = 3000;
// create comments
const comments = [
  { name: 'John', comment: 'Hello World!' },
  { name: 'Jack', comment: 'Hello World!' },
  { name: 'Tom', comment: 'Hello World!' }
];
// create route
app.get('/comments', (req, res) => {
  res.json(comments);
});
// listen port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
