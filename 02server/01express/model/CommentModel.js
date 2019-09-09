//引入模块
let SqlBase = require("./SqlBase");
class CommentModel extends SqlBase {
  constructor() {
    super();
  }
  getConmentsByCourseId(courses_id, callback) {
    //3,编写sql语句
    let sql = `select * from comments left join users on comments.user_id=users.id where comments.courses_id=${courses_id} `;
    //4,进行插入操作
    /**
     *query，mysql语句执行的方法
     * 1，userAddSql编写的sql语句
     * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
     */

    console.log(sql);
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = CommentModel;
