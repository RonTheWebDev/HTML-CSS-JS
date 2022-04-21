function calcTaxstamp() {
  var inputPurchase = document.getElementById("tax-calc-prop-amt").value;
  var mathVal1 = inputPurchase / 500;
  var roundVal = Math.ceil(mathVal1);
  var mathVal2 = roundVal * 0.75;
  var stampVal = mathVal2;
  var stampAmt = numeral(stampVal).format("$0,0.00");
  document.getElementById("tax-calc-answer").innerHTML =
    "Documentary Stamp Tax Amount = " + stampAmt.toString(); // here is the same you return the value
}
