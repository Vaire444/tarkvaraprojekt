<template>
  <v-container>
    <v-row class="text-center mt-4">
      <v-col class="mb-4">
        <h1 class="display-2 mb-3">Tere tulemast!</h1>
      </v-col>
    </v-row>
    <v-row justify="space-around"> </v-row>

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
  ["#F9A825", "#AEEA00", "#827717"],
];

export default {
  name: "Home",

  data: () => ({
    width: 2,
    radius: 4,
    padding: 4,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 12, 5, 17, 3, 5, 0, 15, 1, 8, 3, 5, 0, 13, 1, 2, 7, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
};
</script>





