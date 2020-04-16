<template>
  <div class="app">
    <h2>Users</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Full name</th>
            <th class="text-left">Username</th>
            <th class="text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.fullName }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "UsersComponent",
  data() {
    return {
      users: []
    };
  },
  methods: {
    loadUsers() {
      axios.get(Constants.API_BASE + "admin/users/").then(resp => {
        this.users = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadUsers();
  }
};
</script>

<style>
.app {
  padding: 2rem;
}
</style>