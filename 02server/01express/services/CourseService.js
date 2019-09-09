//引入模块
let CourseModel = require("../model/CourseModel");
let ChaptersModel = require("../model/ChaptersModel");
class CourseService {
  constructor() {}
  getCourses(callback) {
    let courseModel = new CourseModel();
    let chaptersModel = new ChaptersModel();
    //获得数据
    courseModel.getAllCourse(function(courses) {
      //获得每个课程
      for (let i = 0; i < courses.length; i++) {
        //获得课程的id
        let courses_id = courses[i].id;
        //根据课程id获得章节数据
        chaptersModel.getChaptersById(courses_id, function(chapters) {
          //每次取得的章节数据放到课程里面
          courses[i].chapters = chapters;
          if (i == courses.length - 1) {
            callback(courses);
          }
        });
      }
    });
  }
}

module.exports = CourseService;
