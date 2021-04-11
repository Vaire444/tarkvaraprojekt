<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title class="lime lighten-2"
      ><h3>Kütusekulu kalkulaator</h3>
    </v-card-title>
    <v-card-title class="lime lighten-5"><b>Lähteandmed</b></v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="5">
          <input
            type="radio"
            id="one"
            value="One"
            v-model="picked"
            @change="fuelCalc()"
          />
          <label for="one">Arvuta teekonna pikkust (km)</label>
          <br />
          <input
            type="radio"
            id="two"
            value="Two"
            v-model="picked"
            @change="fuelCalc()"
          />
          <label for="two">Arvuta keskmist kütusekulu (l/100km)</label>
          <br />
          <input
            type="radio"
            id="three"
            value="Three"
            v-model="picked"
            @change="fuelCalc()"
          />
          <label for="Three">Arvuta kütuse kogust (l)</label>
          <br />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            :disabled="!isDisabledDistLenght"
            v-on:input="
              fuelCalc();
              f4();
            "
            :min="0"
            type="number"
            v-model.number="dis"
            label="Teekonna pikkus (km)"
            hide-details="auto"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :disabled="!isDisabledAverageAmount"
            v-on:input="
              fuelCalc();
              f4();
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
            :disabled="!isDisabledLenghtFuelAmount"
            v-on:input="
              fuelCalc();
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
            v-on:input="f4()"
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
          <v-card-text class="fs mb-2"
            >Kütusekulu maksumus on <b> {{ cost }} </b> (€)
          </v-card-text>
        </v-col>
      </v-row>
      <hr />
      <v-row justify="start">
        <v-btn small class="ml-2 mb-2 mt-5" v-on:click="reset()">
          Lähtesta andmed
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
export default {
  name: "fuelcalculator",
  data: () => ({
    isDisabledDistLenght: false,
    isDisabledAverageAmount: true,
    isDisabledLenghtFuelAmount: true,
    dis: 0,
    avg: 0,
    amount: 0,
    cost: 0,
    price: 0,
    picked: "One",
  }),

  methods: {
    fuelCalc() {
      if (this.picked == "One") {
        (this.isDisabledDistLenght = false),
          (this.isDisabledAverageAmount = true),
          (this.isDisabledLenghtFuelAmount = true);
        this.dis = ((100 / this.avg) * this.amount).toFixed(2);
      } else if (this.picked == "Two") {
        (this.isDisabledDistLenght = true),
          (this.isDisabledAverageAmount = false),
          (this.isDisabledLenghtFuelAmount = true);
        this.avg = ((this.amount / this.dis) * 100).toFixed(2);
      } else {
        (this.isDisabledDistLenght = true),
          (this.isDisabledAverageAmount = true),
          (this.isDisabledLenghtFuelAmount = false);
        this.amount = ((this.dis * this.avg) / 100).toFixed(2);
      }
    },

    f4() {
      return (this.cost = (this.price * this.amount).toFixed(2));
    },

    reset: function () {
      return [
        (this.checkDistance = true),
        (this.checkAvgFuelConsump = false),
        (this.checkFuelAmount = false),
        (this.dis = 0),
        (this.amount = 0),
        (this.avg = 0),
        (this.cost = 0),
        (this.price = 0),
        (this.picked = "One"),
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
  font-size: 17px;
  text-align: left;
}
</style>
