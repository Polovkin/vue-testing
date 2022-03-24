<template>
  <router-link to="/posts">Go to posts</router-link>
  <router-view />
  <StoreCounter/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import StoreCounter from "@/components/StoreCounter/StoreCounter.vue";

export default defineComponent({
  name: 'App',
  components: {
    StoreCounter,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
