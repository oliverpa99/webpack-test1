<template>
    <div id="hdbody">
        <div id="header"/>
        <MenuPage/>
    </div>
</template>

<script>
import MenuPage from './MenuPage.vue'
export default {
  name: 'Header',
  components: {
    MenuPage
  }
}
</script>

<style>
#header{
  margin-top: -100px;
  background-color: blue;
  height: 100px;
}
#hdbody {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
