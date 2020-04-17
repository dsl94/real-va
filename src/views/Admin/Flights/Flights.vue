<template>
  <div class="home">
    <div class="holder">
      <FlightsComponent all="true"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FlightsComponent from "@/components/FlightsComponent";

export default {
  name: "Flights",
  components: {
    FlightsComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
