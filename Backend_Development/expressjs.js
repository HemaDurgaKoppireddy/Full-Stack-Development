import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is the Express backend!');
})

app.get('/user', (req, res) => {
    res.send('Hello, this is the user endpoint!');
})

app.get('/user/profile', (req, res) => {
    res.send('Hello, this is the user profile endpoint!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})