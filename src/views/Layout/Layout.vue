<template>
  <div class="dashboard">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard";

export default {
  name: "Layout",
  components: {
    Dashboard
  }
};
</script>
