<template>
  <div class="home">
    <div class="holder">
      <CreateAirlineComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateAirlineComponent from "@/components/airline/CreateAirlineComponent";

export default {
  name: "CreateAirline",
  components: {
    CreateAirlineComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
