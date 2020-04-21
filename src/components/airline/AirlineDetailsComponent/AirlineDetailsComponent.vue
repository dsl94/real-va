<template>
  <div class="app">
    <v-card>
      <v-card-title>Airline details</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field outlined rounded v-model="airline.name" label="Airline name" readonly></v-text-field>

          <v-text-field outlined rounded v-model="airline.icao" label="Airline icao" readonly></v-text-field>

          <v-text-field outlined rounded v-model="airline.base" label="Airline base" readonly></v-text-field>

          <v-text-field outlined rounded v-model="airline.balance" label="Current balance in $" readonly></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card>
          <v-card-title>Pilots</v-card-title>
          <v-data-table :headers="headersPilots" :items="airline.pilots" :items-per-page="10"></v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <v-card>
          <v-card-title>Airplanes</v-card-title>
          <v-data-table :headers="headersPlanes" :items="airline.aircrafts" :items-per-page="10"></v-data-table>
        </v-card>
        <router-link to="buy-aircraft">
          <v-btn fixed dark fab bottom right color="success">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "AirlineDetailsComponent",
  data() {
    return {
      airline: {
        name: "",
        icao: "",
        base: "",
        balance: 0,
        aircrafts: [],
        pilots: []
      },
      headersPilots: [
        { text: "Full name", value: "fullName" },
        { text: "Username", value: "userName" },
        { text: "Email", value: "email" }
      ],
      headersPlanes: [
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Location", value: "location" },
        { text: "Registration", value: "registration" },
        { text: "Capacity", value: "capacity" }
      ]
    };
  },
  methods: {
    load() {
      axios.get(Constants.API_BASE + "airline/admin/details").then(resp => {
        this.airline = resp.data;
      });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>