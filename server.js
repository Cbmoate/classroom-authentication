//NPM's
var express = require('express');
var app = express();

var session = require('express-session');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('user_info_db', 'root', "");

var bcrypt = require('bcryptjs');

var PORT = process.env.NODE_ENV || 9001;

//adding/using body-parser to parse...the body...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//adding/using handlebars as view engine
var expressHandlebars = require('express-handlebars');
app.set("view engine", "handlebars");



//teacher or TA model
var Teacher = sequelize.define("teacher", {
  first_name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$","i"] 
      }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$","i"] 
      }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password : {
    type: Sequelize.STRING,
    allowNull: false
  },
  section_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  is_ta: Sequelize.BOOLEAN
});

//Student model
var Student = sequelize.define("student", {
  first_name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$","i"] 
      }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$","i"] 
      }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password : {
    type: Sequelize.STRING,
    allowNull: false
  },
  section_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


//sessioning
app.use(session({
  secret: 'stash',
  cookie: {
    maxAge: 3600000
  },
  saveUninitialized: true,
  resave: false
}));

//routes

app.get('/', function(req, res){
  res.render('home'); 
});

app.get("/login", function(req, res){
  res.render('login');
});

app.get("/studentRegister", function(req, res){
  res.render('studentRegister');
});

app.get("/teacherRegister", function(req, res){
  res.render('teacherRegister');
});


//turn the server on
sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Online on port:" + PORT);
  });
});