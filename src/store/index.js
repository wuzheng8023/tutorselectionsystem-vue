import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/MyAxios";
import { author } from "@/util/Const";
import { updateRoutes } from "@/router/index";

Vue.use(Vuex);

const myState = {
  exception: { message: null },
  isLogin: false,
  user: {},
  courses: [],
  students: [],
  settings: {}
};

const myMutations = {
  [types.LIST_COURSE](state, data) {
    state.courses = data;
  },
  [types.GET_USER](state, data) {
    state.user = data;
  },
  [types.LIST_STUDENT](state, data) {
    state.students = data;
  },
  [types.UPDATE_SETTING](state, data) {
    state.settings = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  [types.LOGOUT](state, data) {
    state.isLogin = data;
  }
};

const myActions = {
  async [types.LIST_COURSE]({ commit }, data) {
    let resp = await axios.get("courses");
    commit(types.LIST_COURSE, resp.data.courses);
  },
  async [types.GET_USER]({ commit }, data) {
    let resp = await axios.get("user");
    commit(types.GET_USER, resp.data.user);
  },
  async [types.LIST_STUDENT]({ commit }, data) {
    let resp = await axios.get("students");
    commit(types.LIST_STUDENT, resp.data.students);
  },
  async [types.GET_SETTING]({ commit }, data) {
    let resp = await axios.get("settings");
    commit(types.GET_SETTING, resp.data.setting);
  },
  //登陆
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];
    if (auth != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      //更新路由
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },
  //登出
  async [types.LOGOUT]({ commit }, data) {
    // let resp = await axios.post("logout", data);
    // let auth = resp.headers[author];
    // if (auth != null) {
    sessionStorage.clear();
    // updateRoutes();
    commit(types.LOGIN, false);

    // }
  }
};

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
//当刷新时，判断是否已经登陆，避免刷新时将islogin置为false
// 执行时判断，刷新时检测；也可以添加长度等更严格判断
if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
}
