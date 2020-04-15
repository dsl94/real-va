<template>
  <v-flex id="app">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-form @submit.prevent="login" class="login">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field label="Login" name="login" type="text" v-model="username" />

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      v-model="password"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit" color="primary">Login</v-btn>
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
    if (roles == "ROLE_ADMIN") {
      this.$router.push("/admin");
    } else {
      this.$router.push("/profile");
    }
  },
    login() {
      let username = this.username;
      let password = this.password;

      this.$store
        .dispatch("login", { username, password })
        .then(() => this.redirect())
        .catch(err => console.log(err));
    }
  }
};
</script>