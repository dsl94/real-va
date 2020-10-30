<template>
  <div>
    <v-card>
      <v-card-title>Flights</v-card-title>
      <v-data-table :headers="headers" :items="flights" :items-per-page="10">
        <template v-slot:item.fuelSpent="{ item }">
          <td>{{ item.fuelSpent.toFixed(2) }} kg</td>
        </template>
        <template v-slot:item.actions="{ item }">
          <td v-if="all=='true'">{{item.user}}</td>
          <td v-else>
            <v-icon color="red" @click="deleteFlight(item.id)">delete</v-icon>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "../../constants";
export default {
  name: "FlightsComponent",
  data() {
    return {
      flights: [],
      headers: [
        { text: "Departure", value: "departure" },
        { text: "Arrival", value: "arrival" },
        { text: "Departure time", value: "startTime" },
        { text: "Arrival time", value: "endTime" },
        { text: "Length", value: "length" },
        { text: "Aircraft", value: "aircraft" },
        { text: "Fuel spent", value: "fuelSpent" },
        { text: "Fuel cost $", value: "fuelCost" },
        { text: "Earning $", value: "earning" },
        { text: "Profit $", value: "profit" },
        { text: "Info", value: "info" },
        { text: "", value: "actions" }
      ]
    };
  },
  props: ["username", "all"],
  methods: {
    loadFlights() {
      let url = "flight/all/" + this.username;
      if (
        this.username === undefined ||
        this.username === "undefined" ||
        this.username === null ||
        this.username == ""
      ) {
        url = "flight/all";
      }
      axios.get(Constants.API_BASE + url).then(resp => {
        this.flights = resp.data;
      });
    },
    deleteFlight(id) {
      if (confirm("Are you sure you want to delete")) {
        axios.delete(Constants.API_BASE + "flight/" + id).then(resp => {
          resp;
          this.loadFlights();
        });
      }
    }
  },
  beforeMount() {
    this.loadFlights();
  }
};
</script>