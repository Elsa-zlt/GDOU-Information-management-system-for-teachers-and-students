// pages/ShowCourseInfo/ShowCourseInfo.js
const db = wx.cloud.database()
const _ = db.command

const CourseSelect = db.collection('CourseSelect')


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onCancel: function (e) {
    
    this.getCoursesList()
  },

  onSearch: function (e) {
    // 获取搜索关键词
    let keyword = e.detail

    // 获取正则表达式模糊查询
    CourseSelect.where({
      coursename:db.RegExp({
        regexp:keyword,
        options:'i',
      })
    }).orderBy('credit','asc').get({
      success:res=>{
        console.log(res.data)
        this.setData({
          coursesList : res.data
        })
      }
    })
  },

  getCoursesList: function () {
    CourseSelect.orderBy('credit','asc').get({
      success:res=>{
        this.setData({
          coursesList : res.data
        })
      }
    })
  },

  toChaCourseInfo(e){
    console.log(e.target.dataset.index)
    wx.redirectTo({
      url: '../ChaCourseInfo/ChaCourseInfo?id=' + e.target.dataset.index,
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    CourseSelect.orderBy('credit','asc').get()
    .then(res=>{
      console.log(res.data)
      this.setData({
        coursesList : res.data
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
    this.getCoursesList();
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