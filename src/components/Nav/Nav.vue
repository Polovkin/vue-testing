<template>
  <nav>
    <a id="profile"
       href="/profile">My Profile</a>
    <a v-if="admin"
       id="admin"
       href="/admin">Admin</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Nav-test",
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
    }
  },
})
</script>

<style scoped>

</style>
