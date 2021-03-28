// function disable() {
//   var controlPairs = new Array();
//   controlPairs["F1"] = "taxfree_sum";
//   controlPairs["F2"] = "annual_revenue";
//   var disabledClass = "disabled_1 vis input R W120";
//   var enabledClass = "vis input R W120";

//   for (var i in controlPairs) {
//     var toggle = document.getElementById(i);
//     var elements = controlPairs[i].split(
//       ","
//     ); /* spliti väärtus komade kohapealt uueks arrayks */

//     for (var j in elements) {
//       var field = document.getElementById(elements[j]);
//       field.disabled = toggle.checked ? false : true;
//       field.className = toggle.checked ? enabledClass : disabledClass;
//     }
//   }
// }
// function minmax(n) {
//   var tfp = document.getElementById("taxfree_period");
//   var i = tfp.options[tfp.selectedIndex].value;
//   var min = 0;
//   var max = 500 * i;

//   //n = parseFloat(n);
//   if (n < min) n = round(min, 2);
//   if (n > max) n = max;
//   return n || "";
// }
// function revenueCalc() {
//   var eur = getFieldFloatValue("eur");
//   var workhours = getFieldFloatValue("workhours");
//   var annual_revenue = document.getElementById("annual_revenue");
//   var tfs = document.getElementById("taxfree_sum");
//   var tfp = document.getElementById("taxfree_period");
//   var i = tfp.options[tfp.selectedIndex].value;
//   var input_1 = document.getElementById("input_1");
//   var input_2 = document.getElementById("input_2");
//   var input_3 = document.getElementById("input_3");
//   var year2017 = document.getElementById("year2017");
//   var year2018 = document.getElementById("year2018");
//   var year2019 = document.getElementById("year2019");
//   var year2020 = document.getElementById("year2020");
//   var year2021 = document.getElementById("year2021");
//   var socialtax_x = document.getElementById("socialtax_x");
//   var taxfree_x = document.getElementById("taxfree_x");
//   var ui1_x = document.getElementById("ui1_x");
//   var ui2_x = document.getElementById("ui2_x");
//   var pension_x = document.getElementById("pension_x");
//   var period = getFieldFloatValue("period");
//   var nper;
//   if (period == 1) {
//     workhours = workhours;
//   } else {
//     workhours = 1;
//   }
//   if (period == 3) {
//     nper = 12;
//   } else {
//     nper = 1;
//   }
//   var year;
//   if (year2021.checked == true) {
//     year = 2021;
//   } else if (year2020.checked == true) {
//     year = 2020;
//   } else if (year2019.checked == true) {
//     year = 2019;
//   } else if (year2018.checked == true) {
//     year = 2018;
//   } else if (year2017.checked == true) {
//     year = 2017;
//   }
//   var itr = 0.2;
//   var income_tax_rate;
//   var socialtax_min;
//   if (year == 2021) {
//     (socialtax_min = 192), 72;
//   } else if (year == 2020) {
//     socialtax_min = 178.2;
//   } else if (year == 2019) {
//     socialtax_min = 165.0;
//   } else if (year == 2018) {
//     socialtax_min = 155.1;
//   } else if (year == 2017) {
//     socialtax_min = 141.9;
//   }
//   var str = 0.33; // social tax rate (33%)
//   var uip1;
//   uip1 = 0.008;
//   uip1 = ui1_x.checked ? uip1 : 0;
//   var uip2;
//   uip2 = 0.016;
//   uip2 = ui2_x.checked ? uip2 : 0;
//   var fp1;
//   fp1 = 0.02;
//   fp1 = pension_x.checked ? fp1 : 0; //

