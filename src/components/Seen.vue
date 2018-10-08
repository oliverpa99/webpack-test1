<template>
  <div>
    <table>
        <tbody>
          <tr v-for="item in msg" :key="item.id">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }} </td>
            <td>{{ item.cellPhone }} </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Seen',
  data () {
    return {
      msg: []
    }
  },

  mounted () {
    axios.get(`http://localhost:8080/getPersons`)
      .then(response => (this.msg = response.data))
      .catch(e => console.log(e))
  }
}

</script>

<style scoped>
li {
  margin: 0 10px;
  text-align: left;
}

thead {color:green;}
tbody {color:blue;}
tfoot {color:red;}

td {
    border: 1px solid black;
    text-align: left;
    padding: 10px;
}

</style>
