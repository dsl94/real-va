<template>
  <v-flex id="app">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-form @submit.prevent="register">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Register</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field outlined label="Username" name="login" type="text" v-model="username" />

                    <v-text-field outlined label="Email" name="email" type="text" v-model="email" />

                    <v-text-field outlined label="Full name" name="fullName" type="text" v-model="fullName" />

                    <v-text-field
                    outlined
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      v-model="password"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit" color="primary">Register</v-btn>
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
  name: "RegisterComponent",
  data: () => {
    return {
      username: "",
      email: "",
      fullName: "",
      password: ""
    };
  },
  methods: {
    register() {
      let data = {
        username: this.username,
        fullName: this.fullName,
        email: this.email,
        password: this.password
      };

      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => this.$store.dispatch("setSnackbar", {showing: true, text: err.response.data.message, color: "error"}));
    }
  }
};
</script>