//   if (taxfree_x.checked == true && year >= 2018) {
//     if (input_1.checked == true) {
//       if (socialtax_x.checked == true && eur * workhours < socialtax_min)
//         annual_revenue.value = "NaN";
//       else if (
//         socialtax_x.checked == true &&
//         eur * workhours < (socialtax_min / str) * (1 + str + 1 * uip1)
//       )
//         annual_revenue.value = round(
//           (((eur * workhours - socialtax_min) / (1 + 1 * uip1)) * 12) / nper,
//           2
//         );
//       else
//         annual_revenue.value = round(
//           (((eur * workhours) / (1 + str + 1 * uip1)) * 12) / nper,
//           2
//         );
//     } else if (input_2.checked == true) {
//       annual_revenue.value = round((eur * workhours * 12) / nper, 2);
//     } else if (input_3.checked == true) {
//       var X;
//       X = round(
//         ((eur * workhours * 12) / nper / (1 - itr) -
//           25200 * (1 - (fp1 + 1 * uip2))) /
//           (-(9 / 5) * (1 - (fp1 + 1 * uip2)) - 1 + 1 / (1 - itr)),
//         2
//       );
//       if (X < 0) n = 0;
//       else if (
//         ((eur * workhours * 12) / nper) * (1 - (fp1 + 1 * uip2)) < 6000 &&
//         X > 6000
//       )
//         n = eur * workhours;
//       else if (X > 6000) n = (6000 * nper) / 12;
//       else n = round((X * nper) / 12, 2);
//       income_tax_rate =
//         (eur * workhours * (1 - (1 * fp1 + 1 * uip2)) * 12) / nper - n <= 0
//           ? 0
//           : itr;
//       annual_revenue.value = round(
//         (round(
//           ((eur * workhours - 1 * n) / (1 - income_tax_rate) + 1 * n) /
//             (1 - (1 * fp1 + 1 * uip2)),
//           2
//         ) *
//           12) /
//           nper,
//         2
//       );
//     }
//   } else {
//     annual_revenue.value = "";
//   }

//   if (annual_revenue.value > 25200) tfs.value = round(0, 2);
//   //else if (annual_revenue.value*(1-(1*fp1+1*uip2)) < 6000) tfs.value=(input_3.checked == true? round(eur*workhours, 2) : round(eur*workhours*(1-(1*fp1+1*uip2)), 2));
//   else if (annual_revenue.value * (1 - (1 * fp1 + 1 * uip2)) < 6000) {
//     if (input_3.checked == true)
//       tfs.value = round((((eur * workhours * 12) / nper) * i) / 12, 2);
//     else if (input_2.checked == true)
//       tfs.value = round(
//         (((eur * workhours * (1 - (1 * fp1 + 1 * uip2)) * 12) / nper) * i) / 12,
//         2
//       );
//     else if (input_1.checked == true) {
//       //if  	((socialtax_x.checked == true) && ((eur*workhours) < socialtax_min)) tfs.value = "NaN";
//       if (
//         socialtax_x.checked == true &&
//         eur * workhours < (socialtax_min / str) * (1 + str + 1 * uip1)
//       )
//         tfs.value = round(
//           (((((eur * workhours - socialtax_min) / (1 + 1 * uip1)) *
//             (1 - (1 * fp1 + 1 * uip2)) *
//             12) /
//             nper) *
//             i) /
//             12,
//           2
//         );
//       else
//         tfs.value = round(
//           (((((eur * workhours) / (1 + str + 1 * uip1)) *
//             (1 - (1 * fp1 + 1 * uip2)) *
//             12) /
//             nper) *
//             i) /
//             12,
//           2
//         );
//     }
//   } else if (annual_revenue.value < 14400)
//     tfs.value = round((6000 * i) / 12, 2);
//   else
//     tfs.value = round(
//       (round(6000 - (6000 * (annual_revenue.value - 14400)) / 10800, 2) * i) /
//         12,
//       2
//     );
// }
// function wageCalc() {
//   var eur = getFieldFloatValue("eur");
//   var workhours = getFieldFloatValue("workhours");
//   var period = getFieldFloatValue("period");
//   var annual_revenue = getFieldFloatValue("annual_revenue");
//   var tfs = document.getElementById("taxfree_sum");
//   var tfp = document.getElementById("taxfree_period");
//   var i = tfp.options[tfp.selectedIndex].value;
//   var tfs_1 =
//     getFieldFloatValue("taxfree_sum") / i > 500
//       ? 500 * i
//       : getFieldFloatValue("taxfree_sum") / i;
//   var year2017 = document.getElementById("year2017");
//   var year2018 = document.getElementById("year2018");
//   var year2019 = document.getElementById("year2019");
//   var year2020 = document.getElementById("year2020");
//   var year2021 = document.getElementById("year2021");
//   var input_1 = document.getElementById("input_1");
//   var input_2 = document.getElementById("input_2");
//   var input_3 = document.getElementById("input_3");
//   var p1 = document.getElementById("p1");
//   var p2 = document.getElementById("p2");
//   var p3 = document.getElementById("p3");
//   var p4 = document.getElementById("p4");
//   var p5 = document.getElementById("p5");
//   var F1 = document.getElementById("F1");
//   var F2 = document.getElementById("F2");
//   var pct1 = document.getElementById("pct1");
//   var pct2 = document.getElementById("pct2");
//   var pct3 = document.getElementById("pct3");
//   var tfmtxt = document.getElementById("tfm");
//   var ui1txt = document.getElementById("ui1");
//   var ui2txt = document.getElementById("ui2");

