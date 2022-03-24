<template>
  <button @click="redirect">Click to Edit</button>
</template>

<script>
export default {
  name: "RouterLink",
  props: ['isAuthenticated'],
  methods: {
    redirect() {
      if (this.isAuthenticated) {
        this.$router.push(`/posts/${this.$route.params.id}/edit`)
      } else {
        this.$router.push('/404')
      }
    }
  }
}
</script>

<style scoped>

</style>
