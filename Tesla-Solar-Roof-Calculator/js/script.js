// Declare variables

// Input fields

var totalHomeSqftInput = $("#total-home-sqft-input");
var calcRoofSqftInput = $("#calculated-roof-sqft-input").prop("disabled", true);
var annualKwInput = $("#annual-kwh-input");
var calcKwInput = $("#calculated-kw-input").prop("disabled", true);
var systemSizeInput = $("#system-size-input").prop("disabled", true);
var roofCompInput = $("#roof-complexity-input");
var pwrWallBattInput = $("#powerwall-battery-input").prop("disabled", true);
var pwrWallBattInput = $("#powerwall-battery-input").prop("disabled", true);
var totalCostInput = $("#total-cost-input").prop("disabled", true);

// ITC fields

var roofPriceBeforeItc = $("#roof-price-before-itc").prop("disabled", true);
var estTotalBeforeItc = $("#est-total-before-itc").prop("disabled", true);
var estItc = $("#est-itc").prop("disabled", true);
var pwrWallPriceBeforeItc = $("#powerwall-price-before-itc").prop(
  "disabled",
  true
);

// Button fields

var pwrWallBattPlusBtn = $("#powerwall-battery-plus-btn");
var pwrWallBattMinusBtn = $("#powerwall-battery-minus-btn");

/**** Calc Form Section 1 Calculations ****/

// Calculate roof sqaure footage

$(document).ready(function () {
  totalHomeSqftInput.on("input", function () {
    calcRoofSqftInput.val((this.value * 2).toFixed(0));
  });
});

// Calculate kilowatt and system size

