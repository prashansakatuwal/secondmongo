const mongoose = require("mongoose");

const modelSchema =  new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim:true
  },
  address: {
    type: String,
    required:true,
    trim:true
  },
  email: {
    type: String,
    required:true,
    trim:true
  },
  phone: {
    type: String,
    required:true,
    trim:true
  }
});

module.exports = mongoose.model("Model", modelSchema);