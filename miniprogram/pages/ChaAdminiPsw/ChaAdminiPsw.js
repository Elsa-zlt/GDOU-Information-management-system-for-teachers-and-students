// pages/ChaAdminiPsw/ChaAdminiPsw.js
const db = wx.cloud.database()
const adminilogin = db.collection('adminilogin')
const _ = db.command


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 自定义函数--提交表单
   */
  onSubmit: function (e) {
    // 获取前端表单数据
    let info = e.detail.value

    
    // 数据类型转换
    info.adminiPassword = Number(info.adminiPassword)

    adminilogin.doc(this.data.id).update({
      data:{
        adminiPassword : info.adminiPassword
      }
    }).then(res=>{
      wx.showToast({
        title: '保存成功',
        duration: 3000
      })
      // 成功后返回上一页
      wx.navigateBack()
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
    // console.log(this.data.id)
    adminilogin.doc(this.data.id).get({
      success:res=>{
        this.setData({
          adminiID : res.data.adminiID
        })
      }
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