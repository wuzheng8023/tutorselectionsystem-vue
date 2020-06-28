import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/Login.vue";
import index from "../components/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login
  }
];

const router = new VueRouter({
  routes
});

export default router;

//下面为权限
// 后期追加的路由配置
//登陆后的公共组件
let loginRoutes = [
  {
    path: "/index",
    name: "index",
    component: index
  }
];
let tutorRoutes = [
  {
    path: "/tcourse",
    name: "tcourse",
    component: () => import("@/views/tutor/tcourse")
  },
  {
    path: "/town",
    name: "town",
    component: () => import("@/views/tutor/town")
  },
  {
    path: "/tselect",
    name: "tselect",
    component: () => import("@/views/tutor/tselect")
  },
  {
    path: "/tstudent",
    name: "/tstudent",
    component: () => import("@/views/tutor//tstudent")
  }
];

let graduateRoutes = [
  {
    path: "/gtransript",
    name: "gtransript",
    component: () => import("@/views/graduate/gtransript")
  },
  {
    path: "/gsignup",
    name: "/gsignup",
    component: () => import("@/views/graduate/gsignup")
  }
];
// 必须与后端提前约定。按角色，动态加载路由信息
// 使其他角色即使知道路由路径，也无法加载对应的组件
const tutorRole = "6983f953b49c88210cb9";
const graduateRole = "bb63e5f7e0f2ffae845c";

// 暴露该方法。登录后，有vuex调用，通知更新路由信息
export function updateRoutes() {
  switch (sessionStorage.getItem("role")) {
    case tutorRole:
      router.addRoutes(tutorRoutes);
      router.addRoutes(loginRoutes);
      break;
    case graduateRole:
      // student的路由
      router.addRoutes(graduateRoutes);
      router.addRoutes(loginRoutes);
      break;
  }
}
//初始化的时候调用
// 再此文件模块加载时，也执行。用户登陆后刷新页面时，按sessionstorage中数据初始化
// 没有找到sessionstorage的监听事件
updateRoutes();
