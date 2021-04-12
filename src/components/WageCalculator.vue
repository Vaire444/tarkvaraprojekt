<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
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
      <v-row class="mt-n6 mb-2">
        <v-card-text><h3>Mahaarvamised</h3> </v-card-text>
      </v-row>
      <v-checkbox
        class="mt-n2 mb-2"
        v-model="checkbox1"
        label="Arvesta sotsiaalmaksu min. kuumäära alusel"
        @change="
          wageCalc();
          updateChart();
          fillData();
        "
      ></v-checkbox>
      <v-checkbox
        class="mt-n6 mb-2"
        v-model="checkbox2"
        label="Arvesta maksuvaba tulu (500€ kuus)"
        @change="
          wageCalc();
          updateChart();
          fillData();
        "
      ></v-checkbox>
      <v-checkbox
        class="mt-n6 mb-2"
        v-model="checkbox3"
        label="Tööandja töötskindlustuse makse (0,8%)"
        @change="
          wageCalc();
          updateChart();
          fillData();
        "
      ></v-checkbox>
      <v-checkbox
        class="mt-n6 mb-2"
        v-model="checkbox4"
        label="Töötaja (kindlustatu) töötuskindlustusmakse (1.6%)"
        @change="
          wageCalc();
          updateChart();
          fillData();
        "
      ></v-checkbox>
      <v-checkbox
        class="mt-n6 mb-2"
        v-model="checkbox5"
        label="Kogumispension (II sammas)"
        @change="
          wageCalc();
          updateChart();
          fillData();
        "
      ></v-checkbox>
    </v-container>

    <v-card-title class="lime lighten-5"><b>Tulemus</b></v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text class="mb-n4 fs-14"
            >Tööandja kulu kokku (Palgafond): <b>{{ wageFundSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Sotsiaalmaks: <b>{{ socialTaxSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Töötuskindlustusmakse (tööandja): <b>{{ unempInsCorpSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Brutopalk: <b>{{ brutoWageSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Kogumispension (II sammas): <b>{{ pensionSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Töötuskindlustusmakse (töötaja): <b>{{ unempInsWorkerSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-n4 fs-14"
            >Tulumaks: <b>{{ incomeTaxSum }} </b> €
          </v-card-text>
          <v-card-text class="mb-4 fs-14"
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
</template>

<script>
import ChartPieBase from "./ChartPieBase";
export default {
  name: "wagecalculator",
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
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  }),

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: [
          "Netopalk %",
          "Maksud(töötaja) %",
          "Maksud(tööandja) %",
          "Kogumispension %",
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

    wageCalc() {
      let taxSocialSum = this.brutoWageSum * this.socialTax;
      let pension = this.brutoWageSum * this.pensionTax;
      let unempInsCorp = this.brutoWageSum * this.unempInsCorpTax;
      let unempInsWorker = this.brutoWageSum * this.unempInsWorkerTax;

      //Sotsiaalmaksu arvutus min. kuumaksu alusel
      if (this.checkbox1 == true) {
        if (taxSocialSum <= 192.72) {
          taxSocialSum = 192.72;
          this.socialTaxSum = parseFloat(taxSocialSum.toFixed(2));
        } else {
          this.socialTaxSum = parseFloat(taxSocialSum.toFixed(2));
        }
      } else {
        this.socialTaxSum = parseFloat(taxSocialSum.toFixed(2));
      }
      // Kogumispensioni arvutus
      if (this.checkbox5 == true) {
        this.pensionSum = parseFloat(pension.toFixed(2));
      } else {
        pension = 0;
        this.pensionSum = 0;
      }

      // Töötuskindlustusmakse arutus, tööandja
      if (this.checkbox3 == true) {
        this.unempInsCorpSum = parseFloat(unempInsCorp.toFixed(2));
      } else {
        unempInsCorp = 0;
        this.unempInsCorpSum = 0;
      }

      // Töötuskindlustusmakse arutus, töötaja
      if (this.checkbox4 == true) {
        this.unempInsWorkerSum = parseFloat(unempInsWorker.toFixed(2));
      } else {
        unempInsWorker = 0;
        this.unempInsWorkerSum = 0;
      }

      // maksuvaba tulu arvutamine
      let yearIncome = this.brutoWageSum * 12;
      let incomeTaxSumCalc =
        (this.brutoWageSum - pension - unempInsWorker) * this.incomeTax;

      if (this.checkbox2 == true) {
        if (yearIncome <= 14400) {
          if (yearIncome <= 6000) {
            incomeTaxSumCalc = 0;
            this.incomeTaxSum = 0;
          } else {
            incomeTaxSumCalc =
              (((this.brutoWageSum - pension - unempInsWorker) * 12 - 6000) /
                12) *
              this.incomeTax;

            this.incomeTaxSum = parseFloat(incomeTaxSumCalc.toFixed(2));
          }
        } else if (yearIncome >= 25200) {
          this.incomeTaxSum = parseFloat(incomeTaxSumCalc.toFixed(2));
        } else {
          let incomeTaxFreeSumCalc1 =
            (6000 - (6000 / 10800) * (yearIncome - 14400)) / 12;
          incomeTaxSumCalc =
            (this.brutoWageSum -
              pension -
              unempInsWorker -
              incomeTaxFreeSumCalc1) *
            this.incomeTax;

          this.incomeTaxSum = parseFloat(incomeTaxSumCalc.toFixed(2));
        }
      } else {
        this.incomeTaxSum = parseFloat(incomeTaxSumCalc.toFixed(2));
      }

      let netoWage =
        this.brutoWageSum - pension - unempInsWorker - incomeTaxSumCalc;
      this.netoWageSum = parseFloat(netoWage.toFixed(2));

      let wageFundS = this.brutoWageSum + taxSocialSum + unempInsCorp;
      this.wageFundSum = parseFloat(wageFundS).toFixed(2);
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
  margin: 1em auto;
}
.pie-shart {
  width: 270px;
  height: auto;
  border-radius: 50%;
  border: 2px #827717;
}
.fs-14 {
  font-size: 17px;
}
</style>
