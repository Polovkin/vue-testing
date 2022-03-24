<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in posts"
        :key="post.id">
      {{ post.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Post-test",
  data() {
    return {
      posts: [{id: 1, name: 'Testing Vue Router'}]
    }
  }
}
</script>

<style scoped>

</style>
