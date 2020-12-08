const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router1 = require("./routes/createPage"); 
const router2 = require("./routes/elementPage");
const exphbs = require('express-handlebars');



const app = express();




// const hbs = exphbs.create();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router1);
app.use(router2);

app.listen(3000);