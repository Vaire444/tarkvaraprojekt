// const app = new Vue({
//   el: "#app",
//   data: {
//     dinner: 100,
//     tip: 10,
//     people: 1,
//     taxes: 21,
//   },
//   methods: {
//     increment(key) {
//       this[key]++;
//     },
//     decrement(key) {
//       if (this[key] > 1) {
//         this[key]--;
//       }
//     },
//     totalTaxes() {
//       let totalTaxes = (this.taxes * this.dinner) / 100 + this.dinner;
//       let result = totalTaxes;
//       return result.toFixed(2);
//     },
//     totalTip() {
//       let totalTaxes = (this.taxes * this.dinner) / 100 + this.dinner;
//       let totalTip = (this.tip * this.dinner) / 100 + this.dinner;
//       let result = totalTaxes + totalTip;
//       return result.toFixed(2);
//     },
//     totalPerson() {
//       let totalTaxes = (this.taxes * this.dinner) / 100 + this.dinner;
//       let totalTip = (this.tip * this.dinner) / 100 + this.dinner;
//       let result = (totalTaxes + totalTip) * this.people;
//       return result.toFixed(2);
//     },
//   },
// });

// <script>
//     const heightIndicatorElement = document.getElementById('height-indicator').querySelector('strong');
//     const weightIndicatorElement = document.getElementById('weight-indicator').querySelector('strong');
//     const heightRangeSliderElement = document.getElementById('height-slider');
//     const weightRangeSliderElement = document.getElementById('weight-slider');
//     const calculationResultElement = document.getElementById('bmi-result');
//     const LOCAL_STORAGE_KEY = 'BMIcalculatorLastSelectedValues';

//     reloadRecentValuesFromLocalStorage();
//     heightRangeSliderElement.addEventListener('input', handleSliderInput);
//     weightRangeSliderElement.addEventListener('input', handleSliderInput);

//     function handleSliderInput() {
//         const currentWeight = weightRangeSliderElement.value;
//         const currentHeight = heightRangeSliderElement.value;
//         updateCalculatorUI(currentWeight, currentHeight);
//         persistSelection(currentWeight, currentHeight);
//     }

//     function calculateBMI(heightInCentiMeters, weightInKilograms) {
//         return parseFloat(weightInKilograms) / Math.pow(parseFloat(heightInCentiMeters) / 100, 2);
//     }

//     function reloadRecentValuesFromLocalStorage() {
//         const valuesFromLocalstorage = localStorage.getItem(LOCAL_STORAGE_KEY);
//         if (valuesFromLocalstorage === null) { return; }
//         try {
//             const { weightSliderValue, heightSliderValue } = JSON.parse(valuesFromLocalstorage);
//             if (isNaN(weightSliderValue) || isNaN(heightSliderValue)) {
//                 return;
//             }
//             weightRangeSliderElement.value = weightSliderValue;
//             heightRangeSliderElement.value = heightSliderValue;
//             updateCalculatorUI(weightSliderValue, heightSliderValue);
//         } catch (e) { }
//     }

//     function updateCalculatorUI(currentWeight, currentHeight) {
//         weightIndicatorElement.textContent = currentWeight;
//         heightIndicatorElement.textContent = currentHeight;
//         calculationResultElement.textContent = calculateBMI(currentHeight, currentWeight).toFixed(2);
//     }

//     function persistSelection(weightSliderValue, heightSliderValue) {
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ weightSliderValue, heightSliderValue }));
//     }
// </script>

// createMessage(number) {
//     if (number > 59.99) {
//       this.message = "	Rasvumise 5. klass";
//       this.className = "red";
//     } else if (number > 49.99) {
//       this.message = "	Rasvumise 5. klass";
//       this.className = "red";
//     } else if (number > 44.99) {
//       this.message = "	Rasvumise 4. klass";
//       this.className = "red";
//     } else if (number > 39.99) {
//       this.message = "	Rasvumise 3. klass";
//       this.className = "red";
//     } else if (number > 34.99) {
//       this.message = "Rasvumise 2. klass";
//       this.className = "red";
//     } else if (number > 29.99) {
//       this.message = "Rasvumise 1. klass";
//       this.className = "red";
//     } else if (number > 24.99) {
//       this.message = "Ülekaal";
//       this.className = "red";
//     } else if (number > 18.49) {
//       this.message = "Normaalkaal";
//       this.className = "green";
//     } else if (number > 15.99) {
//       this.message = "Kerge alakaal";
//       this.className = "red";
//     } else if (number > 14.99) {
//       this.message = "Keskmine alakaal";
//       this.className = "red";
//     } else {
//       this.message = "Tõsine alakaal";
//       this.className = "red";
//     }}
