<template>
  <div class="app">
    <h1>To-Do List (Vuex)</h1>
    <TodoForm />
    <div class="filters">
      <button @click="setFilter('all')">Все</button>
      <button @click="setFilter('active')">Активные</button>
      <button @click="setFilter('completed')">Выполненные</button>
    </div>
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { useStore } from 'vuex'

const store = useStore()

const setFilter = (filter) => {
  store.dispatch('setFilter', filter)
}
</script>

<style>
.app { max-width: 500px; margin: 0 auto; }
.filters { margin: 20px 0; }
button { margin-right: 5px; }
</style>