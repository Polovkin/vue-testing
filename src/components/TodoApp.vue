<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" :data-test="TEST_NAMES.TODO">
      {{ todo.text }}
    </div>

    <form :data-test="TEST_NAMES.FORM" @submit.prevent="createTodo">
      <input :data-test="TEST_NAMES.NEW_TODO" v-model="newTodo" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {TEST_NAMES} from "@/components/types";

export default defineComponent({
  name: 'TodoApp',

  data() {
    return {
      newTodo: '',
      TEST_NAMES,
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        },
      ]
    }
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false
      })
    }
  }
})
</script>
