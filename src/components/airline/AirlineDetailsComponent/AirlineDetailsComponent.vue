<template>
  <div class="app">
    <h3>Airline details</h3>
    <v-form ref="form">
      <v-text-field v-model="airline.name" label="Airline name" readonly></v-text-field>

      <v-text-field v-model="airline.icao" label="Airline icao" readonly></v-text-field>

      <v-text-field v-model="airline.base" label="Airline base" readonly></v-text-field>

      <v-text-field v-model="airline.balance" label="Current balance in $" readonly></v-text-field>
    </v-form>

    <h3>Pilots</h3>
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
          <tr v-for="(pilot, index) in airline.pilots" :key="index">
            <td>{{ pilot.fullName }}</td>
            <td>{{ pilot.userName }}</td>
            <td>{{ pilot.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
        planes: [],
        pilots: []
      }
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
  },
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>