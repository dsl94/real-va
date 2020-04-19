<template>
  <div class="home">
    <div class="holder">
      <AirlineDetailsComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AirlineDetailsComponent from "@/components/airline/AirlineDetailsComponent";

export default {
  name: "AirlineDetails",
  components: {
    AirlineDetailsComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
