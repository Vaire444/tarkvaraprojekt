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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
};
</script>

