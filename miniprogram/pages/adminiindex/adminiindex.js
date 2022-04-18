// pages/adminiindex/adminiindex.js

const db = wx.cloud.database()
const adminilogin = db.collection('adminilogin')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toAdminiChaLog(){
    wx.navigateTo({
      url: '../adminichalog/adminichalog',
  })
  },

  toChaAdminiPsw(){
    let id = this.data.id
    // console.log(id)
    wx.navigateTo({
      url: '../ChaAdminiPsw/ChaAdminiPsw?id=' + id,
  })
  },

  toAddTeaMsg(){
    let ne = 'new'
    wx.navigateTo({
      url: '../AddTeaMsg/AddTeaMsg?id=' + ne,
    })
  },

  toChcOrModTeaMsg(){
    wx.navigateTo({
      url: '../ShowTeaMsg/ShowTeaMsg',
    })
  },

  toAddStuMsg(){
    let ne = 'new'
    wx.navigateTo({
      url: '../AddStuMsg/AddStuMsg?id=' + ne,
    })
  },

  toChcOrModStuMsg(){
    wx.navigateTo({
      url: '../ShowStuMsg/ShowStuMsg',
    })
  },

  toAddCourseSelectInfo(){
      wx.navigateTo({
        url: '../CourseSelectOper/CourseSelectOper',
      })  
  },

  toChcOrModCourseSelectInfo(){
    wx.navigateTo({
      url: '../ShowCourseInfo/ShowCourseInfo',
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