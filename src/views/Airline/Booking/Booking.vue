<template>
  <div class="home">
    <div class="holder">
      <BookingsComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookingsComponent from "@/components/airline/BookingsComponent";

export default {
  name: "AirlineRoutes",
  components: {
    BookingsComponent
  }
};
</script>

<style scoped>
.holder {
    padding: 10px;
}
</style>
