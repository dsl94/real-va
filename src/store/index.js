import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Constants from "../constants";
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, tokenUser) {
      state.status = "success";
      state.token = tokenUser.token;
      state.user = tokenUser.user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    airlineJoined(state, airline) {
      state.user.airlineIcao = airline
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({ url: Constants.API_BASE + "auth", data: user, method: "POST" })
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem("token", token);
            const user = {
              username: resp.data.username,
              roles: resp.data.roles,
              airlineName: resp.data.airlineName,
              airlineIcao: resp.data.airlineIcao
            };
            localStorage.setItem("username", user.username);
            localStorage.setItem("roles", user.roles);
            localStorage.setItem("airlineName", user.airlineName);
            localStorage.setItem("airlineIcao", user.airlineIcao);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", { token, user });
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: Constants.API_BASE + "auth/register",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            console.log(resp);
            window.location = "/login";
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        localStorage.removeItem("airlineName");
        localStorage.removeItem("airlineIcao");
        window.localStorage.clear();
        localStorage.clear();
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    joinedAirline({ commit }, airline) {
      commit("airlineJoined", airline);
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    getRoles: (state) => {
      return state.user.roles;
    },
    getUsername: (state) => {
      return state.user.username;
    },
    getAirlineName: (state) => {
      return state.user.airlineName;
    },
    getAirlineIcao: (state) => {
      return state.user.airlineIcao;
    },
  },
});
