<template>
  <div class="home">
    <div class="holder">
      <FleetComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FleetComponent from "@/components/airline/FleetComponent";

export default {
  name: "CreateAirline",
  components: {
    FleetComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
