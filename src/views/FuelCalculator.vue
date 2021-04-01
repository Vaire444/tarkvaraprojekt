<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title class="lime darken-2"
      ><h3>Kütusekulu kalkulaator</h3></v-card-title
    >
    <hr />

    <v-card-title class="lime lighten-5"><b>Lähteandmed</b></v-card-title>
    <v-container fluid>
      <!-- <v-row>
        <v-col>
          <p>
            Sa arvutad:
            <select v-model="selected" @change="calculateValues">
              <option>Teekonna pikkust (km)</option>
              <option>Keskmist kütusekulu (l/100km)</option>
              <option>Kütuse kogust (l)</option>
            </select>
          </p>
        </v-col>
      </v-row> -->

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-on:input="
              f2();
              f3();
            "
            v-on:change="
              f1();
              f3();
            "
            :min="0"
            type="number"
            v-model.number="dis"
            label="Teekonna pikkus (km)"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-on:input="
              f1();
              f3();
            "
            v-on:change="
              f1();
              f3();
            "
            :min="0"
            :max="100"
            type="number"
            v-model.number="avg"
            label="Keskmine kütusekulu (l/100km)"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-on:input="
              f1();
              f2();
              f4();
            "
            v-on:change="
              f1();
              f2();
              f4();
            "
            :min="0"
            type="number"
            v-model.number="amount"
            label="Kütuse kogus (l)"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-on:input="f4"
            v-on:change="f4"
            :min="0"
            :max="100"
            type="number"
            v-model.number="price"
            label="Kütuseühiku hind (€)"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-title class="lime lighten-5"><b>Tulemus</b></v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text class="fs mb-4"
            >Kütusekulu maksumus on <b> {{ cost }} </b> (€)</v-card-text
          >
        </v-col>
      </v-row>
      <v-row class="lime darken-2" justify="end">
        <v-btn class="mr-6 mb-1 mt-1" v-on:click="reset()">
          Lähtesta andmed
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
export default {
  name: "FuelCalculator",
  data: () => ({
    // isDisabledDistLenght: false,
    // isDisabledAverageAmount: false,
    // isDisabledLenghtFuelAmount: false,
    checkDistance: false,
    checkAvgFuelConsump: false,
    checkFuelAmount: false,
    dis: 0,
    avg: 0,
    amount: 0,
    cost: 0,
    price: 0,
    selected: "Teekonna pikkust (km)",
  }),

  // !!!!!!!!
  // dis = Distance Lenght (km)
  // avg = Average Fuel Consumption (l/100km)
  // amount = Fuel Amount (l)
  // cost = Fuel Total Cost (€)

  //Functions
  // f1 = calc Distance Lenght
  // f2 = Average Fuel Consumption
  // f3 = Fuel Amount
  // f4 = Fuel Total Cost
  // !!!!!!!!

  methods: {
    calculateValues() {
      console.log("funktsioon algas");
      let selected = this.selected;

      console.log(selected);
      if (selected === "Teekonna pikkus (km)") {
        return (this.checkDistance.disabled = true);
      }
    },
    f1() {
      return (this.dis = ((100 / this.avg) * this.amount).toFixed(2));
    },
    f2() {
      return (this.avg = ((this.amount / this.dis) * 100).toFixed(2));
    },
    f3() {
      return (this.amount = ((this.dis * this.avg) / 100).toFixed(2));
    },
    f4() {
      return (this.cost = (this.price * this.amount).toFixed(2));
    },

    reset: function () {
      console.log("reset algas");
      return [
        // (this.isDisabledDistLenght = true),
        // (this.isDisabledAverageAmount = true),
        // (this.isDisabledLenghtFuelAmount = true),
        (this.checkDistance = false),
        (this.checkAvgFuelConsump = false),
        (this.checkFuelAmount = false),
        (this.dis = 0),
        (this.amount = 0),
        (this.avg = 0),
        (this.cost = 0),
        (this.price = 0),
        (this.selected = "Teekonna pikkus (km)"),
      ];
    },
  },
};
</script>

<style scoped>
.e4 {
  width: 800px;
  margin: 1em auto;
}
.fs {
  font-size: 20px;
  text-align: left;
}
</style>
