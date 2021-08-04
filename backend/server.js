const express = require("express");
require("./conn");
const Model = require("./model");

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.get("/", (req,res) => res.send("HELLO WORLD"));

app.post("/model", async (req,res) => {
    try{
        const addingModelRecords = new Model(req.body)
        console.log(req.body);
        const insertModel = await addingModelRecords.save();
        res.status(201).send(insertModel);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/model", async (req,res) => {
    try{
        const getModel = await Model.find({});
        res.send(getModel);
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
})    
