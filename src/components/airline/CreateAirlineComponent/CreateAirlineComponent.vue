<template>
  <div class="app">
    <div class="col-sm-3">
      <v-card>
        <v-card-title>
          Create airline
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
        <v-form ref="form">
          <v-text-field outlined rounded v-model="airline.airlineName" label="Airline name"></v-text-field>

          <v-text-field
            outlined
            rounded
            class="icao-input"
            v-model="airline.airlineIcao"
            label="Airlane icao"
          ></v-text-field>

          <v-text-field
            outlined
            rounded
            class="icao-input"
            v-model="airline.airlineBaseIcao"
            label="Airline base icao"
          ></v-text-field>

          <v-select
            outlined
            rounded
            :items="prices"
            label="Starting balance"
            v-model="airline.startingBalance"
          ></v-select>

          <v-btn rounded block color="primary" @click="createAirline">Create airline</v-btn>
        </v-form>
        </v-card-text>
      </v-card>
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