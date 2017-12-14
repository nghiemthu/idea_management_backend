var express         = require("express"), 
    app             = express(),
    cookieParser    = require("cookie-parser"),
    bodyParser      = require("body-parser");

var index           = require("./src/routes/index");

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("", index);

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, process.env.IP, function(){
    console.log('server started');
});