<template>
  <div class="app">
    <v-card>
      <v-card-title>Airline details</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field outlined rounded v-model="airline.name" label="Airline name" readonly></v-text-field>

          <v-text-field outlined rounded v-model="airline.icao" label="Airline icao" readonly></v-text-field>

          <v-text-field outlined rounded v-model="airline.base" label="Airline base" readonly></v-text-field>

          <v-text-field
            outlined
            rounded
            v-model="airline.balance"
            label="Current balance in $"
            readonly
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col cols="12" sm="5">
        <v-row>
          <v-card>
            <v-card-title>Pilots</v-card-title>
            <v-data-table :headers="headersPilots" :items="airline.pilots" :items-per-page="10"></v-data-table>
          </v-card>
        </v-row> <br>
        <v-row>
          <v-card>
            <v-card-title>Bookings</v-card-title>
            <v-data-table :headers="headersBookings" :items="airline.bookings" :items-per-page="10" @click:row="handleRowClickBookings"></v-data-table>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12" sm="7">
        <v-card>
          <v-card-title>Airplanes</v-card-title>
          <v-data-table :headers="headersPlanes" :items="airline.aircrafts" :items-per-page="10" @click:row="handleRowClick"></v-data-table>
        </v-card>
        <router-link to="buy-aircraft">
          <v-btn fixed dark fab bottom right color="success">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          <span class="headline">Change location</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                    outlined
                    rounded
                    v-model="location.icao"
                    label="Location"
                     class="icao-input"
                  ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined @click="changeLocation">Change location</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogConfirm" max-width="400">
      <v-card>
        <v-card-title>
          <span class="headline">Cancel booking</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialogConfirm = false">Close</v-btn>
          <v-btn color="warning darken-1" rounded outlined @click="cancelBooking">Cancel booking</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        aircrafts: [],
        pilots: [],
        bookings: []
      },
      headersPilots: [
        { text: "Full name", value: "fullName" },
        { text: "Username", value: "userName" },
        { text: "Email", value: "email" }
      ],
       headersBookings: [
        { text: "Pilot", value: "user" },
        { text: "Departure", value: "departure" },
        { text: "Arrival", value: "arrival" },
        { text: "Aircraft", value: "aircraft" }
      ],
      headersPlanes: [
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Location", value: "location" },
        { text: "Registration", value: "registration" },
        { text: "Capacity", value: "capacity" }
      ],
      location: {
        id: 0,
        icao: ""
      },
      dialog: false,
      dialogConfirm: false,
      username: ""
    };
  },
  methods: {
    load() {
      axios.get(Constants.API_BASE + "airline/admin/details").then(resp => {
        this.airline = resp.data;
      });
    },
    changeLocation() {
      axios
        .put(
          Constants.API_BASE +
            "airline/admin/details/plane/" +
            this.location.id +
            "/" +
            this.location.icao
        )
        .then(resp => {
          resp;
          this.load();
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "Location changed",
            color: "success"
          });
          this.dialog=false;
        })
        .catch(err =>
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: err.response.data.message,
            color: "error"
          })
        );
    },
    cancelBooking() {
      axios
        .delete(
          Constants.API_BASE +
            "booking/user/booking/cancel/" +
            this.username
        )
        .then(resp => {
          resp;
          this.load();
          this.dialogConfirm = false;
          this.username = "";
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "Booking canceled",
            color: "warning"
          });
          this.dialog=false;
        })
        .catch(err =>
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: err.response.data.message,
            color: "error"
          })
        );
    },
    handleRowClick(value) {
      this.location.id = value.id;
      this.dialog=true;
    },
    handleRowClickBookings(value) {
      this.username = value.user;
      this.dialogConfirm = true;
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