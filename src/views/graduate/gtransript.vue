<template>
  <v-container>
    <p>已经选择课程</p>
    <v-data-table :headers="headers" :items="getCourses"></v-data-table>
    <p>您的综合成绩为：{{ getUser.overallScore }}</p>
  </v-container>
</template>
<script>
import { LIST_COURSE, GET_USER } from "@/store/types.js";
export default {
  data: () => ({
    headers: [
      { text: "课程名称", value: "name" },
      { text: "所得分数", value: "grade" }
    ]
  }),
  created() {
    this.$store.dispatch(LIST_COURSE);
    this.$store.dispatch(GET_USER);
  },
  computed: {
    getCourses() {
      return this.$store.state.courses;
    },
    getUser() {
      return this.$store.state.user;
    }
  }
};
</script>
