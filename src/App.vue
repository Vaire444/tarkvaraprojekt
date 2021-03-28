<template>
  <v-app>
    <v-card>
      <v-app-bar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Kalkulaatorid</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <!-- Siia tuleb lisada routeri lingid iga kalkulaatori jaoks -->
          <!-- <div id="app">
            <TheNavigation /> -->
          <div>
            <router-link to="/bmicalculator">KMI Kalkulaator</router-link> |
            <router-link to="/wagecalculator">Palgakalkulaator</router-link> |
            <router-link to="/fuelcalculator">Kütusekalkulaator</router-link>
            <router-view />
          </div>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
// import TheNavigation from "@/components/TheNavigation";
// export default {
//   components: {
//     TheNavigation,
//   },
// };

// import HelloWorld from "./components/HelloWorld";

// export default {
//   name: "App",

//   components: {
//     HelloWorld,
//   },

//   data: () => ({
//     //
//   }),
// };
//
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: rgb(198, 199, 109);
}
</style>