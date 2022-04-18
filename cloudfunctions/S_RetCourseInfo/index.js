// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const CourseScore = db.collection('CourseScore')
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  var coursename = event.coursename
  var teacher = event.teacher
  var studentname = event.studentname
  return await CourseScore.where({
      coursename : coursename,
      teacher : teacher
    }).update({
      data:{
        StuGradeInfo : _.pull({
          name : _.eq(studentname)
        })
      }
    })
}