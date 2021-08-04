const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.pe8qm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection successfully");
}).catch((e) => {
    console.log("No connection");
})