<template>
  <v-flex id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card-title class="title">
                <h1 class="header">Register</h1>
              </v-card-title>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>
                    <v-flex class="d-flex justify-space-between full-content">
                      <div></div>
                      <div class="btnLogin" @click="redirect">Login</div>
                    </v-flex>
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-flex class="d-flex">
                      <v-text-field
                        class="inputField"
                        label="First name"
                        name="firstname"
                        prepend-icon="person"
                        type="text"
                        v-model="firstname"
                      ></v-text-field>
                      <v-text-field
                        class="inputField"
                        label="Last name"
                        name="lastname"
                        prepend-icon="person"
                        type="text"
                        v-model="lastName"
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="d-flex">
                      <v-text-field
                        class="inputField"
                        label="Username"
                        name="username"
                        prepend-icon="person"
                        type="text"
                        v-model="username"
                      ></v-text-field>
                      <v-text-field
                        class="inputField"
                        label="Email"
                        name="email"
                        prepend-icon="email"
                        type="text"
                        v-model="email"
                      ></v-text-field>
                    </v-flex>
                    <v-flex class="d-flex">
                      <v-text-field
                        class="inputField"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                        v-model="password"
                      ></v-text-field>
                      <v-text-field
                        class="inputField"
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        prepend-icon="lock"
                        type="confirmPassword"
                        v-model="confirmPassword"
                      ></v-text-field>
                    </v-flex>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="submit">Register</v-btn>
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
  name: "RegisterComponent",
  data: () => {
    return {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  },
  methods: {
    submit() {
      if (this.username && this.password) {
        console.log("submit -> true", true);
        return true;
      }
      return false;
    },

    redirect() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.full-content {
  width: 35rem;
}

.inputField {
  padding-right: 1rem;
  width: 13rem;
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

.btnLogin {
  cursor: pointer;
}
</style>