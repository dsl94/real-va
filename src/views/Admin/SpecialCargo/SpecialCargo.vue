<template>
  <div class="home">
    <SpecialCargoComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SpecialCargoComponent from "@/components/system_admin/SpecialCargoComponent";

export default {
  name: "SpecialCargo",
  components: {
    SpecialCargoComponent
  }
};
</script>
