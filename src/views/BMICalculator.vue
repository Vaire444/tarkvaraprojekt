<template>
  <v-card class="e4">
    <v-responsive
      :style="{ background: `rgb(${red}, 155, ${blue})` }"
      height="100px"
      ><v-card-text>
        Sinu kehamassiindeks kaalu <b>{{ red }} kg </b> ja pikkuse
        <b>{{ blue }} cm</b> juures on {{ bmi }}<br /><br />

        Sa oled {{ message }}
      </v-card-text>
    </v-responsive>

    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="red"
              :min="1"
              :max="255"
              label="Kehakaal"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="red"
                  class="mt-0 pt-0"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="blue"
              :min="1"
              :max="255"
              label="Pikkus"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="blue"
                  class="mt-0 pt-0"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      red: 64,
      green: 128,
      blue: 160,
    };
  },
};

// createMessage(number) {
//     if (number > 59.99) {
//       this.message = "	Rasvumise 5. klass";
//       this.className = "red";
//     } else if (number > 49.99) {
//       this.message = "	Rasvumise 5. klass";
//       this.className = "red";
//     } else if (number > 44.99) {
//       this.message = "	Rasvumise 4. klass";
//       this.className = "red";
//     } else if (number > 39.99) {
//       this.message = "	Rasvumise 3. klass";
//       this.className = "red";
//     } else if (number > 34.99) {
//       this.message = "Rasvumise 2. klass";
//       this.className = "red";
//     } else if (number > 29.99) {
//       this.message = "Rasvumise 1. klass";
//       this.className = "red";
//     } else if (number > 24.99) {
//       this.message = "Ülekaal";
//       this.className = "red";
//     } else if (number > 18.49) {
//       this.message = "Normaalkaal";
//       this.className = "green";
//     } else if (number > 15.99) {
//       this.message = "Kerge alakaal";
//       this.className = "red";
//     } else if (number > 14.99) {
//       this.message = "Keskmine alakaal";
//       this.className = "red";
//     } else {
//       this.message = "Tõsine alakaal";
//       this.className = "red";
//     }}
</script>

<style scoped>
.e4 {
  width: 400px;
  margin: auto;
}
</style>
