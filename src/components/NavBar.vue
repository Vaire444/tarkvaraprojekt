<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
        <span>Kalku</span>
        <span class="font-weight-light">laator</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <!-- <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        > -->
      <v-list nav dense>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    links: [
      { icon: "mdi-clock", text: "Avaleht", route: "/" },
      {
        icon: "mdi-clock",
        text: "Kehamassiindeksi kalkulaator",
        route: "/bmicalculator",
      },
      {
        icon: "mdi-clock",
        text: "Kütusekulu kalkulaator",
        route: "/fuelcalculator",
      },
      {
        icon: "mdi-clock",
        text: "Palgakalkulaator",
        route: "/wagecalculator",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
