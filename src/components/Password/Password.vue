<template>
  <div>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "Password-test",
  props: {
    minLength: {
      type: Number
    }
  },
  data() {
    return {
      password: ''
    }
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
