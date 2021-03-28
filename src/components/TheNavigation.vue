<template>
  <div class="text-left">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Vali kalkulaator
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>



<script>
export default {
  data: () => ({
    items: [
      { title: "KMI Kalkulaator", link: "/BMICalculator" },
      { title: "Palgakalkulaator", link: "/BMICalculator" },
      { title: "Kütusekakulaator", link: "/BMICalculator" },
    ],
  }),
};
</script>