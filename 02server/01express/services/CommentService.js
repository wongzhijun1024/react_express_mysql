//引入模块
let CommentModel = require("../model/CommentModel");
class CommentService {
  constructor() {}
  getCommentsWithCourse(courseId, callback) {
    //创建对象
    let commentModel = new CommentModel();
    commentModel.getConmentsByCourseId(courseId, function(data) {
      callback(data);
    });
  }
}

module.exports = CommentService;
