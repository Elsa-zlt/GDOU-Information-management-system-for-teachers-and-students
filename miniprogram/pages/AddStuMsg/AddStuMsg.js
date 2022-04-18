// pages/AddStuMsg/AddStuMsg.js
const db = wx.cloud.database()
const student = db.collection('student')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onSubmit: function (e){
    // 获取前端表单数据
    let info = e.detail.value
    // 数据类型转换
    info.SID = Number(info.SID)
    info.SPasW = Number(info.SPasW)
    info.time = Number(info.time)
    info.CourseInfo = []

    let id = this.data.id

    if(id=='new'){
    student.add({
      data:info,
      success:res=>{
        wx.showToast({
          title: '保存成功',
          duration: 3000
        })
        
        
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
  }
  else{
    student.doc(id).update({
      data : info,
      success:res=>{
        console.log(res)
        wx.showToast({
          title: '更新成功',
          duration: 3000
        })
        wx.redirectTo({
          url: '../adminiindex/adminiindex',
      })
      },
      fail:err=>{
        // 失败提示
        wx.showToast({
          title: '更新失败',
          duration: 3000
        })
      }
    })
  }

    
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    this.setData({
      id : id
    })

    if(id!='new'){
      student.doc(id).get({
        success:res=>{
          this.setData({
            
            info:res.data,
            
          })
          
        }
      })
    }
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