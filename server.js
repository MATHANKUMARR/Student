const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(__dirname + '/views'));

//Routes
app.use('/', require('./routes/registerRoute'));

app.listen(PORT,console.log("server running URL => http://localhost:" + PORT));
