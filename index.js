//1,引入express
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置ejs引擎
app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));

var indexController=require('./Controllers/IndexController');
app.get('/index',indexController.index);
app.post('/login',urlencodedParser,indexController.login);
var indexController = require('./Controllers/IndexController1');
app.post('/signup',urlencodedParser,indexController.signup);




app.get('/login',function (req,res) {
    res.render("login");
});
app.get('/checkout',function (req,res) {
    res.render("checkout");
});
app.get('/contact',function (req,res) {
    res.render("contact");
});

app.get('/pressroom',function (req,res) {
    res.render("pressroom");
});
app.get('/product',function (req,res) {
    res.render("product");
});
app.get('/product-k',function (req,res) {
    res.render("product-k");
});
app.get('/product-m',function (req,res) {
    res.render("product-m");
});
app.get('/shortcodes',function (req,res) {
    res.render("shortcodes");
});
app.get('/signup',function (req,res) {
    res.render("signup");
});
app.get('/single',function (req,res) {
    res.render("single");
});
app.get('/terms',function (req,res) {
    res.render("terms");
});

app.listen(9999);