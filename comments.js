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

// Path: comments.html
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script>
      fetch('http://localhost:3000/comments')
        .then(res => res.json())
        .then(comments => {
          const commentsList = document.getElementById('comments');
          comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerText = `${comment.name}: ${comment.comment}`;
            commentsList.appendChild(li);
          });
        });
    </script>
  </body>
</html>