<template>
  <div id="app" class="bg">
    <router-view/>
  </div>
</template>

<script>
import './assets/script/core/bootstrap.bundle.min.js'
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 19/23px Montserrat, "Montserrat", sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: -0.06em;
}
#app.bg{
  background-color: #1d2024;
}
</style>
