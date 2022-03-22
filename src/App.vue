<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  <Nav/>
  <TodoApp/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TodoApp from "@/components/HelloWord/TodoApp.vue";
import Nav from "@/components/Nav/Nav.vue";

export default defineComponent({
  name: 'App',
  components: {
    TodoApp,Nav
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
