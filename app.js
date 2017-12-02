var express         = require("express"), 
    app             = express(),
    cookieParser    = require("cookie-parser"),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

mongoose.Promise = require('bluebird');

app.get('/', (req, res) => {
  res.send('index');
});

app.use(express.static('public'));

app.listen(8080 || process.env.PORT, process.env.IP, function(){
    console.log('server started');
})