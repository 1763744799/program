//1,引入express
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 24*60*60*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
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

var loginController=require('./Controllers/LoginController');

 app.get('/login',loginController.login);
app.post('/login',urlencodedParser,loginController.loginCheck);



var signupController = require('./Controllers/SignupController1');
app.post('/signup',urlencodedParser,signupController.signup);



app.get('/index',function (req,res) {
    res.render("index");
})
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

app.get('/single',function (req,res) {
    res.render("single");
});
app.get('/terms',function (req,res) {
    res.render("terms");
});
app.get('/signup',function (req,res) {
    res.render("signup");
});

app.listen(9999,function () {
    console.log("启动")
});