const express = require('express');
const app = express();

app.use(express.json());

let users = [];


app.post('/users', (req, res) => {
 const { id, name, age } = req.body;
 if (!id || !name || !age) {
    return res.status(400).send("Missing id, name, or age.");
}
  users.push({ id, name, age });
  res.status(201).send(`User added: ${name}`);
});


app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const originalLength = users.length;
  users = users.filter(user => user.id !== userId);

 if (users.length === originalLength) {
    return res.status(404).send(`User with ID ${userId} not found.`);
}

  res.send(`User with ID ${userId} deleted.`);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});