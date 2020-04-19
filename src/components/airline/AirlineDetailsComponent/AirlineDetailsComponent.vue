<template>
  <div class="app">
    <h3>Airline details</h3>
    <v-form ref="form">
      <v-text-field v-model="airline.name" label="Airline name" readonly></v-text-field>

      <v-text-field v-model="airline.icao" label="Airline icao" readonly></v-text-field>

      <v-text-field v-model="airline.base" label="Airline base" readonly></v-text-field>

      <v-text-field v-model="airline.balance" label="Current balance in $" readonly></v-text-field>
    </v-form>

    <v-row>
      <v-col cols="12" sm="5">
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
      </v-col>
      <v-col cols="12" sm="7">
        <h3>
          Fleet
          <router-link to="buy-aircraft">
            <v-btn small depressed color="success">Buy Aircraft</v-btn>
          </router-link>
        </h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Type</th>
                <th class="text-left">Location</th>
                <th class="text-left">Registration</th>
                <th class="text-left">Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(plane, index) in airline.aircrafts" :key="index">
                <td>{{ plane.name }}</td>
                <td>{{ plane.type }}</td>
                <td>{{ plane.location }}</td>
                <td>{{ plane.registration }}</td>
                <td>{{ plane.capacity }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>