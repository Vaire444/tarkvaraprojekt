<template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox
      v-model="selected"
      label="Arvesta sotsiaalmaksu min.kuumäära alusel"
      value="John"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Arvesta maksuvaba tulu (0 € kuus)"
      value="Jacob"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Tööandja töötuskindlustusmkse (0,8%)"
      value="mari"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Töötaja (kindlustatu) töötuskindlustusmkse (1,6%)"
      value="jüri"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Kogumispension (II sammas)"
      value="pipi"
    ></v-checkbox>
    <v-btn @click="disabled = (disabled + 1) % 2" elevation="2" x-small
      >vali1</v-btn
    >
    <v-btn @click="disabled = (disabled + 1) % 2" elevation="2" x-small
      >vali2</v-btn
    >
    <v-btn @click="disabled = (disabled + 1) % 2" elevation="2" x-small
      >vali3</v-btn
    >

    <v-col cols="12" sm="4">
      <v-autocomplete
        v-model="value"
        :items="items"
        dense
        label="Filled"
      ></v-autocomplete>
    </v-col>

    <v-row align="center">
      <v-checkbox
        v-model="enabled"
        hide-details
        class="shrink mr-2 mt-0"
      ></v-checkbox>
      <v-text-field
        :disabled="!enabled"
        label="I only work if you check the box"
      ></v-text-field>
    </v-row>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">Arvuta teekonna pikkust (km)</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Arvuta keskmist kütusekulu (l/100km)</label>
    <br />
    <input type="radio" id="three" value="Three" v-model="picked" />
    <label for="Three">Arvuta kütuse kogust (l)</label>
    <br />

    <span>Picked: {{ picked }}</span>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      disbled: 0,
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
      value: null,
      includeFiles: true,
      enabled: true,
      picked: "",
    };
  },
};
</script>

