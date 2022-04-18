// pages/S_stuindex/S_stuindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  toChcStuInfo(){
    wx.redirectTo({
      url: '../S_ShowStuInfo/S_ShowStuInfo?id=' + this.data.id,
    })
  },

  toChaStuPsw(){
    wx.redirectTo({
      url: '../S_ChaStuPsw/S_ChaStuPsw?id=' + this.data.id,
    })
  },

  toSelectCourse(){
    wx.redirectTo({
      url: '../S_SelectCourses/S_SelectCourses?id=' + this.data.id,
    })
  },

  toRetreatCourse(){
    wx.redirectTo({
      url: '../S_RetreatCourses/S_RetreatCourses?id=' + this.data.id,
    })
  },

  toChcCourseInfo(){
    wx.redirectTo({
      url: '../S_ShowCourseInfo/S_ShowCourseInfo?id=' + this.data.id,
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
    console.log(this.data.id)
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