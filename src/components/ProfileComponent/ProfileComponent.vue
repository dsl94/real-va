<template>
  <div class="app">
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>Pilot profile</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col colls="12" md="4">
                  <v-text-field outlined rounded v-model="user.fullName" label="Full name" readonly></v-text-field>
                </v-col>

                <v-col colls="12" md="4">
                  <v-text-field outlined rounded v-model="user.email" label="E-mail" readonly></v-text-field>
                </v-col>

                <v-col colls="12" md="4">
                  <v-text-field outlined rounded v-model="user.userName" label="Username" readonly></v-text-field>
                </v-col>

                <v-col colls="12" md="4">
                  <v-text-field
                    outlined
                    rounded
                    v-model="user.secretCode"
                    label="Secret code"
                    readonly
                  ></v-text-field>
                </v-col>

                <v-col colls="12" md="4">
                  <v-text-field outlined rounded v-model="user.airline" label="Airline" readonly></v-text-field>
                </v-col>

                <v-col colls="12" md="4">
                  <v-text-field
                    outlined
                    rounded
                    v-model="user.location"
                    label="Location, to change it enter new icao code and press Enter"
                     @keyup.enter.native="changeLocation"
                     class="icao-input"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>Pilot booking</v-card-title>
          <v-card-text>
            <v-row v-if="!$store.getters.canBook">
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  rounded
                  v-model="booking.departure"
                  label="Departure"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined rounded v-model="booking.arrival" label="Arrival" readonly></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  rounded
                  v-model="booking.flightNumber"
                  label="Flight number"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined rounded v-model="booking.aircraft" label="Aircraft" readonly></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  rounded
                  v-model="booking.passengers"
                  label="Number of passengers"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  rounded
                  v-model="booking.cargo"
                  label="Cargo in kilograms"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                  outlined
                  rounded
                  v-model="booking.specialCargo"
                  label="Special cargo"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-btn rounded block color="warning" @click="cancelBooking">Cancel booking</v-btn>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="12" md="4"></v-col>
              <v-col cols="12" md="4">No booked flight, go to booking and book</v-col>
              <v-col cols="12" md="4"></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <FlightsComponent :username="$store.getters.getUsername" all="false" />
  </div>
</template>

<script>
import Constants from "../../constants";
import axios from "axios";
import FlightsComponent from "../FlightsComponent";

export default {
  name: "ProfileComponent",
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        userName: "",
        secretCode: "",
        airline: "",
        location: ""
      },
      booking: {
        departure: "",
        arrival: "",
        flightNumber: "",
        passengers: 0,
        cargo: 0,
        user: "",
        aircraft: "",
        specialCargo: ""
      }
    };
  },
  methods: {
    load() {
      this.loadProfile();
      axios.get(Constants.API_BASE + "booking/user/all").then(resp => {
        this.booking = resp.data;
      });
    },
    loadProfile() {
      axios.get(Constants.API_BASE + "user/profile").then(resp => {
        this.user = resp.data;
      });
    },
    cancelBooking() {
      axios
        .delete(Constants.API_BASE + "booking/user/booking/cancel")
        .then(resp => {
          resp;
          this.$store.dispatch("setCanBook", 0);
          this.load();
        });
    },
    changeLocation() {
      axios
        .put(Constants.API_BASE + "user/profile/" + this.user.location)
        .then(resp => {
          resp;
          this.loadProfile();
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "Location changed",
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
  },
  beforeMount() {
    this.load();
  },
  components: {
    FlightsComponent
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