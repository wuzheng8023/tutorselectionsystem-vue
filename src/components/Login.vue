<template>
  <v-container fluid id="con">
    <myheader id="header" />
    <v-divider dark="true"></v-divider>

    <v-card id="card">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>科技让生活更美好</v-card-title>
      </v-img>
      <v-card-text class="text--primary">
        <v-form max-height="200" max-width="450" ref="form" id="myform">
          <v-text-field label="账号" required v-model="number"></v-text-field>
          <v-text-field
            label="密码"
            required
            v-model="password"
            type="password"
          ></v-text-field>
          <!-- <v-btn rounded color="primary" dark>Rounded Button</v-btn> -->
          <v-btn
            crounded
            color="primary"
            dark
            id="btn"
            type="button"
            @click="login"
          >
            登陆
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import myheader from "@/components/layout/Header";
import { LOGIN } from "@/store/types.js";
export default {
  components: {
    myheader
  },
  data: () => ({
    number: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });

      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
#btn {
  width: 13rem;
  height: 3rem;
  bottom: 10px;
  /* top: 15px; */
}
#con {
  text-align: center;
}

#card {
  max-width: 600px;
  padding: 5rpx 20rpx;
  margin: auto;
  margin-top: 5%;
}
#myform {
  margin: 10rpx;
  width: 50rpx;
}
</style>
