<template>
  <div id="app1">
    <Header/>
    <Seen/>
  </div>
</template>

<script>
import Seen from './Seen.vue'
import Header from './Header.vue'

export default {
  name: 'Mylink',
  components: {
    Header,
    Seen
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