//   var socialtax = document.getElementById("socialtax");
//   var grosswage = document.getElementById("grosswage");
//   var ui_employer = document.getElementById("ui_employer");
//   var ui_employee = document.getElementById("ui_employee");
//   var fpp_1 = document.getElementById("fpp_1");
//   var incometax = document.getElementById("incometax");
//   var netwage = document.getElementById("netwage");
//   //var netwageChange	= document.getElementById("netwageChange");
//   var wagefund = document.getElementById("wagefund");
//   var taxes = document.getElementById("taxes");
//   var localtaxes = document.getElementById("localtaxes");
//   var pension = document.getElementById("pension");

//   var socialtax_pct = document.getElementById("socialtax_pct");
//   var grosswage_pct = document.getElementById("grosswage_pct");
//   var ui_employer_pct = document.getElementById("ui_employer_pct");
//   var ui_employee_pct = document.getElementById("ui_employee_pct");
//   var fpp_1_pct = document.getElementById("fpp_1_pct");
//   var incometax_pct = document.getElementById("incometax_pct");
//   var netwage_pct = document.getElementById("netwage_pct");
//   var wagefund_pct = document.getElementById("wagefund_pct");

//   var taxfree_x = document.getElementById("taxfree_x");
//   var socialtax_x = document.getElementById("socialtax_x");
//   var ui1_x = document.getElementById("ui1_x");
//   var ui2_x = document.getElementById("ui2_x");
//   var pension_x = document.getElementById("pension_x");

//   var sta = document.getElementById("socialtaxalert");

//   //if (annual_revenue !== document.activeElement) {revenueCalc();}

//   var year;
//   if (year2021.checked == true) {
//     year = 2021;
//   } else if (year2020.checked == true) {
//     year = 2020;
//   } else if (year2019.checked == true) {
//     year = 2019;
//   } else if (year2018.checked == true) {
//     year = 2018;
//   } else if (year2017.checked == true) {
//     year = 2017;
//   }

//   var str = 0.33; // social tax rate (33%)

//   var socialtax_min;
//   // Riigieelarve seadus - sotsiaalmaksuseaduse § 2.1 alusel kehtestatav sotsiaalmaksu maksmise aluseks olev kuumäär
//   if (year == 2021) {
//     socialtax_min = 192.72;
//   } else if (year == 2020) {
//     socialtax_min = 178.2;
//   } else if (year == 2019) {
//     socialtax_min = 165.0;
//   } else if (year == 2018) {
//     socialtax_min = 155.1;
//   } else if (year == 2017) {
//     socialtax_min = 141.9;
//   }

//   // income tax rate
//   var itr = 0.2;

//   //Tax revenue to local governments
//   var loc = 0.1193; // 1. jaanuarist 2019. a 11,93%   TuMS §5

//   // unemployment insurance premium rates (UIP):

//   // - premium paid by employers
//   var uip1 = 0.008;
//   ui1txt.innerHTML = round(uip1 * 100, 1);
//   // - premium paid by employees
//   var uip2 = 0.016;
//   ui2txt.innerHTML = round(uip2 * 100, 1);

//   uip1 = ui1_x.checked ? uip1 : 0;
//   uip2 = ui2_x.checked ? uip2 : 0;

//   // funded pension withholding from salary (fp1) and from social tax (fp2)
//   var fp1;
//   fp1 = 0.02; // 2%
//   var fp2;
//   if (year == 2021) {
//     fp2 = 0;
//   } else {
//     fp2 = 0.04;
//   } // 4%

//   // Annual, monthly, hourly?
//   if (period == 1) {
//     workhours = workhours;
//   } else {
//     workhours = 1;
//   }

//   var nper;
//   if (period == 3) {
//     nper = 12;
//   } else {
//     nper = 1;
//   }

//   // tax-free minimum (TFM)
//   var tfm;
//   var tfm2018;
//   if (document.getElementById("F1").checked) {
//     if ((tfs_1 * nper) / i > (500 * nper) / i) tfm2018 = 500;
//     else if (tfs_1 < 0) tfm2018 = 0;
//     else tfm2018 = round(tfs_1 * nper, 2);
//   } else if (document.getElementById("F2").checked) {
//     if (annual_revenue > 25200) tfm2018 = 0;
//     else if (annual_revenue < 14400) tfm2018 = (6000 * nper) / 12;
//     else
//       tfm2018 = round(
//         (round(6000 - (6000 * (annual_revenue - 14400)) / 10800, 2) * nper) /
//           12,
//         2
//       );
//   }
//   //if 		(year == 2007) {itr = itr_07; tfm = 2000;}
//   if (year >= 2018) {
//     tfm = tfm2018 * 1;
//     tfmtxt.innerHTML = taxfree_x.checked ? tfm : 0;
//   } else if (year == 2017) {
//     tfm = 180 * nper;
//     tfmtxt.innerHTML = 180 * nper;
//   } else if (year == 2016) {
//     tfm = 170 * nper;
//     tfmtxt.innerHTML = 170 * nper;
//   } else {
//     tfm = 143.8 * nper;
//     tfmtxt.innerHTML = 143.8 * nper;
//   }

