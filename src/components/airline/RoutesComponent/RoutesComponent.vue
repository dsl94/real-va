<template>
  <div>
    <v-card>
      <v-card-title>
        Routes
        <v-spacer></v-spacer>
        <v-text-field
          outlined
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="routes" :items-per-page="10" :search="search"></v-data-table>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "RoutesComponent",
  data() {
    return {
      routes: [],
      search: "",
      headers: [
        { text: "Flight number", value: "flightNumber" },
        { text: "Departure", value: "departure" },
        { text: "Arrival", value: "arrival" },
        { text: "Price", value: "ticketPrice" }
      ]
    };
  },
  methods: {
    loadRoutes() {
      let url = "route/user/all";
      axios.get(Constants.API_BASE + url).then(resp => {
        this.routes = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadRoutes();
  }
};
</script>