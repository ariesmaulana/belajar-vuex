<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.task }}
        <button @click="setFinish(task.id)">Selesai</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Daftar Tugas'
    }
  },
  methods:  {
    setFinish(id){
       this.$store.commit('finish',id)
    }
  },
  computed: {
    tasks()  {
      return this.$store.getters.getTask
    }
  }
}
</script>