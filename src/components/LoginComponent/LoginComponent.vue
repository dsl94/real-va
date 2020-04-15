<template>
  <v-flex id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card-title class="title">
                <h1 class="header">Login</h1>
              </v-card-title>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>
                    <v-flex class="d-flex justify-space-between full-content">
                      <div></div>
                      <div class="btnRegister" @click="redirect">Register</div>
                    </v-flex>
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Username"
                      name="username"
                      prepend-icon="person"
                      type="text"
                      v-model="username"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="submit">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </v-flex>
</template>

<script>
export default {
  name: "LoginComponent",
  data: () => {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    submit() {
      if (this.username && this.password) {
        localStorage.setItem("authenticated", "true");
        this.$router.push("home");
        return true;
      }
      return false;
    },

    redirect() {
      this.$router.push("/register");
    }
  }
};
</script>

<style>
.full-content {
  width: 35rem;
}

.title {
  padding-left: 0 !important ;
  padding-bottom: 1rem !important;
}

.header {
  color: #1976d2;
  font-size: 5rem;
  height: 3rem;
}

.btnRegister {
  cursor: pointer;
}
</style>