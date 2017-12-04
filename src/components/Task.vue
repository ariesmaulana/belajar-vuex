<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.task }}
        <button>Selesai</button>
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
  computed: {
    tasks()  {
      return this.$store.getters.getTask
    }
  }
}
</script>