<template>
  <div>
    <h2>Routes</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Flight number</th>
            <th class="text-left">Departure</th>
            <th class="text-left">Arrival</th>
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(route, index) in routes" :key="index">
            <td>{{ route.flightNumber }}</td>
            <td>{{ route.departure }}</td>
            <td>{{ route.arrival }}</td>
            <td>{{ route.ticketPrice }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "RoutesComponent",
  data() {
    return {
      routes: []
    };
  },
  methods: {
    loadRoutes() {
      let url = "route/user/all";
      axios.get(Constants.API_BASE + url).then(resp => {
        this.routes = resp.data;
      });
    }
  },
  beforeMount() {
    this.loadRoutes();
  }
};
</script>