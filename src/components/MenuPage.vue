<template>
    <div class="navbar">
      <button v-on:click="goHome" class="button">Home</button>
      <button v-on:click="goNews" class="button">News</button>
      <button v-on:click="goContact" class="button">Contact</button>
    </div>
</template>

<script>

export default {
  name: 'Menupage',
  methods: {
    goHome: function () {
      this.$router.push('HomePage')
    },
    goNews: function () {
      this.$router.push('MyLink')
    },
    goContact: function () {
      this.$router.push('Contact')
    }
  }
}
//  color: #f2f2f2;
//  text-align: center;

</script>

<style>

body {margin:0;}

.navbar {
  overflow: hidden;
  background-color: rgba(0, 174, 255, 0.863);
  bottom: 0;
  width: 100%;
  text-align: left;
}

.navbar a {
  float: left;
  display: block;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  color: #4CAF50;
}

.navbar a:hover {
  background: #f1f1f1;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}

.button {
  float: left;
  border: none;
  display: block;
  padding: 5px 30px;
  text-decoration: none;
  font-size: 17px;
  color: black;
  background-color: rgba(0, 174, 255, 0.863);
}

.button:hover {
  background: #4CAF50;
  color: black;
}

.main {
  padding: 16px;
  margin-bottom: 30px;
}

</style>
