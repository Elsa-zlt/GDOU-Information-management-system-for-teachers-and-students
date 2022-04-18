// pages/T_ShowTeaCourseInfo/T_ShowTeaCourseInfo.js
const db = wx.cloud.database()
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
      url: '../T_teaindex/T_teaindex?id=' + this.data.id,
  })
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
    CourseSelect.where({
      teachers : _.eq(name)
    })
    .get()
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