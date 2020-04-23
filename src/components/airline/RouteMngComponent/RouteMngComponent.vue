<template>
  <div class="app">
    <v-btn fixed dark fab bottom right color="success" @click="dialog=true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <RoutesComponent :key="componentKey" />

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Add route</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="icao-input" outlined rounded label="Departure" required v-model="route.departure"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="icao-input" outlined rounded label="Arrival" required v-model="route.arrival"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field class="icao-input" outlined rounded label="Flight number" required v-model="route.flightNumber"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-switch v-model="route.returnFlight" label="Rreturn?"></v-switch>
              </v-col>
              <v-col cols="12" sm="5" v-if="route.returnFlight">
                <v-text-field
                class="icao-input"
                  outlined
                  rounded
                  label="Return flight number"
                  required
                  v-model="route.returnFlightNumber"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined @click="createRoute">Add route</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import RoutesComponent from "../RoutesComponent";
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "RouteMngComponent",
  components: {
    RoutesComponent
  },
  data() {
    return {
      route: {
        departure: "",
        arrival: "",
        flightNumber: "",
        returnFlightNumber: "",
        returnFlight: false
      },
      dialog: false,
      componentKey: 0
    };
  },
  methods: {
    createRoute() {
      let url = "route/admin/create";
      axios({
        url: Constants.API_BASE + url,
        data: this.route,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.componentKey += 1;
          this.dialog = false;
          (this.route = {
            departure: "",
            arrival: "",
            flightNumber: "",
            returnFlightNumber: "",
            returnFlight: false
          }),
            this.$store.dispatch("setSnackbar", {
              showing: true,
              text: "Route created",
              color: "success"
            });
        })
        .catch(err =>
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: err.response.data.message,
            color: "error"
          })
        );
    }
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