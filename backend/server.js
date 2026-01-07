import express from 'express'
// import router from "./routers/firstRoute.js"
import cors from 'cors';
const app = express();
app.use(express.json())
app.use(cors())
const PORT = 3003

// app.get('\get-user', (req, res) => {
//     console.log("Hello this is from backend")
//     res.send("This is from get user");
// })

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
