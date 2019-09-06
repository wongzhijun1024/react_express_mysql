//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    indexSelect: 0,
    topics: [{
      id: 0,
      title: "精品推荐"
    }, {
      id: 1,
      title: "新手必看"
    }, {
      id: 2,
      title: "C++课程"
    }, {
      id: 3,
      title: "算法课程"
    }, {
      id: 4,
      title: "数学课程"
    }, {
      id: 5,
      title: "python"
    }],
    courses: []
  },
  onLoad: function () {
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/course',
      success:function(res){
        if (res.statusCode==200){
          let courses = res.data;
          that.setData({ courses: courses});
        }
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 80;
        that.setData({
          height: buffer
        });
      },
    })
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
    })
  }
})