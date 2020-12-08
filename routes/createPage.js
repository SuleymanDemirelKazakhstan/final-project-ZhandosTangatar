const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {type: String, required: true},
    description : {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required:true}
});

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });

const Book = mongoose.model("Book", booksSchema);

router.get('/createPage', function(req, res){
    res.render("createPage");
});


router.post('/createPage', function(req, res){
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.price);
    console.log(req.body.category);
    console.log(req.body.image);
    let book = new Book({
        title: req.body.title,
        description : req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image
    });

    book.save(function(err){
        if(err) return console.log(err);
        console.log("Object is saved", book);
    });

    res.render("main", { layout: false });
});

module.exports = router;