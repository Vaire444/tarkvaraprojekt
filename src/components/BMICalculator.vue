<template>
  <div class="bmicalculator">
    <v-card class="e4 mt-8" elevation="24" shaped outlined>
      <v-card-title class="lime lighten-2"
        ><h3>KMI kalkulaator</h3></v-card-title
      >
      <v-responsive height="120px"
        ><v-card-text>
          <br />
          <h3>
            {{ name }}, sinu kehamassiindeks kaalu {{ weight }} kg ja pikkuse
            {{ height }} cm juures on {{ bmi }}
          </h3>
          <br />

          <h3>{{ weightGroup }}</h3>
        </v-card-text>
      </v-responsive>
      <br /><br />
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-slider
                v-model="weight"
                v-on:change="bmiCalc(height, weight)"
                :min="25"
                :max="255"
                label="Kehakaal(kg)"
                class="align-center"
                thumb-label="always"
                thumb-color="lime darken-4"
                color="lime darken-3"
                track-color="lime lighten-1"
              >
              </v-slider>
            </v-col>
            <v-col cols="12">
              <v-slider
                v-model="height"
                v-on:change="bmiCalc(height, weight)"
                :min="25"
                :max="255"
                label="Pikkus(cm)"
                class="align-center"
                thumb-label="always"
                color="lime darken-3"
                thumb-color="lime darken-4"
                track-color="lime lighten-1"
              >
              </v-slider>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "bmicalculator",
  data: () => ({
    weight: 50,
    height: 150,
    bmi: 22.22,
    weightGroup: "Oled normaalkaalus",
  }),
  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
  }),

  methods: {
    bmiCalc(height, weight) {
      let totalKMI = parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);

      let bmi = totalKMI.toFixed(2);
      this.bmi = bmi;

      let weightGroup = this.bmi;
      if (weightGroup > 59.99) {
        return (this.weightGroup = "Sul on ülekaal!	Rasvumise 6. klass");
      } else if (weightGroup > 49.99) {
        return (this.weightGroup = "Sul on ülekaal!	Rasvumise 5. klass");
      } else if (weightGroup > 44.99) {
        return (this.weightGroup = "Sul on ülekaal!	Rasvumise 4. klass");
      } else if (weightGroup > 39.99) {
        return (this.weightGroup = "Sul on ülekaal!	Rasvumise 3. klass");
      } else if (weightGroup > 34.99) {
        return (this.weightGroup = "Sul on ülekaal! Rasvumise 2. klass");
      } else if (weightGroup > 29.99) {
        return (this.weightGroup = "Sul on ülekaal! Rasvumise 1. klass");
      } else if (weightGroup > 24.99) {
        return (this.weightGroup = "Sul on ülekaal");
      } else if (weightGroup > 18.49) {
        return (this.weightGroup = "Oled normaalkaalus");
      } else if (weightGroup > 15.99) {
        return (this.weightGroup = "Sul on kerge alakaal");
      } else if (weightGroup > 14.99) {
        return (this.weightGroup = "Sul on keskmine alakaal");
      } else {
        return (this.weightGroup = "Sul on tõsine alakaal");
      }
    },
  },
};
</script>

<style scoped>
.e4 {
  width: 800px;
  margin: auto;
}
</style>
