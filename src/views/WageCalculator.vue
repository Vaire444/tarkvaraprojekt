<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title class="lime lighten-2"
      ><h3>Palgakalkulaator(2021)</h3></v-card-title
    >
    <v-card-title class="lime lighten-5"><b>Lähteandmed</b></v-card-title>
    <v-container fluid>
      <!-- <v-row>
        <v-col cols="12" sm="3">
          <v-card-text>Brutopalk (€ kuus) </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model.number="brutoWage"
            type="number"
            class="pa-6 my-n4 pr-3"
            label="Sisesta brutopalk"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>-->
      <v-row>
        <!-- <v-col cols="12" sm="6"> -->
        <v-card-text><h3>Mahaarvamised</h3> </v-card-text>
        <!-- </v-col> -->
      </v-row>
      <!-- <v-row>
        <v-col cols="12" sm="6">
          <v-checkbox
            v-on:input="
              f2();
              f3();
            "
            v-on:change="
              f1();
              f3();
            "
            v-model="netoWage"
            label="Arvesta sotsiaalmaksu min. kuumäära alusel"
            color="indigo"
            value="netoWage"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row> -->
      <!-- <v-row>
        <v-col cols="12" sm="6">
          <v-checkbox
            v-model="netoWage"
            label="Arvesta maksuvaba tulu (500€ kuus)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-checkbox
            v-model="netoWage"
            label="Tööandja töötskindlusutse makse (0,8%)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-checkbox
            v-model="netoWage"
            label="Töötaja (kindlustatu) töötuskindlustusmakse (1.6%)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row> -->
      <v-col cols="12" sm="4">
        <v-row>
          <!-- <v-col cols="12" class="mb-4">
          <v-checkbox
            v-model="netoWage"
            label="Kogumispension (II sammas)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col> -->
          <v-checkbox
            v-for="(el, index) in checkboxes"
            :key="index"
            v-model="checkbox[index]"
            :value="el"
            :label="el"
            @change="
              onChange(el, index);
              valueChanged($event, index);
            "
          ></v-checkbox>
        </v-row>
      </v-col>
      <!-- <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        hide-default-header
        hide-default-footer
        class="elevation-1"
      ></v-data-table> -->
    </v-container>

    <v-card-title class="lime lighten-5"><b>Tulemus</b></v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text
            >Tööandja kulu kokku (Palgafond): <b>{{ wageFund }} </b> €
          </v-card-text>
          <v-card-text
            >Sotsiaalmaks: <b>{{ socialTax }} </b> €
          </v-card-text>
          <v-card-text
            >Töötuskindlustusmakse (tööandja): <b>{{ unempInsCorp }} </b> €
          </v-card-text>
          <v-card-text
            >Brutopalk: <b>{{ brutoWage }} </b> €
          </v-card-text>
          <v-card-text
            >Kogumispension (II sammas): <b>{{ pension }} </b> €
          </v-card-text>
          <v-card-text
            >Täätuskindlustusmakse (töötaja): <b>{{ unempInsWorker }} </b> €
          </v-card-text>
          <v-card-text
            >Tulumaks: <b>{{ incomeTax }} </b> €
          </v-card-text>
          <v-card-text class="mb-4"
            >Netopalk: <b>{{ netoWage }} </b> €
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="pie-shart">
            <v-card title="Pie">
              <v-card img-bottom>
                <ChartPieBase :chart-data="chartData" />
              </v-card>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ChartPieBase from "../components/ChartPieBase";
export default {
  components: { ChartPieBase },
  data: () => ({
    chartData: null,
    wageFund: 100,
    socialTax: 100,
    unempInsCorp: 70,
    brutoWage: 7000,
    pension: 20,
    unempInsWorker: 20,
    incomeTax: 20,
    netoWage: 7000,
    checkboxes: [
      "Arvesta sotsiaalmaksu min. kuumäära alusel",
      "Arvesta maksuvaba tulu (500€ kuus)",
      "Tööandja töötskindlusutse makse (0,8%)",
      "Töötaja (kindlustatu) töötuskindlustusmakse (1.6%)",
      "Kogumispension (II sammas)",
    ],
    checkbox: [],

    // headers: [
    //   {
    //     text: "Dessert (100g serving)",
    //     align: "start",
    //     value: "name",
    //   },
    //   { text: "Category", value: "category" },
    // ],
    // desserts: [
    //   {
    //     name: "Tööandja kulu kokku (Palgafond):",
    //     category: 0,
    //   },
    //   {
    //     name: "Sotsiaalmaks:",
    //     category: 0,
    //   },
    //   {
    //     name: "Töötuskindlustusmakse (tööandja):",
    //     category: 0,
    //   },
    //   {
    //     name: "Brutopalk:",
    //     category: 0,
    //   },
    //   {
    //     name: "Kogumispension (II sammas)",
    //     category: 0,
    //   },
    //   {
    //     name: "Täätuskindlustusmakse (töötaja)",
    //     category: 0,
    //   },
    //   {
    //     name: "Tulumaks",
    //     category: 0,
    //   },
    //   {
    //     name: "Netopalk",
    //     category: 0,
    //   },
    // ],
  }),

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: ["Netopalk", "Maksud(töötaja)", "Maksud(tööandja)"],
        datasets: [
          {
            backgroundColor: ["#AFB42B", "#827717"],
            hoverBackgroundColor: ["#F0F4C3", "#D4E157"],
            data: [65, 10, 25],
          },
        ],
      };
    },

    onChange(val, i) {
      console.log("funktsioon algas");
      console.log(val, i, this.checkbox);
      if (val === null || val.length === 0) {
        // Custom checks in this
        console.log("Unchecked");
      } else {
        console.log("Checked");
        if (i == 0) {
          console.log("tegemist on esimese väärtusega");
        } else if (i == 1) {
          console.log("tegemist on teise väärtusega");
        } else if (i == 1) {
          console.log("tegemist on kolmanda väärtusega");
        } else {
          console.log("tegemist on neljanda väärtusega");
        }
      }
    },
    valueChanged() {
      console.log("väärtus muudetud");
      console.log(this.checkbox);
    },
  },
};
</script>

<style scoped>
.e4 {
  width: 1600px;
  margin: auto;
}
.fs {
  font-size: 20px;
  text-align: left;
}
.pie-shart {
  width: 300px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #fefefe;
  /* background: conic-gradient(#fefefe 0 30%, #00fe00 0 70%, #00fefe 0 100%); */
}
</style>
