// pages/T_teaindex/T_teaindex.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
const CourseScore = db.collection('CourseScore')

const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  
  toChcTeaInfo(){
    wx.redirectTo({
      url: '../T_ShowTeaInfo/T_ShowTeaInfo?id=' + this.data.id,
    })
  },

  toChaTeaPsw(){
    wx.redirectTo({
      url: '../T_ChaTeaPsw/T_ChaTeaPsw?id=' + this.data.id,
    })
  },

  toChcTeaCourseInfo(){
    wx.redirectTo({
      url: '../T_ShowTeaCourseInfo/T_ShowTeaCourseInfo?id=' + this.data.id + '&name=' + this.data.name,
    })
  },

  toCheckInGradeInfo(){
    wx.redirectTo({
      url: '../T_CheckInGradeInfo/T_CheckInGradeInfo?id=' + this.data.id + '&name=' + this.data.name,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.setData({
      id : id
    })
    teacher.doc(options.id)
    .get()
    .then(res=>{
      // console.log(res.data.name)
      this.setData({
        name : res.data.name
      })
    })
    CourseScore.where({
      teacher : '李升'
    }).get()
    .then(res=>{
      console.log(res.data[0])
    })
    teacher.where({
      name : '李升'
    })
    .get().then(res=>{
      console.log(res.data[0])
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