<template>
  <div class="app">
    <h2>Join airline</h2>
    <div class="col-sm-3">
      <v-form ref="form">
        <v-select outlined item-text="name" item-value="icao" :items="airlines" label="Select airline" v-model="airline"></v-select>

        <v-btn color="primary" @click="joinAirline">Join airline</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import Constants from "@/constants";
import axios from "axios";

export default {
  name: "JoinAirlineComponent",
  data() {
    return {
      airline: "",
      airlines: []
    };
  },
  methods: {
    joinAirline() {
      axios({
        url: Constants.API_BASE + "airline/user/join/" + this.airline,
        data: this.airline,
        method: "POST"
      })
        .then(resp => {
          resp;
          this.$store.dispatch("joinedAirline", this.airline)
          this.$router.push("profile");
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadAirlines() {
      axios.get(Constants.API_BASE + "airline/user/all").then(resp => {
        this.airlines = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadAirlines();
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