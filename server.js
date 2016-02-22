//NPM's
var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('classroom_db', 'root', "");

var bcrypt = require('bcryptjs');

var mysql = require('mysql');

var PORT = process.env.NODE_ENV || 9001;

//adding/using body-parser to parse...the body...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//adding/using handlebars as view engine
var expressHandlebars = require('express-handlebars');
app.set("view engine", "handlebars");


//turn the server on
sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Online on port:" + PORT);
  });
});