//index
const db = wx.cloud.database()
const adminilogin = db.collection('adminilogin')
const _ = db.command
const CourseScore = db.collection('CourseScore')
const teacher = db.collection('teacher')
const student = db.collection('student')
const CourseSelect = db.collection('CourseSelect')

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
    info.ID = Number(info.ID)
    info.password = Number(info.password)


    // console.log(info.identity)


    if(info.identity == 1){    
      var alen = this.data.adminiinfo.length
      let adminiinfo = this.data.adminiinfo
      var adminicheck = 0
      for(var i = 0 ; i < alen ; i++){
        if(info.ID != adminiinfo[i].adminiID){
          adminicheck ++;
        }
      }
      if(adminicheck === alen){
        wx.showModal({
          content: '您输入的管理员登录ID有误，请重新输入',
          showCancel: false,
          title: '提示',
        })
      }
      else{
        for(var i = 0 ; i < alen ; i++){
          if(info.ID === adminiinfo[i].adminiID){
            if(info.password === adminiinfo[i].adminiPassword){
              wx.redirectTo({
                url: '../adminiindex/adminiindex?id=' + adminiinfo[i]._id,
              })
              wx.showToast({
                title: '管理员登录成功',
                duration: 3000
              })
            }
            else{
              wx.showModal({
                content: '您输入的管理员密码有误，请重新输入',
                showCancel: false,
                title: '提示',
              })
            }
            break;
          }
        }
      }
    }

    if(info.identity == 2){    
      var tlen = this.data.teacherinfo.length
      let teacherinfo = this.data.teacherinfo
      var teachercheck = 0
      for(var i = 0 ; i < tlen ; i++){
        if(info.ID != teacherinfo[i].TID){
          teachercheck ++;
        }
      }
      if(teachercheck === tlen){
        wx.showModal({
          content: '您输入的教工号有误，请重新输入',
          showCancel: false,
          title: '提示',
        })
      }
      else{
        for(var i = 0 ; i < tlen ; i++){
          if(info.ID === teacherinfo[i].TID){
            if(info.password === teacherinfo[i].TPasW){
              wx.redirectTo({
                url: '../T_teaindex/T_teaindex?id=' + teacherinfo[i]._id,
              })
              wx.showToast({
                title: teacherinfo[i].name + '登录成功',
                duration: 3000
              })
            }
            else{
              wx.showModal({
                content: '您的教工登录密码有误，请重新输入',
                showCancel: false,
                title: '提示',
              })
            }
            break;
          }
        }
      }
    }


    if(info.identity == 3){    
      var slen = this.data.studentinfo.length
      let studentinfo = this.data.studentinfo
      var studentcheck = 0
      for(var i = 0 ; i < slen ; i++){
        if(info.ID != studentinfo[i].SID){
          studentcheck ++;
        }
      }
      if(studentcheck === slen){
        wx.showModal({
          content: '您输入的学号有误，请重新输入',
          showCancel: false,
          title: '提示',
        })
      }
      else{
        for(var i = 0 ; i < slen ; i++){
          if(info.ID === studentinfo[i].SID){
            if(info.password === studentinfo[i].SPasW){
              wx.redirectTo({
                url: '../S_stuindex/S_stuindex?id=' + studentinfo[i]._id,
              })
              wx.showToast({
                title: studentinfo[i].name + '登录成功',
                duration: 3000
              })
            }
            else{
              wx.showModal({
                content: '您的学生登录密码有误，请重新输入',
                showCancel: false,
                title: '提示',
              })
            }
            break;
          }
        }
      }
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // teacher.get().then(res => {
      
      // console.log(res.data.length)
      // var tlen = res.data.length
      // console.log(res.data[0].name)
      // var tname = []
      // for(var i = 0; i < tlen; i++){
      //   tname = tname.concat(res.data[i].name)
      // }
      // console.log(tname)
    // })

    // CourseSelect.get()
    // .then(res=>{
    //   var clen = res.data.length
    //   console.log(clen)
    //   console.log(res.data)
    //   var coursesname = []
    //   for(var i = 0 ; i < clen ; i++){
    //     coursesname = coursesname.concat(res.data[i].coursename)
    //   }
    //   console.log(coursesname)
    // })

    // db.collection('todos').doc('todo-identifiant-aleatoire').update({
    //   data: {
    //     tags: _.push('mini-program')
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })

    // var test = []
    // var test1 = ['111','222']
    // test.push(test1)
    // console.log(test)

    adminilogin.get()
    .then(res=>{
      // console.log(res.data[0]._id)
      this.setData({
        adminiinfo : res.data
      })
    })

    student.get()
    .then(res=>{
      // console.log(res.data[0])
      this.setData({
        studentinfo : res.data
      })
    })

    CourseScore.where({
      teacher : '李升'
    }).get()
    .then(res=>{
      console.log(res.data)
    })
    
    teacher.get()
    .then(res=>{
      console.log(res.data)
      this.setData({
        teacherinfo : res.data
      })
    })

    CourseSelect.where({
      teachers : _.eq('李升')
    })
    .get()
    .then(res=>{
      console.log(res.data)
      
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