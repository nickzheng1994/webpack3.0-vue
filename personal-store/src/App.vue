<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: .3s ease;
}
.component-fade-enter,.component-fade-leave-to{
   transform: translateX(100%)
}

/* .component-fade-leave-active for below version 2.1.8 */

</style>
