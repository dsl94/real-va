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
  props: ["username"],
  methods: {
    loadFlights() {
      axios
        .get(Constants.API_BASE + "flight/all/" + this.username)
        .then(resp => {
          this.flights = resp.data;
        });
    }
  },
  beforeMount() {
      this.loadFlights();
  }
};
</script>