$(document).ready(function () {
  annualKwInput.on("input", function () {
    calcKwInput.val((this.value / 1400).toFixed(1));

    if (calcKwInput.val() <= 4.0) {
      systemSizeInput.val(4.0 + " kW");
    } else if (calcKwInput.val() > 4.0 && calcKwInput.val() < 4.5) {
      systemSizeInput.val(4.5 + " kW");
    } else if (calcKwInput.val() == 4.5) {
      systemSizeInput.val(4.5 + " kW");
    } else if (calcKwInput.val() > 4.5 && calcKwInput.val() < 5.0) {
      systemSizeInput.val(5.0 + " kW");
    } else if (calcKwInput.val() == 5.0) {
      systemSizeInput.val(5.0 + " kW");
    } else if (calcKwInput.val() > 5.0 && calcKwInput.val() < 5.5) {
      systemSizeInput.val(5.5 + " kW");
    } else if (calcKwInput.val() == 5.5) {
      systemSizeInput.val(5.5 + " kW");
    } else if (calcKwInput.val() > 5.5 && calcKwInput.val() < 6.0) {
      systemSizeInput.val(6.0 + " kW");
    } else if (calcKwInput.val() == 6.0) {
      systemSizeInput.val(6.0 + " kW");
    } else if (calcKwInput.val() > 6.0 && calcKwInput.val() < 6.5) {
      systemSizeInput.val(6.5 + " kW");
    } else if (calcKwInput.val() == 6.5) {
      systemSizeInput.val(6.5 + " kW");
    } else if (calcKwInput.val() > 6.5 && calcKwInput.val() < 7.0) {
      systemSizeInput.val(7.0 + " kW");
    } else if (calcKwInput.val() == 7.0) {
      systemSizeInput.val(7.0 + " kW");
    } else if (calcKwInput.val() > 7.0 && calcKwInput.val() < 7.5) {
      systemSizeInput.val(7.5 + " kW");
    } else if (calcKwInput.val() == 7.5) {
      systemSizeInput.val(7.5 + " kW");
    } else if (calcKwInput.val() > 7.5 && calcKwInput.val() < 8.0) {
      systemSizeInput.val(8.0 + " kW");
    } else if (calcKwInput.val() == 8.0) {
      systemSizeInput.val(8.0 + " kW");
    } else if (calcKwInput.val() > 8.0 && calcKwInput.val() < 8.5) {
      systemSizeInput.val(8.5 + " kW");
    } else if (calcKwInput.val() == 8.5) {
      systemSizeInput.val(8.5 + " kW");
    } else if (calcKwInput.val() > 8.5 && calcKwInput.val() < 9.0) {
      systemSizeInput.val(9.0 + " kW");
    } else if (calcKwInput.val() == 9.5) {
      systemSizeInput.val(9.5 + " kW");
    } else if (calcKwInput.val() > 9.5 && calcKwInput.val() < 10.0) {
      systemSizeInput.val(10.0 + " kW");
    } else if (calcKwInput.val() == 10.0) {
      systemSizeInput.val(10.0 + " kW");
    } else if (calcKwInput.val() > 10.0 && calcKwInput.val() < 10.5) {
      systemSizeInput.val(10.5 + " kW");
    } else if (calcKwInput.val() == 10.5) {
      systemSizeInput.val(10.5 + " kW");
    } else if (calcKwInput.val() > 10.5 && calcKwInput.val() < 11.0) {
      systemSizeInput.val(11.0 + " kW");
    } else if (calcKwInput.val() == 11.0) {
      systemSizeInput.val(11.0 + " kW");
    } else if (calcKwInput.val() > 11.0 && calcKwInput.val() < 11.5) {
      systemSizeInput.val(11.5 + " kW");
    } else if (calcKwInput.val() == 11.5) {
      systemSizeInput.val(11.5 + " kW");
    } else if (calcKwInput.val() > 11.5 && calcKwInput.val() < 12.0) {
      systemSizeInput.val(12.0 + " kW");
    } else if (calcKwInput.val() == 12.0) {
      systemSizeInput.val(12.0 + " kW");
    } else if (calcKwInput.val() > 12.0 && calcKwInput.val() < 12.5) {
      systemSizeInput.val(12.5 + " kW");
    } else if (calcKwInput.val() == 12.5) {
      systemSizeInput.val(12.5 + " kW");
    } else if (calcKwInput.val() > 12.5 && calcKwInput.val() < 13.0) {
      systemSizeInput.val(13.0 + " kW");
    } else if (calcKwInput.val() > 13.0 && calcKwInput.val() < 13.5) {
      systemSizeInput.val(13.5 + " kW");
    } else if (calcKwInput.val() == 13.5) {
      systemSizeInput.val(13.5 + " kW");
    } else if (calcKwInput.val() > 13.5 && calcKwInput.val() < 14.0) {
      systemSizeInput.val(14.0 + " kW");
    } else if (calcKwInput.val() == 14.0) {
      systemSizeInput.val(14.0 + " kW");
    } else if (calcKwInput.val() > 14.0 && calcKwInput.val() < 14.5) {
      systemSizeInput.val(14.5 + " kW");
    } else if (calcKwInput.val() == 14.5) {
      systemSizeInput.val(14.5 + " kW");
    } else if (calcKwInput.val() > 14.5 && calcKwInput.val() < 15.0) {
      systemSizeInput.val(15.0 + " kW");
    } else if (calcKwInput.val() == 15.0) {
      systemSizeInput.val(15.0 + " kW");
    } else if (calcKwInput.val() > 15.0 && calcKwInput.val() < 15.5) {
      systemSizeInput.val(15.5 + " kW");
    } else if (calcKwInput.val() == 15.5) {
      systemSizeInput.val(15.5 + " kW");
    } else if (calcKwInput.val() > 15.5 && calcKwInput.val() < 16.0) {
      systemSizeInput.val(16.0 + " kW");
    } else if (calcKwInput.val() == 16.0) {
      systemSizeInput.val(16.0 + " kW");
    } else if (calcKwInput.val() > 16.0 && calcKwInput.val() < 16.5) {
      systemSizeInput.val(16.5 + " kW");
    } else if (calcKwInput.val() == 16.5) {
      systemSizeInput.val(16.5 + " kW");
    } else if (calcKwInput.val() > 16.5 && calcKwInput.val() < 17.0) {
      systemSizeInput.val(17.0 + " kW");
    } else if (calcKwInput.val() == 17.0) {
      systemSizeInput.val(17.0 + " kW");
    } else if (calcKwInput.val() > 17.0 && calcKwInput.val() < 17.5) {
      systemSizeInput.val(17.5 + " kW");
    } else if (calcKwInput.val() == 17.5) {
      systemSizeInput.val(17.5 + " kW");
    } else if (calcKwInput.val() > 17.5 && calcKwInput.val() < 18.0) {
      systemSizeInput.val(18.0 + " kW");
    } else if (calcKwInput.val() == 18.0) {
      systemSizeInput.val(18.0 + " kW");
    } else if (calcKwInput.val() > 18.0 && calcKwInput.val() < 18.5) {
      systemSizeInput.val(18.5 + " kW");
    } else if (calcKwInput.val() == 18.5) {
      systemSizeInput.val(18.5 + " kW");
    } else if (calcKwInput.val() > 18.5 && calcKwInput.val() < 19.0) {
      systemSizeInput.val(19.0 + " kW");
    } else if (calcKwInput.val() == 19.0) {
      systemSizeInput.val(19.0 + " kW");
    } else if (calcKwInput.val() > 19.0 && calcKwInput.val() < 19.5) {
      systemSizeInput.val(19.5 + " kW");
    } else if (calcKwInput.val() == 19.5) {
      systemSizeInput.val(19.5 + " kW");
    } else if (calcKwInput.val() > 19.5 && calcKwInput.val() < 20.0) {
      systemSizeInput.val(20.0 + " kW");
    } else if (calcKwInput.val() == 20.0) {
      systemSizeInput.val(20.0 + " kw");
    } else if (calcKwInput.val() > 20.0 && calcKwInput.val() < 20.5) {
      systemSizeInput.val(20.5 + " kW");
    } else if (calcKwInput.val() == 20.5) {
      systemSizeInput.val(20.5 + " kW");
    } else if (calcKwInput.val() > 20.5 && calcKwInput.val() < 21.0) {
      systemSizeInput.val(21.0 + " kW");
    } else if (calcKwInput.val() == 21.0) {
      systemSizeInput.val(21.0 + " kW");
    } else if (calcKwInput.val() > 21.0 && calcKwInput.val() < 21.5) {
      systemSizeInput.val(21.5 + " kW");
    } else if (calcKwInput.val() == 21.5) {
      systemSizeInput.val(21.5 + " kW");
    } else if (calcKwInput.val() > 21.5 && calcKwInput.val() < 22.0) {
      systemSizeInput.val(22.0 + " kW");
    } else if (calcKwInput.val() == 22.0) {
      systemSizeInput.val(22.0 + " kW");
    } else if (calcKwInput.val() > 22.0 && calcKwInput.val() < 22.5) {
      systemSizeInput.val(22.5 + " kW");
    } else if (calcKwInput.val() == 22.5) {
      systemSizeInput.val(22.5 + " kW");
    } else if (calcKwInput.val() > 22.5 && calcKwInput.val() < 23.0) {
      systemSizeInput.val(23.0 + " kW");
    } else if (calcKwInput.val() == 23.0) {
      systemSizeInput.val(23.0 + " kW");
    } else if (calcKwInput.val() > 23.0 && calcKwInput.val() < 23.5) {
      systemSizeInput.val(23.5 + " kW");
    } else if (calcKwInput.val() == 23.5) {
      systemSizeInput.val(23.5 + " kW");
    } else if (calcKwInput.val() > 23.5 && calcKwInput.val() < 24.0) {
      systemSizeInput.val(24.0 + " kW");
    } else if (calcKwInput.val() == 24.0) {
      systemSizeInput.val(24.0 + " kW");
    } else if (calcKwInput.val() > 24.0 && calcKwInput.val() < 24.5) {
      systemSizeInput.val(24.5 + " kW");
    } else if (calcKwInput.val() == 24.5) {
      systemSizeInput.val(24.5 + " kW");
    } else if (calcKwInput.val() > 24.5 && calcKwInput.val() < 25.0) {
      systemSizeInput.val(25.0 + " kW");
    } else if (calcKwInput.val() == 25.0) {
      systemSizeInput.val(25.0 + " kW");
    } else if (calcKwInput.val() > 25.0 && calcKwInput.val() < 25.5) {
      systemSizeInput.val(25.5 + " kW");
    } else if (calcKwInput.val() == 25.5) {
      systemSizeInput.val(25.5 + " kW");
    } else if (calcKwInput.val() > 25.5 && calcKwInput.val() < 26.0) {
      systemSizeInput.val(26.0 + " kW");
    } else if (calcKwInput.val() == 26.0) {
      systemSizeInput.val(26.0 + " kW");
    } else if (calcKwInput.val() > 26.0 && calcKwInput.val() < 26.5) {
      systemSizeInput.val(26.5 + " kW");
    } else if (calcKwInput.val() == 26.5) {
      systemSizeInput.val(26.5 + " kW");
    } else if (calcKwInput.val() > 26.5 && calcKwInput.val() < 27.0) {
      systemSizeInput.val(27.0 + " kW");
    } else if (calcKwInput.val() == 27.0) {
      systemSizeInput.val(27.0 + " kW");
    } else if (calcKwInput.val() > 27.0 && calcKwInput.val() < 27.5) {
      systemSizeInput.val(27.5 + " kW");
    } else if (calcKwInput.val() == 27.5) {
      systemSizeInput.val(27.5 + " kW");
    } else if (calcKwInput.val() > 27.5 && calcKwInput.val() < 28.0) {
      systemSizeInput.val(28.0 + " kW");
    } else if (calcKwInput.val() == 28.0) {
      systemSizeInput.val(28.0 + " kW");
    } else if (calcKwInput.val() > 28.0 && calcKwInput.val() < 28.5) {
      systemSizeInput.val(28.5 + " kW");
    } else if (calcKwInput.val() == 28.5) {
      systemSizeInput.val(28.5 + " kW");
    } else if (calcKwInput.val() > 28.5 && calcKwInput.val() < 29.0) {
      systemSizeInput.val(29.0 + " kW");
    } else if (calcKwInput.val() == 29.0) {
      systemSizeInput.val(29.0 + " kW");
    } else if (calcKwInput.val() > 29.0 && calcKwInput.val() < 29.5) {
      systemSizeInput.val(29.5 + " kW");
    } else if (calcKwInput.val() == 29.5) {
      systemSizeInput.val(29.5 + " kW");
    } else if (calcKwInput.val() > 29.5 && calcKwInput.val() < 30.0) {
      systemSizeInput.val(30.0 + " kW");
    } else if (calcKwInput.val() == 30.0) {
      systemSizeInput.val(30.0 + " kW");
    } else if (calcKwInput.val() > 30.0 && calcKwInput.val() < 30.5) {
      systemSizeInput.val(30.5 + " kW");
    } else if (calcKwInput.val() == 30.5) {
      systemSizeInput.val(30.5 + " kW");
    } else if (calcKwInput.val() > 30.5 && calcKwInput.val() < 40.0) {
      systemSizeInput.val(40.0 + " kW");
    } else if (calcKwInput.val() == 40.0) {
      systemSizeInput.val(40.0 + " kW");
    } else if (calcKwInput.val() > 40.0 && calcKwInput.val() < 40.5) {
      systemSizeInput.val(40.5 + " kW");
    } else if (calcKwInput.val() == 40.5) {
      systemSizeInput.val(40.5 + " kW");
    } else if (calcKwInput.val() > 40.5 && calcKwInput.val() < 50.0) {
      systemSizeInput.val(50.0 + " kW");
    } else if (calcKwInput.val() == 50.0) {
      systemSizeInput.val(50.0 + " kW");
    } else if (calcKwInput.val() > 50.0 && calcKwInput.val() < 50.5) {
      systemSizeInput.val(50.5 + " kW");
    } else if (calcKwInput.val() == 50.5) {
      systemSizeInput.val(50.5 + " kW");
    } else if (calcKwInput.val() > 50.5 && calcKwInput.val() < 60.0) {
      systemSizeInput.val(60.0 + " kW");
    } else if (calcKwInput.val() == 60.0) {
      systemSizeInput.val(60.0 + " kW");
    } else if (calcKwInput.val() > 60.0 && calcKwInput.val() < 60.5) {
      systemSizeInput.val(60.5 + " kW");
    } else if (calcKwInput.val() == 60.5) {
      systemSizeInput.val(60.6 + " kW");
    } else if (calcKwInput.val() > 60.5 && calcKwInput.val() < 70.0) {
      systemSizeInput.val(70.0 + " kW");
    } else if (calcKwInput.val() == 70.0) {
      systemSizeInput.val(70.0 + " kW");
    } else if (calcKwInput.val() > 70.0 && calcKwInput.val() < 70.5) {
      systemSizeInput.val(70.5 + " kW");
    } else if (calcKwInput.val() == 70.5) {
      systemSizeInput.val(70.5 + " kW");
    } else if (calcKwInput.val() > 70.5 && calcKwInput.val() < 71.0) {
      systemSizeInput.val(71.0 + " kW");
    } else if (calcKwInput.val() == 71.0) {
      systemSizeInput.val(71.0 + " kW");
    } else if (calcKwInput.val() > 71.0 && calcKwInput.val() < 71.5) {
      systemSizeInput.val(71.5 + " kW");
    } else if (calcKwInput.val() == 71.5) {
      systemSizeInput.val(71.5 + " kW");
    } else if (calcKwInput.val() > 71.5 && calcKwInput.val() < 72.0) {
      systemSizeInput.val(72.0 + " kW");
    } else if (calcKwInput.val() == 72.0) {
      systemSizeInput.val(72.0 + " kW");
    } else if (calcKwInput.val() > 72.0 && calcKwInput.val() < 72.5) {
      systemSizeInput.val(72.5 + " kW");
    } else if (calcKwInput.val() == 72.5) {
      systemSizeInput.val(72.5 + " kW");
    } else if (calcKwInput.val() > 72.5 && calcKwInput.val() < 73.0) {
      systemSizeInput.val(73.0 + " kW");
    } else if (calcKwInput.val() == 73.0) {
      systemSizeInput.val(73.0 + " kW");
    } else if (calcKwInput.val() > 73.0 && calcKwInput.val() < 73.5) {
      systemSizeInput.val(73.5 + " kW");
    } else if (calcKwInput.val() == 73.5) {
      systemSizeInput.val(73.5 + " kW");
    } else if (calcKwInput.val() > 73.5 && calcKwInput.val() < 74.0) {
      systemSizeInput.val(74.0 + " kW");
    } else if (calcKwInput.val() == 74.0) {
      systemSizeInput.val(74.0 + " kW");
    } else if (calcKwInput.val() > 74.0 && calcKwInput.val() < 74.5) {
      systemSizeInput.val(74.5 + " kW");
    } else if (calcKwInput.val() == 74.5) {
      systemSizeInput.val(74.5 + " kW");
    } else if (calcKwInput.val() > 74.5 && calcKwInput.val() < 75.0) {
      systemSizeInput.val(75.0 + " kW");
    } else if (calcKwInput.val() == 75.0) {
      systemSizeInput.val(75.0 + " kW");
    } else if (calcKwInput.val() > 75.0 && calcKwInput.val() < 75.5) {
      systemSizeInput.val(75.5 + " kW");
    } else if (calcKwInput.val() == 75.5) {
      systemSizeInput.val(75.5 + " kW");
    } else if (calcKwInput.val() > 75.5 && calcKwInput.val() < 80.0) {
      systemSizeInput.val(80.0 + " kW");
    } else if (calcKwInput.val() == 80.0) {
      systemSizeInput.val(80.0 + " kW");
    } else if (calcKwInput.val() > 80.0 && calcKwInput.val() < 80.5) {
      systemSizeInput.val(80.5 + " kW");
    } else if (calcKwInput.val() == 80.5) {
      systemSizeInput.val(80.5 + " kW");
    } else if (calcKwInput.val() > 80.5 && calcKwInput.val() < 81.0) {
      systemSizeInput.val(81.0 + " kW");
    } else if (calcKwInput.val() == 81.0) {
      systemSizeInput.val(81.0 + " kW");
    } else if (calcKwInput.val() > 81.0 && calcKwInput.val() < 81.5) {
      systemSizeInput.val(81.5 + " kW");
    } else if (calcKwInput.val() == 81.5) {
      systemSizeInput.val(81.5 + " kW");
    } else if (calcKwInput.val() > 81.5 && calcKwInput.val() < 82.0) {
      systemSizeInput.val(82.0 + " kW");
    } else if (calcKwInput.val() == 82.0) {
      systemSizeInput.val(82.0 + " kW");
    } else if (calcKwInput.val() > 82.0 && calcKwInput.val() < 82.5) {
      systemSizeInput.val(82.5 + " kW");
    } else if (calcKwInput.val() == 82.5) {
      systemSizeInput.val(82.5 + " kW");
    } else if (calcKwInput.val() > 82.5 && calcKwInput.val() < 83.0) {
      systemSizeInput.val(83.0 + " kW");
    } else if (calcKwInput.val() == 83.0) {
      systemSizeInput.val(83.0 + " kW");
    } else if (calcKwInput.val() > 83.0 && calcKwInput.val() < 83.5) {
      systemSizeInput.val(83.5 + " kW");
    } else if (calcKwInput.val() == 83.5) {
      systemSizeInput.val(83.5 + " kW");
    } else if (calcKwInput.val() > 83.5 && calcKwInput.val() < 84.0) {
      systemSizeInput.val(84.0 + " kW");
    } else if (calcKwInput.val() == 84.0) {
      systemSizeInput.val(84.0 + " kW");
    } else if (calcKwInput.val() > 84.0 && calcKwInput.val() < 84.5) {
      systemSizeInput.val(84.5 + " kW");
    } else if (calcKwInput.val() == 84.5) {
      systemSizeInput.val(84.5 + " kW");
    } else if (calcKwInput.val() > 84.5 && calcKwInput.val() < 85.0) {
      systemSizeInput.val(85.0 + " kW");
    } else if (calcKwInput.val() == 85.0) {
      systemSizeInput.val(85.0 + " kW");
    } else if (calcKwInput.val() > 85.0 && calcKwInput.val() < 85.5) {
      systemSizeInput.val(85.5 + " kW");
    } else if (calcKwInput.val() == 85.5) {
      systemSizeInput.val(85.5 + " kW");
    } else if (calcKwInput.val() > 85.5 && calcKwInput.val() < 86.0) {
      systemSizeInput.val(86.0 + " kW");
    } else if (calcKwInput.val() == 86.0) {
      systemSizeInput.val(86.0 + " kW");
    } else if (calcKwInput.val() > 86.0 && calcKwInput.val() < 86.5) {
      systemSizeInput.val(86.5 + " kW");
    } else if (calcKwInput.val() == 86.5) {
      systemSizeInput.val(86.5 + " kW");
    } else if (calcKwInput.val() > 86.5 && calcKwInput.val() < 87.0) {
      systemSizeInput.val(87.0 + " kW");
    } else if (calcKwInput.val() == 87.0) {
      systemSizeInput.val(876.0 + " kW");
    } else if (calcKwInput.val() > 87.0 && calcKwInput.val() < 87.5) {
      systemSizeInput.val(87.5 + " kW");
    } else if (calcKwInput.val() == 87.5) {
      systemSizeInput.val(87.5 + " kW");
    } else if (calcKwInput.val() > 87.5 && calcKwInput.val() < 88.0) {
      systemSizeInput.val(88.0 + " kW");
    } else if (calcKwInput.val() == 88.0) {
      systemSizeInput.val(88.0 + " kW");
    } else if (calcKwInput.val() > 88.5 && calcKwInput.val() < 89.0) {
      systemSizeInput.val(89.0 + " kW");
    } else if (calcKwInput.val() == 89.0) {
      systemSizeInput.val(89.0 + " kW");
    } else if (calcKwInput.val() > 89.0 && calcKwInput.val() < 89.5) {
      systemSizeInput.val(89.5 + " kW");
    } else if (calcKwInput.val() == 89.5) {
      systemSizeInput.val(89.5 + " kW");
    } else if (calcKwInput.val() > 89.5 && calcKwInput.val() < 90.0) {
      systemSizeInput.val(90.0 + " kW");
    } else if (calcKwInput.val() == 90.0) {
      systemSizeInput.val(90.0 + " kW");
    } else if (calcKwInput.val() > 90.0 && calcKwInput.val() < 90.5) {
      systemSizeInput.val(90.5 + " kW");
    } else if (calcKwInput.val() == 90.5) {
      systemSizeInput.val(90.5 + " kW");
    } else if (calcKwInput.val() > 90.5 && calcKwInput.val() < 91.0) {
      systemSizeInput.val(91.0 + " kW");
    } else if (calcKwInput.val() == 91.0) {
      systemSizeInput.val(91.0 + " kW");
    } else if (calcKwInput.val() > 91.0 && calcKwInput.val() < 91.5) {
      systemSizeInput.val(91.5 + " kW");
    } else if (calcKwInput.val() == 91.5) {
      systemSizeInput.val(91.5 + " kW");
    } else if (calcKwInput.val() > 91.5 && calcKwInput.val() < 92.0) {
      systemSizeInput.val(92.0 + " kW");
    } else if (calcKwInput.val() == 92.0) {
      systemSizeInput.val(92.0 + " kW");
    } else if (calcKwInput.val() > 92.0 && calcKwInput.val() < 92.5) {
      systemSizeInput.val(92.5 + " kW");
    } else if (calcKwInput.val() == 92.5) {
      systemSizeInput.val(92.5 + " kW");
    } else if (calcKwInput.val() > 92.5 && calcKwInput.val() < 93.0) {
      systemSizeInput.val(93.0 + " kW");
    } else if (calcKwInput.val() == 93.0) {
      systemSizeInput.val(93.0 + " kW");
    } else if (calcKwInput.val() > 93.0 && calcKwInput.val() < 93.5) {
      systemSizeInput.val(93.5 + " kW");
    } else if (calcKwInput.val() == 93.5) {
      systemSizeInput.val(93.5 + " kW");
    } else if (calcKwInput.val() > 93.5 && calcKwInput.val() < 94.0) {
      systemSizeInput.val(94.0 + " kW");
    } else if (calcKwInput.val() == 94.0) {
      systemSizeInput.val(94.0 + " kW");
    } else if (calcKwInput.val() > 94.0 && calcKwInput.val() < 94.5) {
      systemSizeInput.val(94.5 + " kW");
    } else if (calcKwInput.val() == 94.5) {
      systemSizeInput.val(94.5 + " kW");
    } else if (calcKwInput.val() > 94.5 && calcKwInput.val() < 95.0) {
      systemSizeInput.val(95.0 + " kW");
    } else if (calcKwInput.val() == 95.0) {
      systemSizeInput.val(95.0 + " kW");
    } else if (calcKwInput.val() > 95.0 && calcKwInput.val() < 95.5) {
      systemSizeInput.val(95.5 + " kW");
    } else if (calcKwInput.val() == 95.5) {
      systemSizeInput.val(95.5 + " kW");
    } else if (calcKwInput.val() > 95.5 && calcKwInput.val() < 96.0) {
      systemSizeInput.val(96.0 + " kW");
    } else if (calcKwInput.val() == 96.0) {
      systemSizeInput.val(96.0 + " kW");
    } else if (calcKwInput.val() > 96.0 && calcKwInput.val() < 96.5) {
      systemSizeInput.val(96.5 + " kW");
    } else if (calcKwInput.val() == 96.5) {
      systemSizeInput.val(96.5 + " kW");
    } else if (calcKwInput.val() > 96.5 && calcKwInput.val() < 97.0) {
      systemSizeInput.val(97.0 + " kW");
    } else if (calcKwInput.val() == 97.0) {
      systemSizeInput.val(97.0 + " kW");
    } else if (calcKwInput.val() > 97.0 && calcKwInput.val() < 97.5) {
      systemSizeInput.val(97.5 + " kW");
    } else if (calcKwInput.val() == 97.5) {
      systemSizeInput.val(97.5 + " kW");
    } else if (calcKwInput.val() > 97.5 && calcKwInput.val() < 98.0) {
      systemSizeInput.val(98.0 + " kW");
    } else if (calcKwInput.val() == 98.0) {
      systemSizeInput.val(98.0 + " kW");
    } else if (calcKwInput.val() > 98.0 && calcKwInput.val() < 98.5) {
      systemSizeInput.val(98.5 + " kW");
    } else if (calcKwInput.val() == 98.5) {
      systemSizeInput.val(98.5 + " kW");
    } else if (calcKwInput.val() > 98.5 && calcKwInput.val() < 99.0) {
      systemSizeInput.val(99.0 + " kW");
    } else if (calcKwInput.val() == 99.0) {
      systemSizeInput.val(99.0 + " kW");
    } else if (calcKwInput.val() > 99.0 && calcKwInput.val() < 99.5) {
      systemSizeInput.val(99.5 + " kW");
    } else if (calcKwInput.val() == 99.5) {
      systemSizeInput.val(99.5 + " kW");
    } else if (calcKwInput.val() > 99.5 && calcKwInput.val() < 100.0) {
      systemSizeInput.val(100.0 + " kW");
    } else if (calcKwInput.val() == 100.0) {
      systemSizeInput.val(100.0 + " kW");
    } else if (calcKwInput.val() > 100.0) {
      systemSizeInput.val(0);
      setTimeout(() => {
        alert(
          "System Size cannot be higher than 100.0 kW!\nContact Elliott Roofing!"
        );
      }, 1000);
    }
  });
});

