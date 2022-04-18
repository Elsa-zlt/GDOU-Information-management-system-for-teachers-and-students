// pages/T_ChaTeaPsw/T_ChaTeaPsw.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onSubmit: function (e) {
    // 获取前端表单数据
    let info = e.detail.value

    
    // 数据类型转换
    info.TeaPsw = Number(info.TeaPsw)

    teacher.doc(this.data.id).update({
      data:{
        TPasW : info.TeaPsw
      }
    }).then(res=>{
      wx.showToast({
        title: '保存成功',
        duration: 3000
      })
      // 成功后返回上一页
      wx.redirectTo({
        url: '../T_teaindex/T_teaindex?id=' + this.data.id,
      })
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
    teacher.doc(this.data.id).get({
      success:res=>{
        this.setData({
          TID : res.data.TID
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