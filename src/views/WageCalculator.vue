<template>
  <v-container>
    <v-card class="e4 mt-6 mb-8" elevation="24" shaped outlined>
      <v-card-title class="lime lighten-2"
        ><h3>Palgakalkulaator(2021)</h3></v-card-title
      >
      <v-card-title class="lime lighten-5"><b>Lähteandmed</b></v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="12">
            <v-card-text>Brutopalk (€ kuus) </v-card-text>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model.number="brutoWageSum"
              type="number"
              class="mt-n6"
              label="Sisesta brutopalk"
              dense
              outlined
              v-on:input="wageCalc()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-n6 mb-2">
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
        <v-col cols="12" sm="8" class="mb-n4">
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
              class="mt-n2"
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
            <v-card-text class="mb-n4"
              >Tööandja kulu kokku (Palgafond): <b>{{ wageFundSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Sotsiaalmaks: <b>{{ socialTaxSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Töötuskindlustusmakse (tööandja): <b>{{ unempInsCorpSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Brutopalk: <b>{{ brutoWageSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Kogumispension (II sammas): <b>{{ pensionSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Täätuskindlustusmakse (töötaja):
              <b>{{ unempInsWorkerSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Tulumaks: <b>{{ incomeTaxSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-4"
              >Netopalk: <b>{{ netoWageSum }} </b> €
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
  </v-container>
</template>

<script>
import ChartPieBase from "../components/ChartPieBase";
export default {
  components: { ChartPieBase },
  data: () => ({
    chartData: null,
    wageFundSum: 0,
    taxFreeSum: 0,
    minSocialTaxSum: 0,
    socialTaxSum: 0,
    unempInsCorpSum: 0,
    brutoWageSum: 0,
    pensionSum: 0,
    unempInsWorkerSum: 0,
    incomeTaxSum: 0,
    netoWageSum: 0,
    socialTax: 0.33,
    unempInsCorpTax: 0,
    pensionTax: 0,
    unempInsWorkerTax: 0,
    incomeTax: 0.2,
    checkboxes: [
      "Arvesta sotsiaalmaksu min. kuumäära alusel",
      "Arvesta maksuvaba tulu (500€ kuus)",
      "Tööandja töötskindlustuse makse (0,8%)",
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
      console.log(i, this.checkbox);
      if (val == null || val.length == 0) {
        // Custom checks in this
      } else {
        console.log("Checked");
      }
    },
    valueChanged() {
      console.log("väärtus muudetud");
      console.log(this.checkbox);
    },

    wageCalc() {
      return [
        (this.socialTaxSum = this.brutoWageSum * this.socialTax),
        (this.incomeTaxSum = this.brutoWageSum * this.incomeTax),
        (this.unempInsCorpSum = this.brutoWageSum * this.unempInsCorpTax),
        (this.pensionSum = this.brutoWageSum * this.pensionTax),
        (this.unempInsWorkerSum = this.brutoWageSum * this.unempInsWorkerTax),
        (this.incomeTaxSum =
          (this.brutoWageSum - this.pensionSum - this.unempInsWorkerSum) *
          this.incomeTax),
        (this.wageFundSum =
          this.brutoWageSum + this.socialTaxSum + this.unempInsCorpSum),
        (this.netoWageSum =
          this.brutoWageSum -
          this.pensionSum -
          this.unempInsWorkerSum -
          this.incomeTaxSum),
      ];
    },
  },
};
</script>

<style scoped>
.e4 {
  width: 800px;
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
