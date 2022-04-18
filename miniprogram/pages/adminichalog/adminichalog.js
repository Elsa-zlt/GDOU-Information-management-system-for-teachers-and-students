// pages/adminichalog/adminichalog.js
const db = wx.cloud.database()
const adminilogin = db.collection('adminilogin')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  /**
   * 自定义函数--提交管理员ID及密码
   */
  onSubmit: function (e) {
    // 获取表单中提交的数据
    let info = e.detail.value

    // 数据转换
    info.adminiID = Number(info.adminiID)
    info.adminiPassword = Number(info.adminiPassword)

    adminilogin.add({
      data:info,
      success:res=>{
        wx.showToast({
          title: '保存成功',
          duration: 3000
        })
        // 成功后返回首页
        wx.redirectTo({
          url: '../adminiindex/adminiindex',
      })
      },
      fail:err=>{
        // 失败提示
        wx.showToast({
          title: '保存失败',
          duration: 3000
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