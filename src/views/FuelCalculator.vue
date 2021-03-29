
<template>
  <v-card class="e4 mt-8" elevation="24" shaped outlined>
    <v-card-title><h3>Kütusekulu kalkulaator</h3></v-card-title>
    <v-card-title><b>Lähteandmed</b></v-card-title>
    <v-container fluid>
      <v-row align="left">
        <v-col cols="12" sm="4">
          <v-checkbox
            v-model="checkDistance"
            label="Teekonna pikkus"
            hide-details
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            v-model="distanceValue"
            class="pa-6 my-n4 pr-3"
            label="Teekonna pikkus"
            dense
            solo
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            placeholder="Tee valik"
            v-model="unitLenght"
            v-bind:items="['Kilomeeter(km)', 'miil(ml)']"
            hide-details
          ></v-select>
        </v-col>

        <v-col cols="12" sm="4">
          <v-checkbox
            v-model="checkAvgFuelConsump"
            label="Keskmine kütusekulu"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="avgFuelConsumpValue"
            class="pa-6 my-n4 pr-3 disabled"
            label="Keskmine kütusekulu"
            dense
            solo
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            placeholder="Tee valik"
            v-model="unitLenghtAmount"
            v-bind:items="['liitrit/ 100 km', 'liitrit/ 100 miili']"
            hide-details
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4">
          <v-checkbox
            v-model="checkFuelAmount"
            label="Kütuse kogus"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="fuelAmountValue"
            class="pa-6 my-n4 pr-3"
            label="Kütuse kogus"
            dense
            solo
            outlined
          ></v-text-field>
        </v-col>
        <div cols="12" sm="4">`</div>
        <v-col cols="12" sm="4">
          <v-checkbox
            v-model="checkFuelPrice"
            label="Kütuseühiku hind"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="fuelPriceValue"
            class="pa-6 my-n4 pr-3"
            label="Kütuseühiku hind"
            dense
            solo
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
            class="pa-6 my-n6 pr-3"
            label="Kütusekulu maksumus"
            solo
            disabled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    unitLenght: "",
    unitLenghtAmount: "",
    checkDistance: true,
    checkAvgFuelConsump: false,
    checkFuelAmount: false,
    checkFuelPrice: false,
    distanceValue: 0,
    avgFuelConsumpValue: 0,
    fuelAmountValue: 0,
    fuelPriceValue: 0,
  }),
};

// watch: {
//   months: function (newVal) {
//     this.gotoMonth(newVal);
//   }
// }

// disable() {
//   var controlPairs = new Array();
//   controlPairs["F1"] = "Distance";
//   controlPairs["F2"] = "FuelConsumption";
//   controlPairs["F3"] = "FuelQuantity";
//   var disabledClass = "disabled vis biginput R W90";
//   var enabledClass = "vis biginput R W90";

//   for (var i in controlPairs) {
//     var field = document.getElementById(controlPairs[i]);
//     var toggle = document.getElementById(i);

//     field.disabled = toggle.checked;
//     field.className = toggle.checked ? disabledClass : enabledClass;
//   }
// }

// fuelCalc() {
//   if (document.getElementById("F3").checked) {
//     var Distance = getFieldFloatValue("Distance");
//     var FuelConsumption = getFieldFloatValue("FuelConsumption");
//     var FuelPrice = getFieldFloatValue("FuelPrice");
//     var unit_distance = getFieldFloatValue("unit_distance");
//     var unit_fuel = getFieldFloatValue("unit_fuel");
//     var unit_volume = getFieldFloatValue("unit_volume");
//     FuelQuantity = document.getElementById("FuelQuantity");
//     FuelCost = document.getElementById("FuelCost");

//     var a;
//     if (unit_fuel == 1 || unit_fuel == 2 || unit_fuel == 3) {
//       a = 1 / FuelConsumption;
//     } else if (unit_fuel == 4 || unit_fuel == 9 || unit_fuel == 11) {
//       a = FuelConsumption / 100;
//     } else if (unit_fuel == 5 || unit_fuel == 10 || unit_fuel == 12) {
//       a = FuelConsumption / 160.9344;
//     } else if (unit_fuel == 6 || unit_fuel == 7 || unit_fuel == 8) {
//       a = 0.621371192 / FuelConsumption;
//     }

//     if (unit_fuel == 1 || unit_fuel == 4 || unit_fuel == 5 || unit_fuel == 8) {
//       FuelQuantity.value = round(
//         (Distance * unit_distance * a) / unit_volume,
//         2
//       );
//       FuelCost.value = round(
//         (Distance * unit_distance * a * FuelPrice) / unit_volume,
//         2
//       );
//     } else if (
//       unit_fuel == 2 ||
//       unit_fuel == 6 ||
//       unit_fuel == 9 ||
//       unit_fuel == 10
//     ) {
//       FuelQuantity.value = round(
//         (Distance * unit_distance * 4.54609 * a) / unit_volume,
//         2
//       );
//       FuelCost.value = round(
//         (Distance * unit_distance * 4.54609 * a * FuelPrice) / unit_volume,
//         2
//       );
//     } else if (
//       unit_fuel == 3 ||
//       unit_fuel == 7 ||
//       unit_fuel == 11 ||
//       unit_fuel == 12
//     ) {
//       FuelQuantity.value = round(
//         (Distance * unit_distance * 3.785411784 * a) / unit_volume,
//         2
//       );
//       FuelCost.value = round(
//         (Distance * unit_distance * 3.785411784 * a * FuelPrice) / unit_volume,
//         2
//       );
//     }
//   } else if (document.getElementById("F1").checked) {
//     var FuelConsumption = getFieldFloatValue("FuelConsumption");
//     var FuelPrice = getFieldFloatValue("FuelPrice");
//     var FuelQuantity = getFieldFloatValue("FuelQuantity");
//     var unit_distance = getFieldFloatValue("unit_distance");
//     var unit_fuel = getFieldFloatValue("unit_fuel");
//     var unit_volume = getFieldFloatValue("unit_volume");
//     Distance = document.getElementById("Distance");
//     FuelCost = document.getElementById("FuelCost");

//     var b;
//     if (unit_fuel == 1 || unit_fuel == 2 || unit_fuel == 3) {
//       b = 1 / FuelConsumption;
//     } else if (unit_fuel == 4 || unit_fuel == 9 || unit_fuel == 11) {
//       b = FuelConsumption / 100;
//     } else if (unit_fuel == 5 || unit_fuel == 10 || unit_fuel == 12) {
//       b = FuelConsumption / 160.9344;
//     } else if (unit_fuel == 6 || unit_fuel == 7 || unit_fuel == 8) {
//       b = 0.621371192 / FuelConsumption;
//     }

//     if (unit_fuel == 1 || unit_fuel == 4 || unit_fuel == 5 || unit_fuel == 8) {
//       Distance.value = round(
//         (FuelQuantity * unit_volume) / (unit_distance * b),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (
//       unit_fuel == 2 ||
//       unit_fuel == 6 ||
//       unit_fuel == 9 ||
//       unit_fuel == 10
//     ) {
//       Distance.value = round(
//         (FuelQuantity * unit_volume) / (unit_distance * 4.54609 * b),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (
//       unit_fuel == 3 ||
//       unit_fuel == 7 ||
//       unit_fuel == 11 ||
//       unit_fuel == 12
//     ) {
//       Distance.value = round(
//         (FuelQuantity * unit_volume) / (unit_distance * 3.785411784 * b),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     }
//   } else if (document.getElementById("F2").checked) {
//     var Distance = getFieldFloatValue("Distance");
//     var FuelQuantity = getFieldFloatValue("FuelQuantity");
//     var FuelPrice = getFieldFloatValue("FuelPrice");
//     var unit_distance = getFieldFloatValue("unit_distance");
//     var unit_fuel = getFieldFloatValue("unit_fuel");
//     var unit_volume = getFieldFloatValue("unit_volume");
//     FuelConsumption = document.getElementById("FuelConsumption");
//     FuelCost = document.getElementById("FuelCost");

//     var c;
//     if (unit_fuel == 1 || unit_fuel == 2 || unit_fuel == 3) {
//       c = 1;
//     } else if (unit_fuel == 4 || unit_fuel == 9 || unit_fuel == 11) {
//       c = 100;
//     } else if (unit_fuel == 5 || unit_fuel == 10 || unit_fuel == 12) {
//       c = 160.9344;
//     } else if (unit_fuel == 6 || unit_fuel == 7 || unit_fuel == 8) {
//       c = 0.621371192;
//     }

//     if (unit_fuel == 4 || unit_fuel == 5) {
//       FuelConsumption.value = round(
//         (FuelQuantity * unit_volume * c) / (Distance * unit_distance),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (unit_fuel == 9 || unit_fuel == 10) {
//       FuelConsumption.value = round(
//         (FuelQuantity * unit_volume * c) / (Distance * unit_distance * 4.54609),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (unit_fuel == 11 || unit_fuel == 12) {
//       FuelConsumption.value = round(
//         (FuelQuantity * unit_volume * c) /
//           (Distance * unit_distance * 3.785411784),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (unit_fuel == 1 || unit_fuel == 8) {
//       FuelConsumption.value = round(
//         (Distance * unit_distance * c) / (FuelQuantity * unit_volume),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (unit_fuel == 2 || unit_fuel == 6) {
//       FuelConsumption.value = round(
//         (Distance * unit_distance * c * 4.54609) / (FuelQuantity * unit_volume),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     } else if (unit_fuel == 3 || unit_fuel == 7) {
//       FuelConsumption.value = round(
//         (Distance * unit_distance * c * 3.785411784) /
//           (FuelQuantity * unit_volume),
//         2
//       );
//       FuelCost.value = round(FuelQuantity * FuelPrice, 2);
//     }
//   }

/*
1 - km / L
2 - km/ UK gallon
3 - km/ US gallon
4 - L/ 100 km
5 - L/ 100 mi
6 - mi/ UK gal
7 - mi/ US gal
8 - mi/ L
9 - UK gal/ 100 km
10 - UK gal/ 100 mi
11 - US gal/ 100 km
12 - US gal/ 100 mi
*/
// }

// function getFieldFloatValue(fieldId) {
//   return parseFloat(document.getElementById(fieldId).value.replace(",", "."));
// }

// function round(n, dec) {
//   X = n * Math.pow(10, dec);
//   X = Math.round(X);
//   return (X / Math.pow(10, dec)).toFixed(dec);
// }

// function resetValues(form) {
//   for (var i = 0; i < form.elements.length; i++) {
//     if (form.elements[i].type == "text") {
//       form.elements[i].value = "";
//     }
//   }
// }
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
