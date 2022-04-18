// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const student = db.collection('student')
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  // var coursename = event.coursename
  var studentname = event.studentname
  var grade = event.grade
  let courseindex = event.courseindex
  // let coursename = 'CourseInfo.' + courseindex + '.coursename'
  let updgrade = 'CourseInfo.' + courseindex + '.grade'

  console.log(studentname)

  return await student.where({
    name : studentname,
    // [coursename] : _.eq(coursename)
  })
  .update({
    data:{
      [updgrade] : grade
    }
  })
}