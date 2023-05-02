function getSocSecTax(grossPay) {
  const ssTaxRate = 0.062;
  const taxedAmt = grossPay * ssTaxRate;
  return taxedAmt.toFixed(2);
}

function getMedicareTax(grossPay) {
  const medicareTaxRate = 0.0145;
  const taxedAmt = grossPay * medicareTaxRate;
  return taxedAmt.toFixed(2);
}

function getFederalTax(grossPay, withholdingCode) {
  let fedTaxedRate;
  switch (withholdingCode) {
    case 0:
      fedTaxedRate = 0.23;
      break;
    case 1:
      fedTaxedRate = 0.21;
      break;
    case 2:
      fedTaxedRate = 0.195;
      break;
    case 3:
      fedTaxedRate = 0.185;
      break;
    default:
      fedTaxedRate = 0.18 - 0.005 * (withholdingCode - 4);
      break;
  }
  const taxedAmt = grossPay * fedTaxedRate;
  return taxedAmt.toFixed(2);
}

console.log("Social Security tax: " + getSocSecTax(750));
console.log("Medicare tax: " + getMedicareTax(750));
console.log("Federal tax: " + getFederalTax(750, 0));
console.log("Federal tax: " + getFederalTax(1550, 2));
console.log("Federal tax: " + getFederalTax(1100, 6));

const value = 5;

function test(num) {
  let value = 10;
  const sum = value + num;
  console.log("value in function =", value);
  return sum;
}

console.log("value out of function =", value);
console.log(test(5));