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
  // console.log(event.StuGradeInfo)
  let StuGradeInfo = event.StuGradeInfo
  return await CourseScore.where({
      coursename : coursename,
      teacher : teacher
    }).update({
      data:{
        StuGradeInfo : _.push(StuGradeInfo)
      }
    })
}