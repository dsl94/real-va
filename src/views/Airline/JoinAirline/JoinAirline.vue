<template>
  <div class="home">
    <div class="holder">
      <JoinAirlineComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JoinAirlineComponent from "@/components/airline/JoinAirlineComponent";

export default {
  name: "JoinAirline",
  components: {
    JoinAirlineComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