//   var taxfree;
//   taxfree = taxfree_x.checked ? tfm : 0;

//   //CALCULATION BASE SUM

//   var sum;
//   sum = eur * workhours;

//   //funded pension checked?
//   fp1 = pension_x.checked ? fp1 : 0; //
//   fp2 = pension_x.checked ? fp2 : 0; //withholding

//   var income_tax_rate;
//   income_tax_rate = sum - taxfree <= 0 ? 0 : itr;

//   if (input_1.checked == true) {
//     if (socialtax_x.checked == true && sum < socialtax_min)
//       grosswage.value = "NaN";
//     else if (
//       socialtax_x.checked == true &&
//       sum < (socialtax_min / str) * (1 + str + 1 * uip1)
//     )
//       grosswage.value = round((sum - socialtax_min) / (1 + 1 * uip1), 2);
//     //	if 	(sum < socialtax_min) && (sum*(1 + str + 1 * uip1) < (socialtax_min/0.33)) && (socialtax_x.checked == true)) grosswage.value = round((sum - socialtax_min) / (1 + 1 * uip1), 2);
//     else grosswage.value = round(sum / (1 + str + 1 * uip1), 2);
//   } else if (input_2.checked == true) grosswage.value = round(sum, 2);
//   else if (input_3.checked == true)
//     grosswage.value = round(
//       ((sum - taxfree) / (1 - income_tax_rate) + taxfree) /
//         (1 - (fp1 + 1 * uip2)),
//       2
//     ); //funded pension payment paid by employee

//   if (
//     input_1.checked == true &&
//     socialtax_x.checked == true &&
//     sum < socialtax_min
//   )
//     socialtax.value = "NaN";
//   else if (
//     input_1.checked == true &&
//     socialtax_x.checked == true &&
//     sum < (socialtax_min / str) * (1 + str + 1 * uip1)
//   )
//     socialtax.value = round(socialtax_min, 2);
//   else if (socialtax_x.checked == true && grosswage.value * str < socialtax_min)
//     socialtax.value = round(socialtax_min, 2);
//   else socialtax.value = round(grosswage.value * str, 2);
//   ui_employer.value = round(grosswage.value * 1 * uip1, 2);
//   ui_employee.value = round(grosswage.value * 1 * uip2, 2);
//   fpp_1.value = round(grosswage.value * fp1, 2);

//   // calculate income tax
//   if (grosswage.value < taxfree + grosswage.value * (1 * uip2 + fp1)) {
//     incometax.value = round(0, 2);
//     //netwageChange.value = (round((grosswage.value-ui_employee.value-fpp_1.value-(180 * nper))*itr, 2)>0) ? "+"+round((grosswage.value-ui_employee.value-fpp_1.value-(180 * nper))*itr, 2) : "0.00";
//   } else {
//     incometax.value = round(
//       (grosswage.value - ui_employee.value - fpp_1.value - taxfree) * itr,
//       2
//     );
//     //netwageChange.value = (round((taxfree-(180 * nper))*itr, 2) > 0) ? "+"+round((taxfree-(180 * nper))*itr, 2) : round((taxfree-(180 * nper))*itr, 2);
//   }
//   netwage.value = round(
//     grosswage.value - ui_employee.value - fpp_1.value - incometax.value,
//     2
//   ); // calculate net wage
//   wagefund.value = round(
//     1 * grosswage.value + 1 * ui_employer.value + 1 * socialtax.value,
//     2
//   ); // calculate wage fund

//   // Pie chart values
//   localtaxes.value = round(1 * grosswage.value * loc, 2); // local taxes
//   pension.value = round(grosswage.value * (fp1 + fp2), 2);
//   taxes.value = round(
//     1 * ui_employer.value +
//       1 * ui_employee.value +
//       1 * socialtax.value +
//       1 * incometax.value -
//       1 * grosswage.value * fp2 -
//       1 * localtaxes.value,
//     2
//   ); // calculate taxes*/

