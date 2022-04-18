// pages/S_SelectCourses/S_SelectCourses.js
const db = wx.cloud.database()
const student = db.collection('student')
const CourseSelect = db.collection('CourseSelect')
const CourseScore = db.collection('CourseScore')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onChange(e) {
    let i = e.detail.value;
    let value = this.data.coursenameinfo[i];
    this.setData({
      coursename : value
    })
    CourseSelect
    .where({
      coursename : this.data.coursename
    }).get()
    .then(res=>{
      this.setData({
        courseinfo : res.data[0]
      })
      console.log(res.data[0].teachers)
    })
  },

  onChange_1(e){
    let i = e.detail.value;
    let value = this.data.courseinfo.teachers[i];
    this.setData({
      teacher : value
    })
  },

  toReturnIndex(){
    wx.redirectTo({
      url: '../S_stuindex/S_stuindex?id=' + this.data.id,
  })
  },

  onSubmit: function (e){
    
    let stuinfo = [{name : this.data.studentinfo.name , grade : '无成绩信息'}]
    console.log(stuinfo[0])
    // 获取前端表单数据
    let info = e.detail.value
    info.coursename = Number(info.coursename)
    info.teacher = Number(info.teacher)

    // console.log(info)
    info.coursename = this.data.coursenameinfo[info.coursename].toString()
    info.teacher = this.data.courseinfo.teachers[info.teacher].toString()
    console.log(info)
    info.credit = Number(this.data.courseinfo.credit) 
    info.hour = Number(this.data.courseinfo.hour) 
    info.grade = "无成绩信息"
    console.log(info)
    // console.log(this.data.id)
    student.doc(this.data.id).get()
    .then(res=>{
      console.log(res.data.CourseInfo)
    })

    student.doc(this.data.id).get({
      success:res=>{
        // console.log(res.data.CourseInfo.length)
        var sclen = res.data.CourseInfo.length
        
        this.setData({
          studentinfo : res.data,
        })

        var check =0
        for(var i = 0; i < sclen; i++){
          if(info.coursename === res.data.CourseInfo[i].coursename){
            check++;
          }
        }
        console.log(check)
        console.log(sclen)
          // scname = scname.concat(res.data.CourseInfo[i].coursename)
          if(check != 0){
            wx.showModal({
              content: '您已经选择过该课程，无法继续选择',
              showCancel: false,
              title: '提示',
            })
            // break;
          }
          else{
            student.doc(this.data.id)
            .update({
              data:{
                CourseInfo : _.push(info)
              }
            })
            .then(res=>{
              console.log('保存成功')
              wx.cloud.callFunction({
                name:"S_UpdateCourseInfo",
                data:{
                  coursename : info.coursename,
                  teacher : info.teacher,
                  StuGradeInfo : stuinfo[0]
                }
              })
              .then(res=>{
                wx.showToast({
                  title: '保存成功',
                  duration: 3000
                })
                wx.redirectTo({
                  url: '../S_stuindex/S_stuindex?id=' + this.data.id,
              })
              })
            })
            .catch((e) => {
              console.log(e)
            })
          }
        }
        
      
    })


    // student.doc(this.data.id)
    // .update({
    //   data:{
    //     CourseInfo : _.push(info)
    //   }
    // })
    // .then(res=>{
    //   wx.cloud.callFunction({
    //     name:"S_UpdateCourseInfo",
    //     data:{
    //       coursename : info.coursename,
    //       teacher : info.teacher,
    //       StuGradeInfo : stuinfo[0]
    //     }
    //   })
    //   .then(res=>{
    //     wx.showToast({
    //         title: '保存成功',
    //         duration: 3000
    //       })
    //   })
      
    // })
    // .catch((e) => {
    //   console.log(e)
    // })

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
    student.doc(this.data.id).get({
      success:res=>{
        // console.log(res.data.CourseInfo.length)
        // var sclen = res.data.CourseInfo.length
      
        // var scname = []
        // for(var i = 0; i < sclen; i++){
        //   scname = scname.concat(res.data.CourseInfo[i].coursename)
        // }
        // console.log(scname)
        this.setData({
          studentinfo : res.data,
          
        })
        
      }
    })
    CourseSelect.get()
    .then(res=>{
      var clen = res.data.length
      var coursesname = []
      for(var i = 0 ; i < clen ; i++){
        coursesname = coursesname.concat(res.data[i].coursename)
      }
      console.log(coursesname)
      this.setData({
        coursenameinfo : coursesname
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