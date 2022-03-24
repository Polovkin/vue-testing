<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  <h1>asd</h1>
  <TransitionComponent/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TransitionComponent from "@/components/Transition/TransitionComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    TransitionComponent
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
