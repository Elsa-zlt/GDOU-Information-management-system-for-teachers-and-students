// pages/ChaCourseInfo/ChaCourseInfo.js
const db = wx.cloud.database()
const _ = db.command

const CourseSelect = db.collection('CourseSelect')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onSubmit: function (e){
    // 获取前端表单数据
    let info = e.detail.value
    console.log(info)
    info.credit = Number(info.credit)
    info.hour = Number(info.hour)

    CourseSelect.doc(this.data.id)
    .update({
      data:{
        credit : info.credit,
        hour : info.hour
      },
      success: function(res) {
        wx.showToast({
          title: '更新成功',
          duration: 3000
        })
        wx.redirectTo({
          url: '../ShowCourseInfo/ShowCourseInfo',
      })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
     })
     console.log(this.data.id)
     CourseSelect.doc(this.data.id).get()
    .then(res=>{
      console.log(res.data)
      this.setData({
        courseinfo : res.data
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