<template>
  <div class="app">
    <v-card>
      <v-card-title>
        Aircrafts
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
      <v-data-table :headers="headers" :items="planes" :items-per-page="15" :search="search"></v-data-table>
    </v-card>
    <v-btn fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

     <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Aircraft</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                    outlined
                    rounded
                    v-model="aircraft.name"
                    label="Name"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    rounded
                    v-model="aircraft.icao"
                    label="Icao"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    rounded
                    v-model="aircraft.maxPassengers"
                    label="Max passengers"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    rounded
                    v-model="aircraft.price"
                    label="Price"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "AircraftComponent",
  data() {
    return {
      planes: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Icao", value: "icao" },
        { text: "price", value: "price" },
        { text: "Max passengers", value: "maxPassengers" }
      ],
      search: "",
      dialog: false,
      aircraft: {
          name: "",
          icao: "",
          price: 0,
          maxPassengers: 0
      }
    };
  },
  methods: {
    loadPlanes() {
      axios.get(Constants.API_BASE + "admin/aircraft/all").then(resp => {
        this.planes = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadPlanes();
  }
};
</script>

<style>
.app {
  padding: 2rem;
}
</style>