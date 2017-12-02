var express         = require("express"), 
    app             = express(),
    cookieParser    = require("cookie-parser"),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser");

import knex from "./utils/db";

app.use(bodyParser.urlencoded({extended: true}));

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

mongoose.Promise = require('bluebird');

app.get('/', (req, res) => {
  res.send('index');
});


app.get('/test', (req, res) => {
	knex('comment').where({ id: 2 }).then(data => res.send(data));
});


app.use(express.static('public'));

app.listen(8080 || process.env.PORT, process.env.IP, function(){
    console.log('server started');
});