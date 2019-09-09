//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    coursesIndex: 0,
    courses: []
  },
  onLoad: function () {
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/index',
      success:function(res){
        if (res.statusCode==200){
          console.log(res.data);
          let courses = res.data;
           that.setData({
             courses: courses
           });
       
        }
      }
    })
    //获得屏幕的高度
    let height =app.globalData.windowHeight;
    this.setData({
      height: height-90
    });
  
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      coursesIndex: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
    })
  }
})