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
              :min="0"
              dense
              outlined
              v-on:input="
                wageCalc();
                updateChart();
                fillData();
              "
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- <v-row class="mt-n6 mb-2">
          <v-card-text><h3>Mahaarvamised</h3> </v-card-text>
        </v-row> -->

        <!-- <v-col cols="12" sm="8" class="mb-n4">
          <v-row>

            <v-checkbox
            name: isChecked
              class="mt-n2"
              v-for="(el, index) in checkboxes"
              :key="index"
              v-model="checkbox[index]"
              :value="el"
              :label="el"
              
              @change="
                onChange(el, index);
                valueChanged($event, index);
                wageCalc($event, index);           
              "
            ></v-checkbox>
          </v-row>
        </v-col> -->
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
              >Töötuskindlustusmakse (töötaja):
              <b>{{ unempInsWorkerSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-n4"
              >Tulumaks: <b>{{ incomeTaxSum }} </b> €
            </v-card-text>
            <v-card-text class="mb-4"
              >Netopalk: <b>{{ netoWageSum }} </b> €
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" align="center">
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
    unempInsCorpTax: 0.008,
    pensionTax: 0.02,
    unempInsWorkerTax: 0.016,
    incomeTax: 0.2,
    sum1: 77,
    sum2: 10,
    sum3: 11,
    sum4: 2,
    checkboxes: [
      "Arvesta sotsiaalmaksu min. kuumäära alusel",
      "Arvesta maksuvaba tulu (500€ kuus)",
      "Tööandja töötskindlustuse makse (0,8%)",
      "Töötaja (kindlustatu) töötuskindlustusmakse (1.6%)",
      "Kogumispension (II sammas)",
    ],
    checkbox: [],
    checked: [],
  }),

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: [
          "Netopalk",
          "Maksud(töötaja)",
          "Maksud(tööandja)",
          "Kogumispension",
        ],
        datasets: [
          {
            backgroundColor: ["#AFB42B", "#827717", "#3c2885", "#b12755"],
            hoverBackgroundColor: ["#F0F4C3", "#D4E157", "#C5CAE9", "#FFCDD2"],
            data: [this.sum1, this.sum2, this.sum3, this.sum4],
          },
        ],
      };
    },

    onChange(val, i) {
      console.log("funktsioon algas");
      console.log(i, this.checkbox);
      if (val == null || val.length == 0) {
        console.log("Prrr");
        // Custom checks in this
      } else {
        console.log("Checked");
      }
    },
    valueChanged(val, i) {
      console.log(i);
      console.log(val);
      console.log("väärtus muudetud");
      console.log(this.checkbox);
    },

    wageCalc() {
      // if (i === 0 && val === null) {
      //   sum = 8;
      // } else {
      //   sum = 10;
      // }
      console.log("wageCalc funktsioon algas");
      let taxSocialSum = this.brutoWageSum * this.socialTax;
      this.socialTaxSum = parseFloat(taxSocialSum.toFixed(2));

      let pension = this.brutoWageSum * this.pensionTax;
      this.pensionSum = parseFloat(pension.toFixed(2));
      // console.log(this.pensionSum);

      let unempInsCorp = this.brutoWageSum * this.unempInsCorpTax;
      this.unempInsCorpSum = parseFloat(unempInsCorp.toFixed(2));
      // console.log(this.unempInsCorpSum);

      let unempInsWorker = this.brutoWageSum * this.unempInsWorkerTax;

      this.unempInsWorkerSum = parseFloat(unempInsWorker.toFixed(2));
      // console.log(this.unempInsWorkerSum);

      let incomeSum =
        (this.brutoWageSum - pension - unempInsWorker) * this.incomeTax;
      this.incomeTaxSum = parseFloat(incomeSum.toFixed(2));
      // console.log(this.incomeTaxSum);

      let netoWage = this.brutoWageSum - pension - unempInsWorker - incomeSum;
      this.netoWageSum = parseFloat(netoWage.toFixed(2));
      // console.log(this.wageFundSum);

      let wageFundS = this.brutoWageSum + taxSocialSum + unempInsCorp;
      // console.log(this.wageFundSum);
      this.wageFundSum = parseFloat(wageFundS.toFixed(2));
      // console.log(this.wageFundSum);

      // return [
      // (this.socialTaxSum = this.brutoWageSum * this.socialTax),
      // (this.incomeTaxSum = this.brutoWageSum * this.incomeTax),
      // (this.unempInsCorpSum = this.brutoWageSum * this.unempInsCorpTax),
      // (this.pensionSum = this.brutoWageSum * this.pensionTax),
      // (this.unempInsWorkerSum = this.brutoWageSum * this.unempInsWorkerTax),
      // (this.incomeTaxSum =
      //   (this.brutoWageSum - this.pensionSum - this.unempInsWorkerSum) *
      //   this.incomeTax),
      // (this.wageFundSum =
      //   this.brutoWageSum + this.socialTaxSum + this.unempInsCorpSum),
      // (this.netoWageSum =
      //   this.brutoWageSum -
      //   this.pensionSum -
      //   this.unempInsWorkerSum -
      //   this.incomeTaxSum),
      // ];
    },
    updateChart() {
      let sum2 =
        ((this.pensionSum + this, this.unempInsWorkerSum + this.incomeTaxSum) *
          100) /
        this.wageFundSum;
      let sum3 =
        ((this.socialTaxSum + this.unempInsCorpSum) * 100) / this.wageFundSum;
      let sum4 = (this.pensionSum * 100) / this.wageFundSum;
      let sum1 = 100 - sum3 - sum2 - sum4;

      return (
        (this.sum1 = sum1.toFixed(2)),
        (this.sum2 = sum2.toFixed(2)),
        (this.sum3 = sum3.toFixed(2)),
        (this.sum4 = sum4.toFixed(2))
      );
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
  width: 270px;
  height: auto;
  border-radius: 50%;
  border: 2px #827717;
}
</style>
