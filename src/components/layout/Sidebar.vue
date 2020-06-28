<template>
  <v-container>
    <v-navigation-drawer>
      <v-list-item-content>
        <v-list-item-title>{{ getUser.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ getUser.number }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-divider></v-divider>
      <template v-if="role == '6983f953b49c88210cb9'">
        <v-list-item to="/tselect">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>名单管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/tcourse">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>课程管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/tstudent">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>学生管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/town">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>个人信息</v-list-item-title>
        </v-list-item>
      </template>
      <template v-if="role == 'bb63e5f7e0f2ffae845c'">
        <v-list-item-content>
          <v-list-item to="/gtransript">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>我的成绩</v-list-item-title>
          </v-list-item>
          <v-list-item to="/gsignup">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>我要报名</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </template>
      <template v-slot:append>
        <div><v-btn block type="button" @click="logout">LOGOUT</v-btn></div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { GET_USER, LOGOUT } from "@/store/types.js";
import axios from "@/axios/MyAxios.js";
export default {
  data: () => ({ role: null }),
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch(GET_USER);
    this.role = sessionStorage.getItem("role");
  },
  methods: {
    async select() {
      let resp = await axios.get("logout");
    },
    logout() {
      this.$store.dispatch(LOGOUT);
      // console.log("登出");
    }
  }
};
</script>
<style scoped></style>
