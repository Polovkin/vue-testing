<template>
  <div>
    <button @click="increment" >press</button>
    Count: {{ count }}
  </div>
</template>

<script>
export default {
  name: "StoreCounter",
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>
