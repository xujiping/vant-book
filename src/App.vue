<template>
  <div id="app">
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <router-view />
  </div>
</template>

<script>
// 百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c945e29f51216b77bf75de9d963c7d63";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: "App",
  components: {}
};
</script>

<style>
body {
  background-color: #eff3f5;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
