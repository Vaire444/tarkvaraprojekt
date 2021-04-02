<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title class="lime darken-2"><h3>Palgakalkulaator</h3></v-card-title>
    <v-card-title><b>Lähteandmed (2021)</b></v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text>Brutopalk (€ kuus) </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            class="pa-6 my-n4 pr-3 disabled"
            label="Sisesta brutopalk"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text><h3>Mahaarvamised</h3> </v-card-text>
        </v-col>
      </v-row>
      <v-row>
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
            v-model="ex4"
            label="Arvesta sotsiaalmaksu min. kuumäära alusel"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-checkbox
            v-model="ex4"
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
            v-model="ex4"
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
            v-model="ex4"
            label="Töötaja (kindlustatu) töötuskindlustusmakse (1.6%)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mb-4">
          <v-checkbox
            v-model="ex4"
            label="Kogumispension (II sammas)"
            color="indigo"
            value="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        hide-default-header
        hide-default-footer
        class="elevation-1"
      ></v-data-table>

      <hr />
      <v-card-title class="lime lighten-3"><b>Tulemus</b></v-card-title>
      <v-row>
        <v-col cols="12" sm="16">
          <v-card-text
            >Tööandja kulu kokku (Palgafond) <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Sotsiaalmaks <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
          <v-card-text class="mb-4"
            >Kütusekulu maksumus on <b>{{ cost }} </b> €
          </v-card-text>
        </v-col>
      </v-row>

      <ChartPie />
    </v-container>
  </v-card>
</template>

<script>
import ChartPie from "../components/ChartPie.vue";
export default {
  components: { ChartPie },
  data: () => ({
    wageFund: 0,
    socialTax: 0,
    unempInsCorp: 0,
    netoWage: 0,
    unepmInsWorker: 0,
    incomeTax: 0,
    brutoWage: 0,
    pension: 0,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        value: "name",
      },
      { text: "Category", value: "category" },
    ],
    desserts: [
      {
        name: "Tööandja kulu kokku (Palgafond):",
        category: 0,
      },
      {
        name: "Sotsiaalmaks:",
        category: "this.socialTax",
      },
      {
        name: "Töötuskindlustusmakse (tööandja):",
        category: "this.unempInsCorp",
      },
      {
        name: "Brutopalk:",
        category: "Pastry",
      },
      {
        name: "Kogumispension (II sammas)",
        category: "Cookie",
      },
      {
        name: "Täätuskindlustusmakse (töötaja)",
        category: "Candy",
      },
      {
        name: "Tulumaks",
        category: "Candy",
      },
      {
        name: "Netopalk",
        category: "Toffee",
      },
    ],
  }),
};
</script>

<style scoped>
.e4 {
  width: 1000px;
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
  /* border: 2px solid #fefefe; */
  /* background: conic-gradient(#fefefe 0 30%, #00fe00 0 70%, #00fefe 0 100%); */
}
</style>
