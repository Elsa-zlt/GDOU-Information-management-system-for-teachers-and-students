// pages/CourseSelectOper/CourseSelectOper.js
const db = wx.cloud.database()
const _ = db.command
const teacher = db.collection('teacher')
const CourseSelect = db.collection('CourseSelect')
const CourseScore = db.collection('CourseScore')

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
    if((info.teacher1 != info.teacher2)&&(info.teacher2 != info.teacher3)&&(info.teacher1 != info.teacher3)){
      info.credit = Number(info.credit)
    info.hour = Number(info.hour)
    var tname = this.data.tname
    
    var tnameinfo = []
    
    tnameinfo = tnameinfo.concat(tname[Number(info.teacher1)])
    tnameinfo = tnameinfo.concat(tname[Number(info.teacher2)])
    tnameinfo = tnameinfo.concat(tname[Number(info.teacher3)])

    console.log(tnameinfo)

    CourseSelect.add({
      data: {
        coursename : info.coursename,
        credit : info.credit,
        hour : info.hour,
        teachers : tnameinfo,
        
      },
      success: function(res) {
        for(var i = 0; i<3 ; i++){
          CourseScore.add({
          
            data: {
              
              coursename: info.coursename,
              // credit : info.credit,
              teacher : tnameinfo[i],
              StuGradeInfo : []
            },
            success: function(res) {
              
              wx.showToast({
                title: '保存成功',
                duration: 3000
              })
            }
          })
        }
        wx.showToast({
          title: '保存成功',
          duration: 3000
        })
        
        
        wx.redirectTo({
          url: '../adminiindex/adminiindex',
      })
      
      fail:err=>{
        // 失败提示
        wx.showToast({
          title: '保存失败',
          duration: 3000
        })
      }
      }
    })
    }
    else{
      wx.showModal({
        content: '请选择不同的老师，否则无法提交',
        showCancel: false,
        title: '提示',
        
      })
    }
    
  },

  onChange1(e) {
    let i = e.detail.value;
    let value = this.data.tname[i];
    this.setData({
      tname1 : value
    })
  },

  onChange2(e) {
    let i = e.detail.value;
    let value = this.data.tname[i];
    this.setData({
      tname2 : value
    })
  },

  onChange3(e) {
    let i = e.detail.value;
    let value = this.data.tname[i];
    this.setData({
      tname3 : value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    teacher.get().then(res => {
      
      // console.log(res.data.length)
      var tlen = res.data.length
      // console.log(res.data[0].name)
      var tname = []
      for(var i = 0; i < tlen; i++){
        tname = tname.concat(res.data[i].name)
      }
      console.log(tname)
      this.setData({
        tname : tname
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