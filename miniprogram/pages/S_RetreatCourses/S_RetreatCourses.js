// pages/S_RetreatCourses/S_RetreatCourses.js
const db = wx.cloud.database()
const student = db.collection('student')
const CourseSelect = db.collection('CourseSelect')

const _ = db.command


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toReturnIndex(){
    wx.redirectTo({
      url: '../S_stuindex/S_stuindex?id=' + this.data.id,
  })
  },

  toRetreatCourses(e){
    
    let coursename = e.target.dataset.index.coursename
    let teacher = e.target.dataset.index.teacher
    let grade = e.target.dataset.index.grade
    if(grade === '无成绩信息'){
      student.doc(this.data.id)
    .update({
      data:{
        CourseInfo : _.pull({
          coursename : _.eq(coursename)
        })
      }
    })
    .then(res=>{
      wx.cloud.callFunction({
        name:"S_RetCourseInfo",
        data:{
          coursename : coursename,
          teacher : teacher,
          studentname : this.data.studentname
        }
      })
      .then(res=>{
        wx.redirectTo({
          url: '../S_stuindex/S_stuindex?id=' + this.data.id,
      })
        wx.showToast({
          title: '退选课程成功',
          duration: 3000
        })
      })
      .catch((e) => {
        console.log(e)
      })
    })
    }
    else{
      wx.showModal({
        content: '该课程已经有成绩无法退选',
        showCancel: false,
        title: '提示',
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.setData({
      id : id
    })
    student.doc(this.data.id)
    .get()
    .then(res=>{
      console.log(res.data.name)
      this.setData({
        coursesinfo : res.data.CourseInfo,
        studentname : res.data.name
      })
      console.log(this.data.coursesinfo)
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