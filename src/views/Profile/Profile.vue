<template>
  <div class="home">
    <ProfileComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComponent from "@/components/ProfileComponent";

export default {
  name: "Profile",
  components: {
    ProfileComponent
  }
};
</script>
