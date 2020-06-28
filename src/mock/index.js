import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { author } from "@/util/Const";
let mock = new MockAdapter(axios);

// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/homeworks/{hid}
function path(p) {
  let reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
// ===================================

//reply的参数列表 (status, data, headers)
//status，http状态码  data是返回的json数据

// 地址，支持JS正则表达式
// 正则表达式中 \，由转义符，\/，替代
// 匹配任意字符，\w+；
// $，结束。避免匹配多个
// 等价于 /users/数字

mock.onGet(path("courses")).reply(c => {
  return [
    200,
    {
      courses: mycourses
    }
  ];
});

mock.onGet(path("user")).reply(c => {
  return [
    200,
    {
      user: myuser
    }
  ];
});

mock.onGet(path("students")).reply(c => {
  return [
    200,
    {
      students: mystudents
    }
  ];
});

mock.onGet(path("settings")).reply(c => {
  return [
    200,
    {
      settings: mysetting
    }
  ];
});

// config，axios config对象。包含请求信息
// 返回数组，[status, {data对象}, {header对象}]
mock.onPost("login").reply(c => {
  // 此时请求的json已经转为字符串，不是json对象。因此需要转换回
  let data = c.data;

  let user = JSON.parse(data);

  let result = [401, { message: "用户名密码错误" }];
  if (user.number == "123" && user.password == "123") {
    result = [
      200,
      {
        role: "6983f953b49c88210cb9"
      },
      {
        authorization: "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a"
      }
    ];
  }

  return result;
});

// ----------------------
const mycourses = [
  { id: 1, name: "JAVA", grade: 45, floorGroad: 0, weight: 0, type: 1 },
  { id: 2, name: "mysql", grade: 45, floorGroad: 0, weight: 0, type: 1 },
  { id: 3, name: "数据库", grade: 22, floorGroad: 0, weight: 0, type: 1 },
  { id: 4, name: "框架", grade: 99, floorGroad: 0, weight: 0, type: 1 }
];
const mystudents = [
  { id: 1, name: "牛二", number: 2017214206, ranking: 1, overallScore: 99 },
  { id: 2, name: "王五", number: 2017214207, ranking: 2, overallScore: 88 },
  { id: 3, name: "李四", number: 2017214208, ranking: 3, overallScore: 56 },
  { id: 4, name: "小九", number: 2017214209, ranking: 4, overallScore: 66 }
];

const myuser = {
  id: 1,
  number: 2017214206,
  name: "张三",
  overallScore: 99
};

const mysetting = {
  id: 1,
  name: "张三",
  selectRange: 50,
  numberOfStudentRequired: 12,
  number: 2017007
};
