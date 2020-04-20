<template>
  <v-app>
    <v-content>
      <v-snackbar v-model="snackbar.showing" :color="snackbar.color" top :timeout="5000">
        {{snackbar.text}}
        <v-btn text @click="snackbar.showing = false">Close</v-btn>
      </v-snackbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    ...mapState(["snackbar"])
  },
  methods: {
    isAuth() {
      let isAuth =
        this.$route.name == "login" || this.$route.name == "register";
      return isAuth;
    }
  },

  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>
