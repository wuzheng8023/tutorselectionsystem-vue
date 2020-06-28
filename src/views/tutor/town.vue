<template>
  <v-container>
    <v-card>
      <p>姓名：{{ myUser.name }}</p>
      <p>工号：{{ MyUser.number }}</p>
      <p>
        <input type="text" v-model="myUser.selectRange" />
        <br />
        <input type="text" v-model="myUser.numberOfStudentRequired" />
        <br />
      </p>
      <div><v-btn block @click="save">保存</v-btn></div>
    </v-card>
  </v-container>
</template>
<script>
import axios from "@/axios/MyAxios.js";
import { GET_USER, GET_SETTING } from "@/store/types.js";
export default {
  data: () => ({
    myUser: {
      id: null,
      name: null,
      selectRange: null,
      numberOfStudentRequired: null,
      number: null
    }
  }),
  created() {
    this.$store.dispatch(GET_USER);
    this.$store.dispatch(GET_SETTING);
    this.myUser = this.$store.state.settings;
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    // save() {
    //   this.$store.dispatch(GET_SETTING);
    // }
  }
};
</script>
