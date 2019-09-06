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
//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://192.168.3.122:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//设置固定值
let ip = "http://192.168.3.122:";
let port = 8888;

app.get("/course", function(req, res) {
  let topics = [
    {
      id: 0,
      title: "精品推荐"
    },
    {
      id: 1,
      title: "新手必看"
    },
    {
      id: 2,
      title: "C++课程"
    },
    {
      id: 3,
      title: "算法课程"
    },
    {
      id: 4,
      title: "数学课程"
    },
    {
      id: 5,
      title: "python"
    }
  ];
  let courses = [
    {
      id: 0,
      url: ip + port + "/imgs/examinationIcon.jpg",
      title: "真题课程包1",
      content: "提分神器，上岸必刷",
      price: "798",
      number: "2.3"
    },
    {
      id: 1,
      url: ip + port + "/imgs/examinationIcon.jpg",
      title: "真题课程包2",
      content: "提分神器，上岸必刷",
      price: "798",
      number: "2.3"
    },
    {
      id: 2,
      url: ip + port + "/imgs/examinationIcon.jpg",
      title: "真题课程包3",
      content: "提分神器，上岸必刷",
      price: "798",
      number: "2.3"
    },
    {
      id: 3,
      url: ip + port + "/imgs/examinationIcon.jpg",
      title: "真题课程包4",
      content: "提分神器，上岸必刷",
      price: "798",
      number: "2.3"
    }
  ];

  res.json({ courses: courses, topics: topics });
});
//4,进行监听
app.listen(port, function() {
  console.log("启动");
});
