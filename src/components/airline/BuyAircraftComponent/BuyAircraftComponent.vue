<template>
  <div class="app">
    <v-card>
      <v-card-title>
        Availible for buying
        <v-spacer></v-spacer>
        <v-text-field
        outlined
        rounded
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="aircrafts" :items-per-page="10" :search="search">
        <template v-slot:item.actions="{ item }">
          <v-icon
            @click.native.stop="dialog = true; handleBuyClick(item)"
            color="success"
          >attach_money</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Buy aircraft</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field outlined rounded label="Type" required v-model="aircraftBuy.icao"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="icao-input" outlined rounded label="Registration" required v-model="aircraftBuy.registration"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field outlined rounded label="Pessanger number" required v-model="aircraftBuy.passengers"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined @click="buyAircraft">Buy</v-btn>
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
        passengers: 0,
        cargo: false
      },
      aircrafts: [],
      dialog: false,
      icao: "",
      headers: [
        { text: "Name", value: "name" },
        { text: "ICAO", value: "icao" },
        { text: "Max passengers", value: "maxPassengers" },
        { text: "Price $", value: "price" },
        { text: "Cargo", value: "cargo" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      search: ''
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
    },
    handleBuyClick(item) {
        this.aircraftBuy.icao=item.icao;
        this.aircraftBuy.passengers=item.maxPassengers;
        this.aircraftBuy.cargo=item.cargo;
        console.log(item.cargo)
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