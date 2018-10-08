<template>
<div id="app1">
    <Header/>
</div>
</template>

<script>

import Header from './Header.vue'
export default {
  name: 'HomePage',
  components: {
    Header
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
