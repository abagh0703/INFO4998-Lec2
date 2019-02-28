const express = require('express');
const bodyParser = require('body-parser');
// VAR IS BAD

// Set up the express app
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


const db =  [
  {
    id: 1,
    title: "lunch",
    description: "Go for lunc by 2pm"
  }
];

// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

app.post('/api/v1/todos', (req, res) => {
  //modify something here
  console.log(req.body);
});

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`server running on port ${PORT}`)
});