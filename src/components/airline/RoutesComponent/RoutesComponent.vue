<template>
  <div>
    <v-card>
      <v-card-title>
        Routes
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
      <v-data-table :headers="headers" :items="routes" :items-per-page="10" :search="search">
        <template v-slot:item.book="{ item }" v-if="booking && $store.getters.canBook">
          <v-icon
            @click.native.stop="dialog = true; bookingReq.routeId=item.id;"
            color="success"
          >airplanemode_active</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Book flight</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-select
                  outlined
                  rounded
                  item-text="name"
                  item-value="id"
                  :items="planes"
                  label="Select airplane"
                  v-model="bookingReq.aircraftId"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false">Close</v-btn>
          <v-btn color="success darken-1" rounded outlined @click="bookFlight">Book flight</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "RoutesComponent",
  props: ["booking"],
  data() {
    return {
      bookingReq: {
        routeId: 0,
        aircraftId: 0
      },
      dialog: false,
      routes: [],
      search: "",
      planes: [],
      headers: [
        { text: "Flight number", value: "flightNumber" },
        { text: "Departure", value: "departure" },
        { text: "Arrival", value: "arrival" },
        { text: "Price", value: "ticketPrice" },
        { text: "Book", value: "book" }
      ]
    };
  },
  methods: {
    loadRoutes() {
      let url = "route/user/all";
      if (this.booking) {
        url = "route/user/all/location";
      }
      axios.get(Constants.API_BASE + url).then(resp => {
        this.routes = resp.data;
      });
    },
    loadPlanes() {
      let url = "booking/user/booking/aircrafts";
      axios.get(Constants.API_BASE + url).then(resp => {
        this.planes = resp.data;
      });
    },
    bookFlight() {
      let url = "booking/user/book";
      axios({
        url: Constants.API_BASE + url,
        data: this.bookingReq,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.dialog = false;
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "Flight booked",
            color: "success"
          });
          this.$emit("flightBooked");
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
    this.loadRoutes();
    this.loadPlanes();
  }
};
</script>