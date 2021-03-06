let informInfo = {
  id: "1",
  message: "各学院、教学实践部及学生班：\r\n" +
    "定于本学期第18－20周上网选2018-2019学年第二学期的课程，现将有关事项通知如下：\r\n" +
    "1、选下学期课程之前，学生应对本学期已修课程进行评教。\r\n" +
    "2、选课网址：进入校园网主页点击本科教学服务网――教务系统—学生选课系统――输入用户名及口令，即可进入选课界面。 \r\n" +
    "3、选择课程时，应严格按照本专业、本年级的《本科培养方案》和课表说明栏的要求，注意先修与后续课程的关系顺序，一步步选择所修课程，同时还应特别注意区分金鸡岭校区和花江校区的上课时间及地点，以免误选。\r\n" +
    "4、选通识教育课程时，请根据各自年级的本科培养方案中的相关要求选课，不能选与本专业相同或相近的课程。通识教育课程在2018级《通识教育》选课界面上。\r\n" +
    "5、原不及格课程（含实验）需再次选课学习的，必须上网选定。不及格课程的选课时间从20周五开始。续读的同学也应在规定时间内选课并办理注册交费手续，如果本学期无课可选，应办理休学手续。\r\n" +
    "6、所有实验课都必须在实验选课系统中选定，同时，对独立设课的实验课程，还应作为一门课程在理论课表中选定，否则无法登陆成绩。\r\n" +
    "7、为了给每位学生公平的选课机会，对超容量的课程及课号仍采用电子抽签方式，电子抽签安排在第19周周五进行，届时选课系统将关闭一天，请同学们注意自己的选课时间，并在电子抽签后查看自己的课表，及时补选或改选课程，同时注意课表中有实验的课程，其理论课与实验课是否相符，不符的应尽早调整。每学期选课系统只进行一次电子抽签。\r\n" +
    "8、所有与选课有关的环节（包括实验及补选、改选、退课等）均应在选课系统开放的时间内完成（本学期18周一至下学期第二周日）。下学期开学后二周内，应再次上网核对已选的课表（因电子抽签后课表会出现变化）。选课系统关闭后，凡因学生个人原因造成课程漏选、错选或漏退、错退等情况，有关部门不再受理。\r\n" +
    "9、各学院应组织指导教师认真学习学分制及选课的有关规定，以便指导学生正确地选课。指导教师要对学生的选课情况进行检查，及时解决学生选课过程中出现的问题。\r\n" +
    "10、请各学院落实选课地点，以便安排好学生选课。不允许学生为了选课而旷课，也不允许为了选课而调（停）课。\r\n\r\n\r\n\r\n\r\n" +
    "教 务 处\r\n二Ο一八年十二月二十日\r\n\r\n\r\n\r\n\r\n\r\n\r\n理论课选课日程安排表\r\n时 间 选课学院\r\n第十八周一至第十八周二 生环院、建交院、九院\r\n第十八周三至第十八周五 一、二、三、六院\r\n第十八周六至第十九周二 五、七、八院\r\n第十九周三 四、十院\r\n第十九周四 正常选课补选\r\n第十九周五 电子抽签\r\n第十九周六至第二十周四 电子抽签后自由调整课表\r\n第二十周五至下学期第二周 不及格课程选课、\r\n所有学生自由调整课表\r\n下学期第二周周末 关闭选课系统",
  starttime: 1597152194000,
  endtime: 1597843402000,
  title: "标题",
  publisher: "10000"
}

export default {
  'get|/inform': option => {
    return {
      code: 0,
      message: "success",
      data: informInfo
    }
  }
}
