//引入模块
let CourseModel = require("../model/CourseModel");
let TopicModel = require("../model/TopicModel");
class IndexService {
  constructor() {}
  getData(callback) {
    let courseModel = new CourseModel();
    //获得数据
    courseModel.getAllCourse(function(courses) {
      //创建对象
      let topicModel = new TopicModel();
      topicModel.getAllTopic(function(result) {
        let ob = { courses: courses, topics: result };
        callback(ob);
      });
    });
  }
}

module.exports = IndexService;
