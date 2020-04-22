<template>
  <div>
    <v-card>
      <v-card-title>
        Fleet
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
      <v-data-table :headers="headers" :items="planes" :items-per-page="10" :search="search">
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "FleetComponent",
  data() {
    return {
      planes: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Location", value: "location" },
        { text: "Registration", value: "registration" },
        { text: "Capacity", value: "capacity" }
      ]
    };
  },
  methods: {
    loadPlanes() {
      let url = "airline/user/fleet";
      axios.get(Constants.API_BASE + url).then(resp => {
        this.planes = resp.data;
      });
    },
  },
  beforeMount() {
    this.loadPlanes();
  }
};
</script>