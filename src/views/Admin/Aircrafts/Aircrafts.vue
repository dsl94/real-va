<template>
  <div class="home">
    <AircraftComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import AircraftComponent from "@/components/system_admin/AircraftComponent";

export default {
  name: "Users",
  components: {
    AircraftComponent
  }
};
</script>
