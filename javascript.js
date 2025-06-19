import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Изучить Vuex', done: false },
      { id: 2, text: 'Создать To-Do List', done: true }
    ],
    filter: 'all' // all, active, completed
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) todo.done = !todo.done
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    SET_FILTER(state, filter) {
      state.filter = filter
    }
  },
  actions: {
    addTodo({ commit }, text) {
      const newTodo = { id: Date.now(), text, done: false }
      commit('ADD_TODO', newTodo)
    },
    toggleTodo({ commit }, id) {
      commit('TOGGLE_TODO', id)
    },
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id)
    },
    setFilter({ commit }, filter) {
      commit('SET_FILTER', filter)
    }
  },
  getters: {
    filteredTodos(state) {
      switch (state.filter) {
        case 'active': return state.todos.filter(todo => !todo.done)
        case 'completed': return state.todos.filter(todo => todo.done)
        default: return state.todos
      }
    }
  }
})