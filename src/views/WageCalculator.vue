<template>
  <div cols="12" sm="6">
    <v-card class="e4 mt-8" elevation="24" shaped outlined>
      <v-card-title><h3>Palgakalkulaator</h3></v-card-title>
      <v-card-title><b>Lähteandmed</b></v-card-title>
      <v-container fluid>
        <v-row align="left">
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Tööandja kulu"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Brutopalk"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Netopalk"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>

          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label=""
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3 disabled"
              label="Keskmine kütusekulu"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select :items="items" label="Select"></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Kütuse kogus"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3"
              label="Kütuse kogus"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select :items="items" label="Select"></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Kütuseühiku hind"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3"
              label="Kütuseühiku hind"
              dense
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-card-title><b>Tulemus</b></v-card-title>
        <v-row class="align-left">
          <v-col cols="12" sm="4">
            <v-card-text class="fs">Kütusekulu maksumus </v-card-text>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3 disabled"
              label="Kütusekulu maksumus"
              dense
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="e4 mt-8" elevation="24" shaped outlined>
      <v-card-title><h3>Palgakalkulaator</h3></v-card-title>
      <v-card-title><b>Lähteandmed</b></v-card-title>
      <v-container fluid>
        <v-row align="left">
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Tööandja kulu"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Brutopalk"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Netopalk"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>

          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label=""
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3 disabled"
              label="Keskmine kütusekulu"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select :items="items" label="Select"></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Kütuse kogus"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3"
              label="Kütuse kogus"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select :items="items" label="Select"></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox
              v-model="ex4"
              label="Kütuseühiku hind"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3"
              label="Kütuseühiku hind"
              dense
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-card-title><b>Tulemus</b></v-card-title>
        <v-row class="align-left">
          <v-col cols="12" sm="4">
            <v-card-text class="fs">Kütusekulu maksumus </v-card-text>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="pa-6 my-n4 pr-3 disabled"
              label="Kütusekulu maksumus"
              dense
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style scoped>
.e4 {
  width: 800px;
  margin: auto;
}
.fs {
  font-size: 18px;
}
</style>
