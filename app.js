var express         = require("express"), 
    app             = express(),
    cookieParser    = require("cookie-parser"),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser");

var index           = require("./src/routes/index");

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

mongoose.Promise = require('bluebird');

app.use("", index);

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, process.env.IP, function(){
    console.log('server started');
});