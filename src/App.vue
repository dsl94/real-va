<template>
  <v-content>
    <router-view></router-view>
  </v-content>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {

    isAuth() {
      let isAuth =
        this.$route.name == "login" || this.$route.name == "register";
      return isAuth;
    }
  },

  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
  }
};
</script>
