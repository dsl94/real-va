<template>
  <div class="app">
    <v-card>
      <v-card-title>Users</v-card-title>
      <v-data-table :headers="headers" :items="users" :items-per-page="10"></v-data-table>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "UsersComponent",
  data() {
    return {
      users: [],
      headers: [
        { text: "Full name", value: "fullName" },
        { text: "Username", value: "userName" },
        { text: "Email", value: "email" }
      ]
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