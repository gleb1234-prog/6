<template>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <span :class="{ done: todo.done }" @click="toggleTodo(todo.id)">
        {{ todo.text }}
      </span>
      <button @click="deleteTodo(todo.id)">×</button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const filteredTodos = computed(() => store.getters.filteredTodos)

const toggleTodo = (id) => {
  store.dispatch('toggleTodo', id)
}

const deleteTodo = (id) => {
  store.dispatch('deleteTodo', id)
}
</script>

<style>
.done { text-decoration: line-through; opacity: 0.7; }
li { cursor: pointer; margin: 5px 0; }
button { margin-left: 10px; color: red; }
</style>