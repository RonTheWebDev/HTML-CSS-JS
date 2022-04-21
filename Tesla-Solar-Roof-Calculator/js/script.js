document
  .getElementById("total-home-sqft-input")
  .addEventListener("input", function () {
    document
      .getElementById("calculated-roof-sqft-input")
      .setAttribute("value", (this.value * 2).toFixed(0));

    document
      .getElementById("annual-kwh-input")
      .addEventListener("input", function () {
        document
          .getElementById("calculated-kw-input")
          .setAttribute("value", (this.value / 1400).toFixed(1));

        let calcRoofId = document.getElementById("calculated-roof-sqft-input");
        let calcKwId = document.getElementById("calculated-kw-input");
        let valueNumSystemSize = document.getElementById("system-size-input");
        let roofCompInput = document.getElementById("roof-complexity-input");
        let roofPriceBeforeItc = document.getElementById(
          "roof-price-before-itc"
        );
        let estTotalPriceBeforeItc = document.getElementById(
          "est-total-before-itc"
        );
        let estItc = document.getElementById("est-itc");
        let pwBattInput = document.getElementById("powerwall-battery-input");
        let pwPriceBeforeItc = document.getElementById(
          "powerwall-price-before-itc"
        );
        let valueNumPowerwallBattery = document.getElementById(
          "powerwall-battery-input"
        ).value;

        if (calcKwId.value < 4.0) {
          valueNumSystemSize.value = 4.0 + " kW";
        } else if (calcKwId.value > 4.0 && calcKwId.value < 4.5) {
          valueNumSystemSize.value = 4.5 + " kW";
        } else if (calcKwId.value > 4.5 && calcKwId.value < 5.0) {
          valueNumSystemSize.value = 5.0 + " kW";
        } else if (calcKwId.value > 5.0 && calcKwId.value < 5.5) {
          valueNumSystemSize.value = 5.5 + " kW";
        } else if (calcKwId.value > 5.5 && calcKwId.value < 6.0) {
          valueNumSystemSize.value = 6.0 + " kW";
        } else if (calcKwId.value > 6.0 && calcKwId.value < 6.5) {
          valueNumSystemSize.value = 6.5 + " kW";
        } else if (calcKwId.value > 6.5 && calcKwId.value < 7.0) {
          valueNumSystemSize.value = 7.0 + " kW";
        } else if (calcKwId.value > 7.0 && calcKwId.value < 7.5) {
          valueNumSystemSize.value = 7.5 + " kW";
        } else if (calcKwId.value > 7.5 && calcKwId.value < 8.0) {
          valueNumSystemSize.value = 8.0 + " kW";
        } else if (calcKwId.value > 8.0 && calcKwId.value < 8.5) {
          valueNumSystemSize.value = 8.5 + " kW";
        } else if (calcKwId.value > 8.5 && calcKwId.value < 9.0) {
          valueNumSystemSize.value = 9.0 + " kW";
        } else if (calcKwId.value > 9.5 && calcKwId.value < 10.0) {
          valueNumSystemSize.value = 10.0 + " kW";
        } else if (calcKwId.value > 10.0 && calcKwId.value < 10.5) {
          valueNumSystemSize.value = 10.5 + " kW";
        } else if (calcKwId.value > 10.5 && calcKwId.value < 11.0) {
          valueNumSystemSize.value = 11.0 + " kW";
        } else if (calcKwId.value > 11.0 && calcKwId.value < 11.5) {
          valueNumSystemSize.value = 11.5 + " kW";
        } else if (calcKwId.value > 11.5 && calcKwId.value < 12.0) {
          valueNumSystemSize.value = 12.0 + " kW";
        } else if (calcKwId.value > 12.0 && calcKwId.value < 12.5) {
          valueNumSystemSize.value = 12.5 + " kW";
        } else if (calcKwId.value > 12.5 && calcKwId.value < 13.0) {
          valueNumSystemSize.value = 13.0 + " kW";
        } else if (calcKwId.value > 13.0 && calcKwId.value < 13.5) {
          valueNumSystemSize.value = 13.5 + " kW";
        } else if (calcKwId.value > 13.5 && calcKwId.value < 14.0) {
          valueNumSystemSize.value = 14.0 + " kW";
        } else if (calcKwId.value > 14.0 && calcKwId.value < 14.5) {
          valueNumSystemSize.value = 14.5 + " kW";
        } else if (calcKwId.value > 14.5 && calcKwId.value < 15.0) {
          valueNumSystemSize.value = 15.0 + " kW";
        } else if (calcKwId.value > 15.0 && calcKwId.value < 15.5) {
          valueNumSystemSize.value = 15.5 + " kW";
        } else if (calcKwId.value > 15.5 && calcKwId.value < 16.0) {
          valueNumSystemSize.value = 16.0 + " kW";
        } else if (calcKwId.value > 16.0 && calcKwId.value < 16.5) {
          valueNumSystemSize.value = 16.5 + " kW";
        } else if (calcKwId.value > 16.5 && calcKwId.value < 17.0) {
          valueNumSystemSize.value = 17.0 + " kW";
        } else if (calcKwId.value > 17.0 && calcKwId.value < 17.5) {
          valueNumSystemSize.value = 17.5 + " kW";
        } else if (calcKwId.value > 17.5 && calcKwId.value < 18.0) {
          valueNumSystemSize.value = 18.0 + " kW";
        } else if (calcKwId.value > 18.0 && calcKwId.value < 18.5) {
          valueNumSystemSize.value = 18.5 + " kW";
        } else if (calcKwId.value > 18.5 && calcKwId.value < 19.0) {
          valueNumSystemSize.value = 19.0 + " kW";
        } else if (calcKwId.value > 19.0 && calcKwId.value < 19.5) {
          valueNumSystemSize.value = 19.5 + " kW";
        } else if (calcKwId.value > 19.5 && calcKwId.value < 20.0) {
          valueNumSystemSize.value = 20.0 + " kW";
        } else if (calcKwId.value > 20.0 && calcKwId.value < 20.5) {
          valueNumSystemSize.value = 20.5 + " kW";
        } else if (calcKwId.value > 20.5 && calcKwId.value < 21.0) {
          valueNumSystemSize.value = 21.0 + " kW";
        } else if (calcKwId.value > 21.0 && calcKwId.value < 21.5) {
          valueNumSystemSize.value = 21.5 + " kW";
        } else if (calcKwId.value > 21.5 && calcKwId.value < 22.0) {
          valueNumSystemSize.value = 22.0 + " kW";
        } else if (calcKwId.value > 22.0 && calcKwId.value < 22.5) {
          valueNumSystemSize.value = 22.5 + " kW";
        } else if (calcKwId.value > 22.5 && calcKwId.value < 23.0) {
          valueNumSystemSize.value = 23.0 + " kW";
        } else if (calcKwId.value > 23.0 && calcKwId.value < 23.5) {
          valueNumSystemSize.value = 23.5 + " kW";
        } else if (calcKwId.value > 23.5 && calcKwId.value < 24.0) {
          valueNumSystemSize.value = 24.0 + " kW";
        } else if (calcKwId.value > 24.0 && calcKwId.value < 24.5) {
          valueNumSystemSize.value = 24.5 + " kW";
        } else if (calcKwId.value > 24.5 && calcKwId.value < 25.0) {
          valueNumSystemSize.value = 25.0 + " kW";
        } else if (calcKwId.value > 25.0 && calcKwId.value < 25.5) {
          valueNumSystemSize.value = 25.5 + " kW";
        } else if (calcKwId.value > 25.5 && calcKwId.value < 26.0) {
          valueNumSystemSize.value = 26.0 + " kW";
        } else if (calcKwId.value > 26.0 && calcKwId.value < 26.5) {
          valueNumSystemSize.value = 26.5 + " kW";
        } else if (calcKwId.value > 26.5 && calcKwId.value < 27.0) {
          valueNumSystemSize.value = 27.0 + " kW";
        } else if (calcKwId.value > 27.0 && calcKwId.value < 27.5) {
          valueNumSystemSize.value = 27.5 + " kW";
        } else if (calcKwId.value > 27.5 && calcKwId.value < 28.0) {
          valueNumSystemSize.value = 28.0 + " kW";
        } else if (calcKwId.value > 28.0 && calcKwId.value < 28.5) {
          valueNumSystemSize.value = 28.5 + " kW";
        } else if (calcKwId.value > 28.5 && calcKwId.value < 29.0) {
          valueNumSystemSize.value = 29.0 + " kW";
        } else if (calcKwId.value > 29.0 && calcKwId.value < 29.5) {
          valueNumSystemSize.value = 29.5 + " kW";
        } else if (calcKwId.value > 29.5 && calcKwId.value < 30.0) {
          valueNumSystemSize.value = 30.5 + " kW";
        } else if (calcKwId.value > 30.5 && calcKwId.value < 40.0) {
          valueNumSystemSize.value = 40.0 + " kW";
        } else if (calcKwId.value > 40.0 && calcKwId.value < 40.5) {
          valueNumSystemSize.value = 40.5 + " kW";
        } else if (calcKwId.value > 40.5 && calcKwId.value < 50.0) {
          valueNumSystemSize.value = 50.0 + " kW";
        } else if (calcKwId.value > 50.0 && calcKwId.value < 50.5) {
          valueNumSystemSize.value = 50.5 + " kW";
        } else if (calcKwId.value > 50.5 && calcKwId.value < 60.0) {
          valueNumSystemSize.value = 60.0 + " kW";
        } else if (calcKwId.value > 60.0 && calcKwId.value < 60.5) {
          valueNumSystemSize.value = 60.5 + " kW";
        } else if (calcKwId.value > 60.5 && calcKwId.value < 70.0) {
          valueNumSystemSize.value = 70.0 + " kW";
        } else if (calcKwId.value > 70.0 && calcKwId.value < 70.5) {
          valueNumSystemSize.value = 70.5 + " kW";
        } else if (calcKwId.value > 70.5 && calcKwId.value < 71.0) {
          valueNumSystemSize.value = 71.0 + " kW";
        } else if (calcKwId.value > 71.0 && calcKwId.value < 71.5) {
          valueNumSystemSize.value = 71.5 + " kW";
        } else if (calcKwId.value > 71.5 && calcKwId.value < 72.0) {
          valueNumSystemSize.value = 72.0 + " kW";
        } else if (calcKwId.value > 72.0 && calcKwId.value < 72.5) {
          valueNumSystemSize.value = 72.5 + " kW";
        } else if (calcKwId.value > 72.5 && calcKwId.value < 73.0) {
          valueNumSystemSize.value = 73.0 + " kW";
        } else if (calcKwId.value > 73.0 && calcKwId.value < 73.5) {
          valueNumSystemSize.value = 73.5 + " kW";
        } else if (calcKwId.value > 73.5 && calcKwId.value < 74.0) {
          valueNumSystemSize.value = 74.0 + " kW";
        } else if (calcKwId.value > 74.0 && calcKwId.value < 74.5) {
          valueNumSystemSize.value = 74.5 + " kW";
        } else if (calcKwId.value > 74.5 && calcKwId.value < 75.0) {
          valueNumSystemSize.value = 75.0 + " kW";
        } else if (calcKwId.value > 75.0 && calcKwId.value < 75.5) {
          valueNumSystemSize.value = 75.5 + " kW";
        } else if (calcKwId.value > 75.5 && calcKwId.value < 80.0) {
          valueNumSystemSize.value = 80.0 + " kW";
        } else if (calcKwId.value > 80.0 && calcKwId.value < 80.5) {
          valueNumSystemSize.value = 80.5 + " kW";
        } else if (calcKwId.value > 80.5 && calcKwId.value < 81.0) {
          valueNumSystemSize.value = 81.0 + " kW";
        } else if (calcKwId.value > 81.0 && calcKwId.value < 81.5) {
          valueNumSystemSize.value = 81.5 + " kW";
        } else if (calcKwId.value > 81.5 && calcKwId.value < 82.0) {
          valueNumSystemSize.value = 82.0 + " kW";
        } else if (calcKwId.value > 82.0 && calcKwId.value < 82.5) {
          valueNumSystemSize.value = 82.5 + " kW";
        } else if (calcKwId.value > 82.5 && calcKwId.value < 83.0) {
          valueNumSystemSize.value = 83.0 + " kW";
        } else if (calcKwId.value > 83.0 && calcKwId.value < 83.5) {
          valueNumSystemSize.value = 83.5 + " kW";
        } else if (calcKwId.value > 83.5 && calcKwId.value < 84.0) {
          valueNumSystemSize.value = 84.0 + " kW";
        } else if (calcKwId.value > 84.0 && calcKwId.value < 84.5) {
          valueNumSystemSize.value = 84.5 + " kW";
        } else if (calcKwId.value > 84.5 && calcKwId.value < 85.0) {
          valueNumSystemSize.value = 85.0 + " kW";
        } else if (calcKwId.value > 85.0 && calcKwId.value < 85.5) {
          valueNumSystemSize.value = 85.5 + " kW";
        } else if (calcKwId.value > 85.5 && calcKwId.value < 86.0) {
          valueNumSystemSize.value = 86.0 + " kW";
        } else if (calcKwId.value > 86.0 && calcKwId.value < 86.5) {
          valueNumSystemSize.value = 86.5 + " kW";
        } else if (calcKwId.value > 86.5 && calcKwId.value < 87.0) {
          valueNumSystemSize.value = 87.0 + " kW";
        } else if (calcKwId.value > 87.0 && calcKwId.value < 87.5) {
          valueNumSystemSize.value = 87.5 + " kW";
        } else if (calcKwId.value > 87.5 && calcKwId.value < 88.0) {
          valueNumSystemSize.value = 88.0 + " kW";
        } else if (calcKwId.value > 88.5 && calcKwId.value < 89.0) {
          valueNumSystemSize.value = 89.0 + " kW";
        } else if (calcKwId.value > 89.0 && calcKwId.value < 89.5) {
          valueNumSystemSize.value = 89.5 + " kW";
        } else if (calcKwId.value > 89.5 && calcKwId.value < 90.0) {
          valueNumSystemSize.value = 90.0 + " kW";
        } else if (calcKwId.value > 90.5 && calcKwId.value < 91.0) {
          valueNumSystemSize.value = 91.0 + " kW";
        } else if (calcKwId.value > 91.5 && calcKwId.value < 92.0) {
          valueNumSystemSize.value = 92.0 + " kW";
        } else if (calcKwId.value > 92.0 && calcKwId.value < 92.5) {
          valueNumSystemSize.value = 92.5 + " kW";
        } else if (calcKwId.value > 93.0 && calcKwId.value < 93.5) {
          valueNumSystemSize.value = 93.5 + " kW";
        } else if (calcKwId.value > 93.5 && calcKwId.value < 94.0) {
          valueNumSystemSize.value = 94.0 + " kW";
        } else if (calcKwId.value > 94.0 && calcKwId.value < 94.5) {
          valueNumSystemSize.value = 94.5 + " kW";
        } else if (calcKwId.value > 94.5 && calcKwId.value < 95.0) {
          valueNumSystemSize.value = 95.0 + " kW";
        } else if (calcKwId.value > 95.0 && calcKwId.value < 95.5) {
          valueNumSystemSize.value = 95.5 + " kW";
        } else if (calcKwId.value > 95.5 && calcKwId.value < 96.0) {
          valueNumSystemSize.value = 96.0 + " kW";
        } else if (calcKwId.value > 96.0 && calcKwId.value < 96.5) {
          valueNumSystemSize.value = 96.5 + " kW";
        } else if (calcKwId.value > 96.5 && calcKwId.value < 97.0) {
          valueNumSystemSize.value = 97.0 + " kW";
        } else if (calcKwId.value > 97.0 && calcKwId.value < 97.5) {
          valueNumSystemSize.value = 97.5 + " kW";
        } else if (calcKwId.value > 97.5 && calcKwId.value < 98.0) {
          valueNumSystemSize.value = 98.0 + " kW";
        } else if (calcKwId.value > 98.0 && calcKwId.value < 98.5) {
          valueNumSystemSize.value = 98.5 + " kW";
        } else if (calcKwId.value > 98.5 && calcKwId.value < 99.0) {
          valueNumSystemSize.value = 99.0 + " kW";
        } else if (calcKwId.value > 99.0 && calcKwId.value < 99.5) {
          valueNumSystemSize.value = 99.5 + " kW";
        } else if (calcKwId.value > 99.5 && calcKwId.value < 100.0) {
          valueNumSystemSize.value = 100.0 + " kW";
        } else if (calcKwId.value > 100.0) {
          valueNumSystemSize.value = 0;
          setTimeout(() => {
            alert(
              "System Size cannot be higher than 100.0 kW!\nContact Elliott Roofing!"
            );
          }, 1000);
        }

        roofCompInput.addEventListener("change", function () {
          if (roofCompInput.selectedIndex == 1) {
            roofPriceBeforeItc.value =
            "$" +
              (
                +calcRoofId.value * 19 +
                2800 * +valueNumSystemSize.value.replace(" kW", "")
              ).toFixed(2);
          } else if (roofCompInput.selectedIndex == 2) {
            roofPriceBeforeItc.value =
              "$" +
              (
                +calcRoofId.value * 25 +
                2800 * +valueNumSystemSize.value.replace(" kW", "")
              ).toFixed(2);
          } else if (roofCompInput.selectedIndex == 3) {
            roofPriceBeforeItc.value =
              "$" +
              (
                +calcRoofId.value * 31 +
                2800 * +valueNumSystemSize.value.replace(" kW", "")
              ).toFixed(2);
          }
        });

        // Powerwall Battery Plus Button Function

        pwrWallBattPlusBtn = document
          .querySelector(".powerwall-battery-plus-btn")
          .addEventListener("click", function () {
            if (valueNumPowerwallBattery < 10) {
              valueNumPowerwallBattery = ++valueNumPowerwallBattery;
              document.getElementById("powerwall-battery-input").value =
                valueNumPowerwallBattery;
            }
          });

        // Powerwall Battery Minus Button Function

        pwrWallBattMinusBtn = document
          .querySelector(".powerwall-battery-minus-btn")
          .addEventListener("click", function () {
            if (valueNumPowerwallBattery > 0) {
              valueNumPowerwallBattery = --valueNumPowerwallBattery;
              document.getElementById("powerwall-battery-input").value =
                valueNumPowerwallBattery;
            }
          });

        /**** Powerwall Price Before Incentives Section ****/

        document
          .querySelector(".powerwall-battery-plus-btn")
          .addEventListener("click", function () {
            if (pwBattInput.value == 1) {
              pwPriceBeforeItc.value = "$" + (16700).toFixed(2);
            } else if (pwBattInput.value > 1) {
              pwPriceBeforeItc.value =
                "$" + (16700 + (pwBattInput.value - 1) * 12810).toFixed(2);
            }
            pwPriceBeforeItc.dispatchEvent(new Event("input"));
          });

        document
          .querySelector(".powerwall-battery-minus-btn")
          .addEventListener("click", function () {
            if (pwBattInput.value == 1) {
              pwPriceBeforeItc.value = "$" + 16700;
            } else if (pwBattInput.value > 1) {
              pwPriceBeforeItc.value =
                "$" + (12810 * pwBattInput.value + 16700);
            }
            pwPriceBeforeItc.dispatchEvent(new Event("input"));
          });

        /** Estimated Totals Before Incentive  **/

        pwPriceBeforeItc.addEventListener("input", estimatedPrice);

        function estimatedPrice() {
          if (pwBattInput.value == 0) {
            estTotalPriceBeforeItc.value =
              "$" +
              (
                +roofPriceBeforeItc.value.split("$")[1] +
                +pwPriceBeforeItc.value.split("$")[1]
              ).toFixed(2);
          } else if (pwBattInput.value > 0) {
            estTotalPriceBeforeItc.value =
              "$" +
              (
                +roofPriceBeforeItc.value.split("$")[1] +
                +pwPriceBeforeItc.value.split("$")[1]
              ).toFixed(2);
          }
          estTotalPriceBeforeItc.dispatchEvent(new Event("input"));
        }

        /** Estimated Total for ITC**/

        estTotalPriceBeforeItc.addEventListener("input", estTotalItc);

        function estTotalItc() {
          if (pwBattInput.value == 0) {
            estItc.value == 0;
          } else if (pwBattInput.value > 0) {
            estItc.value =
              //Resolve here on line 175:
              "$" +
              (0.26 * +estTotalPriceBeforeItc.value.split("$")[1]).toFixed(2);
          }
          pwBattInput.dispatchEvent(new Event("input"));
        }
      });
  });
