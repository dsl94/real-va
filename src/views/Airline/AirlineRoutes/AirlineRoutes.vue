<template>
  <div class="home">
    <div class="holder">
      <RouteMngComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RouteMngComponent from "@/components/airline/RouteMngComponent";

export default {
  name: "AirlineRoutes",
  components: {
    RouteMngComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
