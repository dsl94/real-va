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
      <v-data-table :headers="headers" :items="planes" :items-per-page="15" :search="search" @click:row="handleConvertClick"></v-data-table>
    </v-card>

     <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Create cargo variant</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                
              <v-col cols="12" sm="12">
                  <v-text-field
                    outlined
                    rounded
                    v-model="aircraft.maxCargo"
                    label="Max cargo"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined @click="convert">Save</v-btn>
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
        { text: "Max passengers", value: "maxPassengers" },
        { text: "Is cargo", value: "cargo" },
        { text: "Max cargo", value: "maxCargo" }
      ],
      search: "",
      dialog: false,
      aircraft: {
          id: 0,
          maxCargo: 0
      }
    };
  },
  methods: {
    loadPlanes() {
      axios.get(Constants.API_BASE + "admin/aircraft/all").then(resp => {
        this.planes = resp.data;
      });
    },
    handleConvertClick(value) {
        this.aircraft.id = value.id;
        this.dialog = true;
    },
    convert() {
        let url = "admin/aircraft/create";
      axios({
        url: Constants.API_BASE + url,
        data: this.aircraft,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.dialog = false;
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "Aircraft converted",
            color: "success"
          });
          this.loadPlanes();
        })
        .catch(err =>
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: err.response.data.message,
            color: "error"
          })
        );
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