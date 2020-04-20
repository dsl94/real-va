<template>
  <div class="app">
    <v-card>
      <v-card-title>Pilot profile</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field outlined v-model="user.fullName" label="Full name" readonly></v-text-field>

          <v-text-field outlined v-model="user.email" label="E-mail" readonly></v-text-field>

          <v-text-field outlined v-model="user.userName" label="Username" readonly></v-text-field>

          <v-text-field outlined v-model="user.secretCode" label="Secret code" readonly></v-text-field>

          <v-text-field outlined v-model="user.airline" label="Airline" readonly></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
    <br> 
    <FlightsComponent :username="$store.getters.getUsername" all="false" />
  </div>
</template>

<script>
import Constants from "../../constants";
import axios from "axios";
import FlightsComponent from "../FlightsComponent";

export default {
  name: "ProfileComponent",
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        userName: "",
        secretCode: "",
        airline: ""
      }
    };
  },
  methods: {
    load() {
      axios.get(Constants.API_BASE + "user/profile").then(resp => {
        this.user = resp.data;
      });
    }
  },
  beforeMount() {
    this.load();
  },
  components: {
    FlightsComponent
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>