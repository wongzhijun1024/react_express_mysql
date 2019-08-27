//1,引入express
var express = require("express");
//2，获得express对象
var app = express();
//3,引入body-parser模块
var bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//3,设置跨域访问
app.all("*", function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post("/checkUser", urlencodedParser, function(req, res) {
  var name = req.body.name;
  var passwd = req.body.passwd;

  let ob = {
    meg: "用户非法",
    code: -1
  };
  res.json(ob);
});

//4,进行监听
app.listen(8888, function() {
  console.log("启动");
});
