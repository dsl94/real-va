<template>
  <div class="home">
    <UsersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersComponent from "@/components/system_admin/UsersComponent";

export default {
  name: "Users",
  components: {
    UsersComponent
  }
};
</script>
