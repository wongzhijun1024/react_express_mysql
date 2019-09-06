//1,引入相关库
let express = require("express");
let mysql = require("mysql");
//2，获得express对象
let app = express();
//3,引入body-parser模块
let bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
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

  //1，创建一个connection
  let connection = mysql.createConnection({
    host: "cdb-a9y1iffo.cd.tencentcdb.com", //主机 ip
    user: "root", //MySQL认证用户名
    password: "cdhq1234", //MySQL认证用户密码
    port: "10055", //端口号
    database: "it" //数据库里面的数据
  });
  //2,连接
  connection.connect();

  //3,编写sql语句
  let sql = "select * from topics";
  //4,进行插入操作
  /**
   *query，mysql语句执行的方法
   * 1，userAddSql编写的sql语句
   * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
   */
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }

    res.json({ courses: courses, topics: result });
  });
  //5,连接结束
  connection.end();
});
//4,进行监听
app.listen(port, function() {
  console.log("启动");
});
