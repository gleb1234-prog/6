<template>
  <form @submit.prevent="addTodo">
    <input v-model="text" placeholder="Новая задача">
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const text = ref('')
const store = useStore()

const addTodo = () => {
  if (text.value.trim()) {
    store.dispatch('addTodo', text.value)
    text.value = ''
  }
}
</script>