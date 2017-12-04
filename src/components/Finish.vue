<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="finish in finisheds" :key="finish.id">{{ finish.task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Daftar Tugas yang Diselesaikan'
    }
  },
  computed: {
    finisheds()  {
      return this.$store.getters.getFinished
    }
  }
}
</script>