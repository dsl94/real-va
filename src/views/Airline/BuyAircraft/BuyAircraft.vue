<template>
  <div class="home">
    <div class="holder">
      <BuyAircraftComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BuyAircraftComponent from "@/components/airline/BuyAircraftComponent";

export default {
  name: "CreateAirline",
  components: {
    BuyAircraftComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
