<template>
  <v-flex id="app">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-form @submit.prevent="login" class="login">
                <v-card class="elevation-12">
                  <v-toolbar color="info" dark flat>
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field outlined rounded label="Login" name="login" type="text" v-model="username" />

                    <v-text-field
                    outlined
                    rounded
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      v-model="password"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-spacer /> -->
                    <v-btn type="submit" rounded block  large color="success">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    redirect() {
    let roles = this.$store.getters.getRoles;
    if (roles == "ROLE_SYSTEM_ADMIN") {
      this.$router.push("/users");
    } else if (roles == "ROLE_USER") {
      this.$router.push("/profile");
    } else {
      this.$router.push("/airline-details");
    }
  },
    login() {
      let username = this.username;
      let password = this.password;

      this.$store
        .dispatch("login", { username, password })
        .then(() => this.redirect())
        .catch(err => this.sendError(err));
    },
    sendError(err) {
      err;
      this.$store.dispatch("setSnackbar", {showing: true, text: "Bad credentials", color: "error"})
    }
  }
};
</script>