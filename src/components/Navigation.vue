<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        color="lime darken-3"
        class="lime darken-3--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Kalku</span>
        <span class="font-weight-light">laator</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.route"
          color="lime darken-3"
        >
          <v-list-item-icon>
            <v-icon color="lime darken-3">{{ link.icon }}</v-icon>
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

      { icon: "mdi-clock", text: "test", route: "/test" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
