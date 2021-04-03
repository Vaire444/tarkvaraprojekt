<template>
  <v-container>
    <v-row class="text-center mt-4">
      <v-col class="mb-4">
        <h1 class="display-2 mb-3">Tere tulemast, hea {{ name }}!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2">
        <v-text-field
          v-model.number="brutoWage"
          label="Sisesta siia oma nimi"
          dense
          outlined
        ></v-text-field>
        <v-btn tile color="success" class="mt-n6"> Sisesta </v-btn>
      </v-col>
    </v-row>
    <!-- <v-row align="left" justify="space-around">
     
    </v-row> -->

    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
    ></v-sparkline>
  </v-container>
</template>


<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
    name: "Sõber",
  }),
};
</script>





