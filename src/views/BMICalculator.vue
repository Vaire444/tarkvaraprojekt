<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title><h3>Kehamassiindeksi kalkulaator</h3></v-card-title>
    <v-responsive height="100px"
      ><v-card-text>
        Sinu kehamassiindeks kaalu <b>{{ weight }} kg </b> ja pikkuse
        <b>{{ height }} cm</b> juures on {{ bmi }}<br /><br />
      </v-card-text>
    </v-responsive>
    <br /><br />
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="weight"
              v-on:change="bmiCalc"
              :min="1"
              :max="255"
              label="Kehakaal"
              class="align-center"
              thumb-label="always"
            >
              <!-- <template v-slot:append>
                <v-text-field
                  v-model="weight"
                  class="mt-0 pt-0"
                  style="width: 60px"
                ></v-text-field>
              </template> -->
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="height"
              v-on:change="bmiCalc"
              :min="1"
              :max="255"
              label="Pikkus"
              class="align-center"
              thumb-label="always"
            >
              <!-- <template v-slot:append>
                <v-text-field
                  v-model="height"
                  class="mt-0 pt-0"
                  style="width: 60px"
                ></v-text-field>
              </template> -->
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    weight: 0,
    height: 0,
    bmi: 0,
  }),

  computed: {
    ...mapState(["Weight", "Height"]),
    result() {
      return this.Weight;
    },
  },

  methods: {
    ...mapActions(["Weight", "Height"]),

    bmiCalc() {
      console.log("funktsion algas");
      let weight = parseFloat(this.weight);
      console.log(weight);
      let height = parseFloat(this.height);
      console.log(height);
      let totalKMI = weight / Math.pow(height) / 100;
      console.log(totalKMI);
      this.bmi = totalKMI.toFixed(2);
    },
  },

  mounted() {
    console.log(this.$store.state);
    this.weight = this.$store.getters.Weight;
    this.height = this.$store.getters.Height;
    this.bmi = this.$store.getters.bmi;
    this.weightGroup = this.$store.getters.weightGroup;
  },
};
</script>

<style scoped>
.e4 {
  width: 800px;
  margin: auto;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>