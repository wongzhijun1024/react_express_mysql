let CommentService = require("../services/CommentService");
module.exports.comment = function(req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  let courseId = req.query.courseId;
  //把解析出来的数据交给业务逻辑层
  let commentService = new CommentService();
  commentService.getCommentsWithCourse(courseId, function(ob) {
    res.json(ob);
  });
  //把业务逻辑层返回的数据发回给客户端
};
