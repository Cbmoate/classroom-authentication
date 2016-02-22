//NPM's
var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('user_info_db', 'root', "");
var bcrypt = require('bcryptjs');
var mysql = require('mysql')
var PORT = process.env.NODE_ENV || 9001;
var app = express();