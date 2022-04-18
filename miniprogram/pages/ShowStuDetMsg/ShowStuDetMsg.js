// pages/ShowStuDetMsg/ShowStuDetMsg.js
const db = wx.cloud.database()
const student = db.collection('student')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  editStudent(){
    let id = this.data.id
    wx.redirectTo({
      url: '../AddStuMsg/AddStuMsg?id=' + id,
  })
  },

  deleteStudent(){
    
    let id = this.data.id
    
    student.doc(id).remove({
      success:res=>{
        // 删除成功后返回上一页
        wx.navigateBack()
      }
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
    // 获取当前id
    let id = this.data.id
    console.log(id)

    student.doc(id).get({
      success:res=>{
        this.setData({
          info : res.data
        })
      }
    })
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