// pages/T_ToCheckInGrade/T_ToCheckInGrade.js
const db = wx.cloud.database()
const teacher = db.collection('teacher')
const CourseScore = db.collection('CourseScore')
const student = db.collection('student')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onSubmit: function (e) {
    // 获取前端表单数据
    let info = e.detail.value

    console.log(info.grade)
    let updgrade = 'StuGradeInfo.' + this.data.i + '.grade'

    
    
    CourseScore.doc(this.data.id)
    .update({
      data : {
        [updgrade] : info.grade
      },
    })
    .then(res=>{
      wx.cloud.callFunction({
        name:"T_CheckInGradeInfo",
        data:{
          coursename : this.data.coursename,
          studentname : this.data.stuname,
          grade : info.grade,
          courseindex : this.data.courseindex
        }
      })
      .then(res=>{
        console.log(this.data.stuslen)
        console.log(this.data.i)
        teacher.where({
          name : this.data.teacher
        })
        .get().then(res=>{
          console.log(res.data[0]._id)
          
            let tid = res.data[0]._id
            console.log(tid)
            if(Number(this.data.stuslen)  === Number(this.data.i) + 1 ){
            wx.showModal({
            title: '提示',
            content: '成绩登记完成，现在返回教师主页',
            showCancel: false,
            success (res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../T_teaindex/T_teaindex?id=' + tid,
              })
              } 
            }
          })
        }
        else{
          this.data.index = this.data.index.toString()
          wx.redirectTo({
          url: '../T_ToCheckInGrade/T_ToCheckInGrade?i='+ this.data.index +'&coursename=' + this.data.coursename + '&teacher=' + this.data.teacher ,
        })
        }
          
          
        })
        
        
      })
    })
    

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id = options.id
    let i = options.i
    let index = Number(options.i) + 1
    let coursename = options.coursename
    let teacher = options.teacher
    // let length = options.options
    console.log(typeof(i))
    console.log(coursename)
    console.log(teacher)
    // console.log(id)
    
    this.setData({
      i : i,
      index : index,
      coursename : coursename,
      teacher : teacher,
      // id : id
    })
    CourseScore.where({
      coursename : coursename,
      teacher : teacher
    }).get()
    .then(res=>{
      
      console.log(res.data[0].StuGradeInfo[Number(i)].name)
      console.log(res.data[0]._id)
      this.setData({
        stuslen : res.data[0].StuGradeInfo.length,
        id : res.data[0]._id,
        stuname : res.data[0].StuGradeInfo[Number(i)].name
      })
      student.where({
        name : res.data[0].StuGradeInfo[Number(i)].name
      })
      .get()
      .then(res=>{
        console.log(res.data[0].CourseInfo.length)
        let Courselength = res.data[0].CourseInfo.length
        for(var i = 0 ; i < Courselength ; i++){
          if(res.data[0].CourseInfo[i].coursename === coursename){
            var courseindex = i
          }
        }
        console.log(courseindex)
        this.setData({
          courseindex : courseindex.toString()
        })
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