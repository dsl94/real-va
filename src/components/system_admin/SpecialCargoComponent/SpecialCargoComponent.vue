<template>
  <div class="app">
    <v-btn fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        Special Cargo
        <v-spacer></v-spacer>
        <v-text-field
          outlined
          rounded
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="spc"
        :items-per-page="50"
        :search="search"
        @click:row="handleRowDoubleClick"
      ></v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline">Add special cargo</span>
        </v-card-title>
        <v-card-text>
          <v-container v-if="automatic === false">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="specialCargo.departure"
                  outlined
                  rounded
                  label="Departure"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="specialCargo.arrival"
                  outlined
                  rounded
                  label="Arrival"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="specialCargo.weight"
                  outlined
                  rounded
                  label="Weight"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="specialCargo.multiplication"
                  outlined
                  rounded
                  label="Multiplication"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="specialCargo.description"
                  outlined
                  rounded
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-container v-if="automatic === true">
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="packetNum"
                  outlined
                  rounded
                  label="Number of packets"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-switch v-model="automatic" label="Automatic"></v-switch>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            color="success darken-1"
            rounded
            outlined
            @click="createCargo()"
            >Add special cargo</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogConfirm" max-width="400">
      <v-card>
        <v-card-title>
          <span class="headline">Are you sure</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" rounded outlined @click="dialogConfirm = false"
            >No</v-btn
          >
          <v-btn
            color="danger darken-1"
            rounded
            outlined
            @click="deleteCargo()"
            >Yes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import Constants from "@/constants";
export default {
  name: "SpecialCargoComponent",
  data() {
    return {
      spc: [],
      search: "",
      dialog: false,
      deleteId: 0,
      dialogConfirm: false,
      automatic: false,
      specialCargo: {
        departure: "",
        arrival: "",
        weight: 0,
        multiplication: 2,
        description: "",
      },
      packetNum: 0,
      headers: [
        { text: "Departure", value: "departure" },
        { text: "Arrival", value: "arrival" },
        { text: "Weight", value: "weight" },
        { text: "Description", value: "description" },
        { text: "Multiplication", value: "multiplication" },
      ],
    };
  },
  methods: {
    loadSpc() {
      axios.get(Constants.API_BASE + "admin/spc/all").then((resp) => {
        this.spc = resp.data;
      });
    },
    handleRowDoubleClick(value) {
      this.deleteId = value.id;
      this.dialogConfirm = true;
    },
    deleteCargo() {
      axios.delete(Constants.API_BASE + "admin/spc/" + this.deleteId).then((resp) => {
        resp;
        this.loadSpc();
        this.dialogConfirm = false;
        this.deleteId = 0;
      });
    },
    createCargo() {
      if (this.automatic === true) {
        this.createAutomatic();
      } else {
        this.createManual();
      }
    },
    createManual() {
      let url = "admin/spc";
      axios({
        url: Constants.API_BASE + url,
        data: this.specialCargo,
        method: "POST",
      })
        .then((resp) => {
          resp;
          this.componentKey += 1;
          this.dialog = false;
          this.loadSpc();
          (this.specialCargo = {
            departure: "",
            arrival: "",
            weight: 0,
            multiplication: 2,
            description: "",
          }),
            this.$store.dispatch("setSnackbar", {
              showing: true,
              text: "Special cargo created",
              color: "success",
            });
        })
        .catch((err) =>
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: err.response.data.message,
            color: "error",
          })
        );
    },
    createAutomatic() {},
  },
  beforeMount() {
    this.loadSpc();
  },
};
</script>

<style>
.app {
  padding: 2rem;
}
</style>