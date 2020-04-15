<template>
  <div class="register">
    <RegisterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterComponent from "@/components/Register";

export default {
  name: "Register",
  components: {
    RegisterComponent
  }
};
</script>
