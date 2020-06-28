<template>
  <v-app id="app">
    <index v-if="isLogin" />
    <login v-else />
    <alertdialog />
  </v-app>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin"])
  },
  components: {
    index: () => import("@/components/index"),
    login: () => import("@/components/Login"),
    alertdialog: () => import("@/components/AlertDialog.vue")
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
