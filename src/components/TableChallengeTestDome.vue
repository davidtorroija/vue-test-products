<template>
  <div>
    <!-- Add missing attributes to input, button, tr, and td elements -->
    First name: <input type="text" v-model="userName" />
    Last name: <input type="text" v-model="userLastName" />
    <button :disabled="!userName || !userName" @click="addUser">Add user</button>

    <table>
      <caption>
        Users
      </caption>
      <thead>
        <tr>
          <th>Index</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            {{ index + 1 }}
          </td>

          <td>
            {{ user.firstName }}
          </td>
          <td>
            {{ user.lastName }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Coding',
  data() {
    return {
      users: [{ firstName: 'Pepito', lastName: 'Anderson' }],
      userName: '',
      userLastName: '',
    };
  },
  methods: {
    addUser() {
      this.users.splice(this.users.length, 1,
        { firstName: this.userName, lastName: this.userLastName });
    },
  },
};
</script>
