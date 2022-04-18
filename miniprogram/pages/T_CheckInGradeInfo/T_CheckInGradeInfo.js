// pages/T_CheckInGradeInfo/T_CheckInGradeInfo.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
const CourseScore = db.collection('CourseScore')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toReturnIndex(){
    wx.redirectTo({
      url: '../T_teaindex/T_teaindex?id=' + this.data.id,
  })
  },

  toCheckInGradeInfo(e){
    let coursename = e.target.dataset.index.coursename
    let teacher = e.target.dataset.index.teacher
    var length = e.target.dataset.index.StuGradeInfo.length
    console.log(coursename)
    console.log(typeof(teacher))
    // console.log(typeof(length))
    // length = length.toString()
    if(length === 0){
      wx.showModal({
        content: '该课程-教师对应学生人数为0，无法登记成绩',
        showCancel: false,
        title: '提示',
      })
    }
    else{
      wx.redirectTo({
        url: '../T_ToCheckInGrade/T_ToCheckInGrade?i=0&coursename=' + coursename + '&teacher=' + teacher ,
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let name = options.name
    console.log(id)
    console.log(name)
    this.setData({
      id : id,
      name : name
    })
    CourseScore.where({
      teacher : name
    }).get()
    .then(res=>{
      console.log(res.data)
      this.setData({
        CourseInfo : res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})