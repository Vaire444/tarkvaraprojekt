<template>
  <v-app>
    <v-card>
      <v-app-bar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Kalkulaatorid</v-toolbar-title>
      </v-app-bar>

      <v-main class="my-16">
        <v-container>
          <!-- Siia tuleb lisada routeri lingid iga kalkulaatori jaoks -->
          <!-- <div id="app">
            <TheNavigation /> -->
          <div class="e4">
            <v-row>
              <v-col cols="12" sm="4">
                <router-link to="/bmicalculator">KMI Kalkulaator</router-link>
              </v-col>
              <v-col cols="12" sm="4">
                <router-link to="/wagecalculator">Palgakalkulaator</router-link>
              </v-col>
              <v-col cols="12" sm="4">
                <router-link to="/fuelcalculator"
                  >Kütusekalkulaator</router-link
                >
              </v-col>
            </v-row>
          </div>
          <router-view />
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

.e4 {
  width: 500px;
  margin: auto;
}
</style>
