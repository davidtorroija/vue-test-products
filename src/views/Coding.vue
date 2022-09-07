<template>
  <div class="home">
    <TableChallengeTestDome/>
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableChallengeTestDome from '@/components/TableChallengeTestDome.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Coding',
  components: {
    TableChallengeTestDome,
    TodoList,
  },
};
</script>
