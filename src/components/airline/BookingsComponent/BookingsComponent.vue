<template>
  <div class="app">
    <FlightsComponent all="true"></FlightsComponent> <br>
    <RoutesComponent booking="true" :key="componentKey" @flightBooked="flightBooked" />
  </div>
</template>

<script>
import RoutesComponent from "../RoutesComponent";
import FlightsComponent from "@/components/FlightsComponent";
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "BookingsComponent",
  components: {
    RoutesComponent,
    FlightsComponent
  },
  data() {
    return {
      //   route: {
      //     departure: "",
      //     arrival: "",
      //     flightNumber: "",
      //     returnFlightNumber: "",
      //     returnFlight: false
      //   },
      //   dialog: false,
      componentKey: 0
    };
  },
  methods: {
    flightBooked() {
      this.componentKey += 1;
      this.$store.dispatch("setCanBook", 1);
      this.$router.push("profile");
    },
    getBooked() {
      axios.get(Constants.API_BASE + "booking/user/all").then(resp => {
        if (resp.data.length < 1) {
          this.componentKey += 1;
          this.$store.dispatch("setCanBook", 0);
        }
      });
    }
  },
  beforeMount() {
    this.getBooked();
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>