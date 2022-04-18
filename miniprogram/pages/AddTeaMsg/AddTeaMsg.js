// pages/AddTeaMsg/AddTeaMsg.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
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
    info.TID = Number(info.TID)
    info.TPasW = Number(info.TPasW)

    let id = this.data.id

    if(id=='new'){
    teacher.add({
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
    teacher.doc(id).update({
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

    // console.log(this.data.id)

    if(id!='new'){
      teacher.doc(id).get({
        success:res=>{
          this.setData({
            // clen : res.data.CourseInfo.length,
            info:res.data,
            course:res.data.CourseInfo
          })
          let cour = res.data.CourseInfo
          // console.log(cour.length)
          for(var i = 0 ;i < cour.length; i++){
            console.log(cour[i])
          }
          // this.setData({
          //   clen : cour.length
          // })
          // console.log(this.data)
        }
      })
    }

    
    // console.log(this.data.courlen)

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
    
    // var cour = this.data.course
    // console.log(this.data.info)
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