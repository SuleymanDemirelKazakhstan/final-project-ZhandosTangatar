const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Schema = mongoose.Schema;


mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });

const booksSchema = new Schema({
    title: {type: String, required: true},
    description : {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required:true}
});


const Book = mongoose.model("Book");


router.get('/elementPage', function(req, res){
    Book.find({}, function(err, docs){
        if(err) return console.log(err);
        console.log(docs);   
    })
    res.send("");
});




module.exports = router;