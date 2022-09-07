// eslint-disable-file no-use-before-define
<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>
<style>
body {
  background: black;
  color: white;
}
</style>
<script>
let id = 4;
export default {
  data() {
    const todos = [];
    todos.push({ id: 1, text: 'Learn HTML' });
    todos.push({ id: 2, text: 'Learn HTML' });
    todos.push({ id: 3, text: 'Learn HTML' });

    return {
      newTodo: '',
      todos,
    };
  },
  methods: {
    addTodo() {
      id += 1;
      this.todos.push({ id, text: this.newTodo });
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },
  },
};
</script>
