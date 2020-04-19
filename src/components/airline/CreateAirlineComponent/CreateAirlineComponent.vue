<template>
  <div class="app">
    <h2>Create airline</h2>
    <div class="col-sm-3">
      <v-form ref="form">
        <v-text-field v-model="airline.airlineName" label="Airline name"></v-text-field>

        <v-text-field class="icao-input" v-model="airline.airlineIcao" label="Airlane icao"></v-text-field>

        <v-text-field
          class="icao-input"
          v-model="airline.airlineBaseIcao"
          label="Airline base icao"
        ></v-text-field>

        <v-select :items="prices" label="Starting balance" v-model="airline.startingBalance"></v-select>

        <v-btn color="primary" @click="createAirline">Create airline</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "CreateAirlineComponent",
  data() {
    return {
      airline: {
        airlineName: "",
        airlineIcao: "",
        airlineBaseIcao: "",
        startingBalance: ""
      },
      prices: [100000000, 500000000, 1000000000, 10000000000]
    };
  },
  methods: {
    createAirline() {
      axios({
        url: Constants.API_BASE + "airline/user/create",
        data: this.airline,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.$router.push("profile");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
.icao-input input {
  text-transform: uppercase;
}
</style>