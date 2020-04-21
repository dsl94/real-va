<template>
  <div class="app">
    <RoutesComponent booking="true" :key="componentKey" @flightBooked="flightBooked"/>
  </div>
</template>

<script>
import RoutesComponent from "../RoutesComponent";
// import Constants from "@/constants";
// import axios from "axios";

export default {
  name: "BookingsComponent",
  components: {
    RoutesComponent
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
        this.$router.push("profile");
    }
  }
};
</script>


<style>
.app {
  padding: 2rem;
}
</style>