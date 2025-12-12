import express from 'express';
const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/get-user', (req, res) => {
    res.send("api success");
    // res.send('Hello, this is the get user endpoint!');
})

app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log(data);
    //logic to add data to database
    return res.status(200).json({message : "data added successfully"})
    res.send('data added successfully');
})

app.put('/edit-user', (req, res) => {
    let mydata = req.body;
    console.log(mydata);
    res.send('data edited successfully');
})

app.delete('/delete-user', (req, res) => {
    let mydata = req.body;
    console.log(mydata);
    res.send('data deleted successfully');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})