<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <router-link class="link" to="home">
            <v-list-item class="dashboardBtn">
              <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link class="link" to="contact">
            <v-list-item class="dashboardBtn">
              <v-list-item-action>
                <v-icon>contact_mail</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link class="link" to="about">
            <v-list-item class="dashboardBtn">
              <v-list-item-action>
                <v-icon>chat_bubble</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Real VA</v-toolbar-title>

        <v-spacer></v-spacer>Logout
        <v-btn icon @click="logout">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>

      <router-view></router-view>

      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2020</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => {
    return {
      drawer: null
    };
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  }
};
</script>

<style>
.dashboardBtn {
  cursor: pointer;
  border-bottom: 0.1rem solid #3f51b526;
}
.dashboardBtn:hover {
  background: #a2a2a230;
}
.dashboardBtn:active {
  background: #a2a2a230;
}
.link {
  color: black !important;
  text-decoration: none;
  display: flex;
}
</style>