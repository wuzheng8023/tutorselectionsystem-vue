<template>
  <v-container>
    <v-card>
      <p>姓名：{{ getUser.name }}</p>
      <p>学号：{{ getUser.number }}</p>
      <p>综合成绩：{{ getUser.overallScore }}</p>
      <div><v-btn block @click="select">点我报名</v-btn></div>
    </v-card>
  </v-container>
</template>
<script>
import axios from "@/axios/MyAxios.js";
import { GET_USER } from "@/store/types.js";
export default {
  data: () => ({}),
  created() {
    this.$store.dispatch(GET_USER);
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    async select() {
      let resp = await axios.get("select");
    }
  }
};
</script>
