<template>
  <div id="app">
        <h1>{{ msg }}</h1>  
      <div style="width: 600px; float:left;padding: 25px;">
        <my-task></my-task>
      </div>
      <div style="margin-left: 620px;padding: 25px;">
        <my-finish></my-finish>
      </div>
  </div>
</template>

<script>
import Task from '@/components/Task'
import Finish from '@/components/Finish'
export default {
  data () {
    return {
      msg: 'Mencoba Vuex ~~'
    }
  },
  components: {
    "my-task": Task,
    "my-finish": Finish
  }
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

h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}


</style>
