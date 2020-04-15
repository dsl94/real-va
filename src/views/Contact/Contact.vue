<template>
  <div class="contact">
    <ContactComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from "@/components/ContactComponent";

export default {
  name: "Contact",
  components: {
    ContactComponent
  }
};
</script>