//   //Percent values
//   if (pct1.checked == true) {
//     socialtax_pct.value = round((100 * socialtax.value) / wagefund.value, 2);
//     socialtax_pct.value = socialtax_pct.value || 0;
//     grosswage_pct.value = round((100 * grosswage.value) / wagefund.value, 2);
//     ui_employer_pct.value = round(
//       (100 * ui_employer.value) / wagefund.value,
//       2
//     );
//     ui_employee_pct.value = round(
//       (100 * ui_employee.value) / wagefund.value,
//       2
//     );
//     fpp_1_pct.value = round((100 * fpp_1.value) / wagefund.value, 2);
//     incometax_pct.value = round((100 * incometax.value) / wagefund.value, 2);
//     netwage_pct.value = round((100 * netwage.value) / wagefund.value, 2);
//     wagefund_pct.value = round((100 * wagefund.value) / wagefund.value, 2);
//   }
//   if (pct2.checked == true) {
//     socialtax_pct.value = round((100 * socialtax.value) / grosswage.value, 2);
//     grosswage_pct.value = round((100 * grosswage.value) / grosswage.value, 2);
//     ui_employer_pct.value = round(
//       (100 * ui_employer.value) / grosswage.value,
//       2
//     );
//     ui_employee_pct.value = round(
//       (100 * ui_employee.value) / grosswage.value,
//       2
//     );
//     fpp_1_pct.value = round((100 * fpp_1.value) / grosswage.value, 2);
//     incometax_pct.value = round((100 * incometax.value) / grosswage.value, 2);
//     netwage_pct.value = round((100 * netwage.value) / grosswage.value, 2);
//     wagefund_pct.value = round((100 * wagefund.value) / grosswage.value, 2);
//   }
//   if (pct3.checked == true) {
//     socialtax_pct.value = round((100 * socialtax.value) / netwage.value, 2);
//     grosswage_pct.value = round((100 * grosswage.value) / netwage.value, 2);
//     ui_employer_pct.value = round((100 * ui_employer.value) / netwage.value, 2);
//     ui_employee_pct.value = round((100 * ui_employee.value) / netwage.value, 2);
//     fpp_1_pct.value = round((100 * fpp_1.value) / netwage.value, 2);
//     incometax_pct.value = round((100 * incometax.value) / netwage.value, 2);
//     netwage_pct.value = round((100 * netwage.value) / netwage.value, 2);
//     wagefund_pct.value = round((100 * wagefund.value) / netwage.value, 2);
//   }
// }

// function resetAlert() {
//   var sta = document.getElementById("socialtaxalert");

//   sta.style.display = "none";
// }
// function displayAlert() {
//   var eur = getFieldFloatValue("eur");
//   var sum;
//   var workhours = getFieldFloatValue("workhours");
//   var period = getFieldFloatValue("period");
//   if (period == 1) {
//     workhours = workhours;
//   } else {
//     workhours = 1;
//   }
//   sum = eur * workhours;
//   var sta = document.getElementById("socialtaxalert");
//   var input_1 = document.getElementById("input_1");
//   var socialtax_x = document.getElementById("socialtax_x");
//   var year2017 = document.getElementById("year2017");
//   var year2018 = document.getElementById("year2018");
//   var year2019 = document.getElementById("year2019");
//   var year2020 = document.getElementById("year2020");
//   var year2021 = document.getElementById("year2021");
//   var year;
//   if (year2021.checked == true) {
//     year = 2021;
//   } else if (year2020.checked == true) {
//     year = 2020;
//   } else if (year2019.checked == true) {
//     year = 2019;
//   } else if (year2018.checked == true) {
//     year = 2018;
//   } else if (year2017.checked == true) {
//     year = 2017;
//   }
//   var socialtax_min;
//   if (year == 2021) {
//     socialtax_min = 192.72;
//   } else if (year == 2020) {
//     socialtax_min = 178.2;
//   } else if (year == 2019) {
//     socialtax_min = 165.0;
//   } else if (year == 2018) {
//     socialtax_min = 155.1;
//   } else if (year == 2017) {
//     socialtax_min = 141.9;
//   }

//   if (
//     sum * 1 < socialtax_min &&
//     input_1.checked == true &&
//     socialtax_x.checked == true
//   ) {
//     sta.style.display = "block";
//   } else {
//     sta.style.display = "none";
//   }
// }
// function outputCalc() {
//   revenueCalc();
//   wageCalc();
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
// function getFieldFloatValue(fieldId) {
//   return parseFloat(
//     document
//       .getElementById(fieldId)
//       .value.replace(",", ".")
//       .replace(/\s/g, "")
//   );
// }
