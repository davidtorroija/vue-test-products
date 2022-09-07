// eslint-disable-file no-use-before-define
<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id" :class="todo.done ? 'done' : ''">
        <input type="checkbox" v-model="todo.done"/>
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>

</template>
<style>
body {
  background: black;
  color: white;
}
.done {
  text-decoration: line-through;
}
</style>
<script>
let id = 4;
export default {
  data() {
    const todos = [];
    todos.push({ id: 1, text: 'Learn HTML', done: true });
    todos.push({ id: 2, text: 'Learn 2' });
    todos.push({ id: 3, text: 'Learn 3', done: false });

    return {
      newTodo: '',
      todos,
      hideCompleted: false,
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
  computed: {
    filteredTodos() {
      if (this.hideCompleted) {
        return this.todos.filter((todo) => !todo.done);
      }
      return this.todos;
    },
  },
};
</script>
