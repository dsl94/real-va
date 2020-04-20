<template>
  <div class="app">
    <h2>Availible for buying</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Icao</th>
            <th class="text-left">Max passengers</th>
            <th class="text-left">Price</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aircraft, index) in aircrafts" :key="index">
            <td>{{ aircraft.name }}</td>
            <td>{{ aircraft.icao }}</td>
            <td>{{ aircraft.maxPassengers }}</td>
            <td>$ {{ aircraft.price }}</td>
            <td>
              <v-icon @click.native.stop="dialog = true; aircraftBuy.icao=aircraft.icao; aircraftBuy.passengers=aircraft.maxPassengers" color="success">attach_money</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Buy aircraft</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Type" required v-model="aircraftBuy.icao"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Registration" required v-model="aircraftBuy.registration"></v-text-field>
              </v-col>
               <v-col cols="12" sm="12">
                <v-text-field label="Pessanger number" required v-model="aircraftBuy.passengers"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="buyAircraft">Buy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "BuyAircraftComponent",
  data() {
    return {
      aircraftBuy: {
          icao: "",
          registration: "",
          passengers: 0
      },
      aircrafts: [],
      dialog: false,
      icao: ""
    };
  },
  methods: {
    buyAircraft() {
      axios({
        url: Constants.API_BASE + "aircraft/buy",
        data: this.aircraftBuy,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.$store.dispatch("setSnackbar", {
              showing: true,
              text: "Aircaft bought",
              color: "success"
            });
          this.$router.push("airline-details");
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadAircrafts() {
      axios.get(Constants.API_BASE + "aircraft/for-buying").then(resp => {
        this.aircrafts = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadAircrafts();
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