/**** Calc Form Section 2 Calculations ****/

// Use roof complexity type to calculate solar roof price before incentive

$(document).ready(function () {
  roofCompInput.change(function () {
    if (roofCompInput.prop("selectedIndex") == 1) {
      Number(
        roofPriceBeforeItc.val(
          (
            +calcRoofSqftInput.val() * 18 +
            2000 * +systemSizeInput.val().replace(" kW", "")
          ).toFixed(2)
        )
      ).toFixed(2);

      if (roofPriceBeforeItc.val() !== 0 && pwrWallPriceBeforeItc.val() == 0) {
        pwrWallPriceBeforeItc.val((0).toFixed(2));
        estTotalBeforeItc.val(Number(+roofPriceBeforeItc.val()).toFixed(2));
        estItc.val(Number(0.26 * +estTotalBeforeItc.val()).toFixed(2));
        totalCostInput.val(
          "$" + Number(+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
        );
      }
    } else if (roofCompInput.prop("selectedIndex") == 2) {
      Number(
        roofPriceBeforeItc.val(
          (
            +calcRoofSqftInput.val() * 20 +
            2000 * +systemSizeInput.val().replace(" kW", "")
          ).toFixed(2)
        )
      ).toFixed(2);

      if (roofPriceBeforeItc.val() !== 0 && pwrWallPriceBeforeItc.val() == 0) {
        pwrWallPriceBeforeItc.val((0).toFixed(2));
        estTotalBeforeItc.val(Number(+roofPriceBeforeItc.val()).toFixed(2));
        estItc.val(Number(0.26 * +estTotalBeforeItc.val()).toFixed(2));
        totalCostInput.val(
          "$" + Number(+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
        );
      }
    } else if (roofCompInput.prop("selectedIndex") == 3) {
      Number(
        roofPriceBeforeItc.val(
          (
            +calcRoofSqftInput.val() * 24 +
            2000 * +systemSizeInput.val().replace(" kW", "")
          ).toFixed(2)
        )
      ).toFixed(2);

      if (roofPriceBeforeItc.val() !== 0 && pwrWallPriceBeforeItc.val() == 0) {
        pwrWallPriceBeforeItc.val((0).toFixed(2));
        estTotalBeforeItc.val(Number(+roofPriceBeforeItc.val()).toFixed(2));
        estItc.val(Number(0.26 * +estTotalBeforeItc.val()).toFixed(2));
        totalCostInput.val(
          "$" + Number(+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
        );
      }
    }
  });
});

/* PowerWall Battery Section - Optional */

// Powerwall battery plus button function

pwrWallBattPlusBtn.click(function () {
  if (pwrWallBattInput.val() < 10) {
    pwrWallBattInput.get(0).value++;
  }
});

// Powerwall battery minus button function

pwrWallBattMinusBtn.click(function () {
  if (pwrWallBattInput.val() > 0) {
    pwrWallBattInput.get(0).value--;
  }
});

// Calculate powerwall price before incentive, estimated total before incentive, & estimated incentive

pwrWallBattPlusBtn.click(function () {
  if (pwrWallBattInput.val() == 0) {
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  } else if (pwrWallBattInput.val() == 1) {
    pwrWallPriceBeforeItc.val((16700).toFixed(2));
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  } else if (pwrWallBattInput.val() > 1) {
    pwrWallPriceBeforeItc.val(
      (16700 + (+pwrWallBattInput.val() - 1) * 12810).toFixed(2)
    );
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  }
});

pwrWallBattMinusBtn.click(function () {
  if (pwrWallBattInput.val() == 0) {
    pwrWallPriceBeforeItc.val(0);
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  } else if (pwrWallBattInput.val() == 1) {
    pwrWallPriceBeforeItc.val((16700).toFixed(2));
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  } else if (pwrWallBattInput.val() > 1) {
    pwrWallPriceBeforeItc.val(
      (12810 * (+pwrWallBattInput.val() - 1) + 16700).toFixed(2)
    );
    estTotalBeforeItc.val(
      (+roofPriceBeforeItc.val() + +pwrWallPriceBeforeItc.val()).toFixed(2)
    );
    estItc.val((0.26 * +estTotalBeforeItc.val()).toFixed(2));
    totalCostInput.val(
      "$" + (+estTotalBeforeItc.val() - +estItc.val()).toFixed(2)
    );
  }
});
