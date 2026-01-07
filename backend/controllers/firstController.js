import express from 'express'

const add_user = (req, res) => {
    let data = req.body;
    console.log(data);
    // res.status(200).json(data);
    res.status(200).json({message : "data added successfully"});
}

const get_user = (req, res) => {
    console.log("Hello this is from backend")
    res.send("This is from get user");
}

// const edit_data = (req, res) => {

// }

export {get_user, add_user};