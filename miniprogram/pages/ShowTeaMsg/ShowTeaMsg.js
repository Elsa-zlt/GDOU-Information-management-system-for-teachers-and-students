// pages/ShowTeaMsg/ShowTeaMsg.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
const _ = db.command


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onCancel: function (e) {
    
    this.getTeachersList()
  },

  onSearch: function (e) {
    // 获取搜索关键词
    let keyword = e.detail

    // 获取正则表达式模糊查询
    teacher.where({
      name:db.RegExp({
        regexp:keyword,
        options:'i',
      })
    }).orderBy('TID','asc').get({
      success:res=>{
        this.setData({
          teachersList : res.data
        })
      }
    })
  },

  getTeachersList: function () {
    teacher.orderBy('TID','asc').get({
      success:res=>{
        this.setData({
          teachersList : res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.getTeachersList()
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