// pages/S_ShowCourseInfo/S_ShowCourseInfo.js
const db = wx.cloud.database()
const student = db.collection('student')
const CourseSelect = db.collection('CourseSelect')

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
      console.log(res.data.CourseInfo.length)
      var clen = res.data.CourseInfo.length
      var TotalCredit = 0
      for(var i = 0 ; i < clen ; i ++){
        TotalCredit = TotalCredit + res.data.CourseInfo[i].credit
      }
      // console.log(TotalCredit)
      this.setData({
        TotalCredit : TotalCredit
      })
    })
    console.log(this.data.coursesinfo)
  },

  toReturnIndex(){
    wx.redirectTo({
      url: '../S_stuindex/S_stuindex?id=' + this.data.id,
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.coursesinfo)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(this.data.coursesinfo)
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