<template>
  <v-container fluid id="container">
    <myheader id="header" />
    <v-divider></v-divider>
    <v-row id="row">
      <v-col sm="6" md="3"><sidebar id="sidebar" /></v-col>
      <v-col sm="6" md="9">
        <router-view id="router" :key="$route.path" />
      </v-col>
    </v-row>
    <myfooter id="footer" />
  </v-container>
</template>

<script>
import sidebar from "@/components/layout/Sidebar";
import myfooter from "@/components/layout/Footer";
import myheader from "@/components/layout/Header";
export default {
  components: {
    sidebar,
    myfooter,
    myheader
  }
};
</script>
<style scoped>
#container {
  /* flex: auto; */
  margin: 0;
  padding: 0;
}
#header {
  top: 0;
}
#row {
  position: absolute;
  top: 50rpx;
  width: 100%;
}
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
