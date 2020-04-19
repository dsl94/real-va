<template>
  <div>
    <h2>Flights</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Departure</th>
            <th class="text-left">Arrival</th>
            <th class="text-left">Start time</th>
            <th class="text-left">End time</th>
            <th class="text-left">Length</th>
            <th class="text-left">Aircraft</th>
            <th class="text-left">Fuel spent</th>
            <th v-if="all=='true'" class="text-left">User</th>
            <th v-else class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(flight, index) in flights" :key="index">
            <td>{{ flight.departure }}</td>
            <td>{{ flight.arrival }}</td>
            <td>{{ flight.startTime }}</td>
            <td>{{ flight.endTime }}</td>
            <td>{{ flight.length }}</td>
            <td>{{ flight.aircraft }}</td>
            <td>{{ flight.fuelSpent.toFixed(2) }} kg</td>
            <td v-if="all=='true'">{{flight.user}}</td>
            <td v-else><v-icon color="red" @click="deleteFlight(flight.id)">delete</v-icon></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "../../constants";
export default {
  name: "FlightsComponent",
  data() {
    return {
      flights: []
    };
  },
  props: ["username", "all"],
  methods: {
    loadFlights() {
      let url = "flight/all/" + this.username;
      if (this.username === undefined || this.username === 'undefined' || this.username === null || this.username == '') {
        url = "flight/all";
      }
      axios
        .get(Constants.API_BASE + url)
        .then(resp => {
          this.flights = resp.data;
        });
    },
    deleteFlight(id) {
      if (confirm("Are you sure you want to delete")) {
      axios
        .delete(Constants.API_BASE + "flight/" + id)
        .then(resp => {
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