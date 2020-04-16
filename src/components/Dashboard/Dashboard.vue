<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <router-link class="link" to="profile" v-if="$store.getters.getRoles == 'ROLE_USER'">
            <v-list-item class="dashboardBtn">
              <v-list-item-action>
                <v-icon>perm_identity</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link
            class="link"
            to="users"
            v-if="$store.getters.getRoles == 'ROLE_SYSTEM_ADMIN'"
          >
            <v-list-item class="dashboardBtn">
              <v-list-item-action>
                <v-icon>perm_identity</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <!-- <router-link class="link" to="contact">
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
          </router-link>-->
        </v-list>
        <div class="metar">
          <v-text-field
            label="ICAO"
            name="login"
            type="text"
            v-model="icao"
            @keyup.enter.native="getMetar"
          >
            <template v-slot:append>
              <v-btn tile color="primary" class="ma-0" @click="getMetar">Get metar</v-btn>
            </template>
          </v-text-field>
          <span class="font-weight-bold caption">{{this.metar.raw}}</span>
        </div>
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
import axios from "axios";
export default {
  name: "Dashboard",
  data: () => {
    return {
      drawer: null,
      icao: "",
      metar: ""
    };
  },
  methods: {
    getMetar() {
      let aut = axios.defaults.headers.common["Authorization"];
      delete axios.defaults.headers.common["Authorization"];
      axios
        .get(
          "https://avwx.rest/api/metar/" +
            this.icao +
            "?token=AduMGyDf-aOdLLthklnQ-WGWCwE8RLfaxGRZBBOX3hI",
          { Headers: { Authorization: null } }
        )
        .then(resp => {
          this.metar = resp.data;
        });
      axios.defaults.headers.common["Authorization"] = aut;
    },
    checkLogin() {
      if (this.$store.getters.getUsername === undefined) {
        this.$router.push("/login");
      }
    },
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  beforeMount() {
    this.checkLogin();
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

.metar {
  padding: 5px;
}
</style>