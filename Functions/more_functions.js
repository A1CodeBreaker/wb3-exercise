// Tony Stark
// 10880 Malibu Point
// Los Angeles, CA 90265
function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${state} ${zip}`);
}

displayMailingLabel('Tony Stark', '10880 Malibu Point', 'Los Angeles', 'CA', '90265');
console.log('--'); // This is just here to make the output more readable
displayMailingLabel('Someone Else', '123 Main Street', 'Anytown', 'CT', '10101');
console.log('--');

function addNumbers(num1, num2) {
  const sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
}

addNumbers(3, 5);
console.log('--');
addNumbers(10, 15);
console.log('--');

function displayReceipt(totalDue, amountPaid) {
  const changeDue = totalDue - amountPaid;

  console.log(`Total Due: ${totalDue.toFixed(2)}`);
  console.log(`Amount Paid: ${amountPaid.toFixed(2)}`);

  if (changeDue <= 0) {
    console.log(`Change Due: ${Math.abs(changeDue).toFixed(2)}`);
  } else {
    console.log(`Owed Amount: ${Math.abs(changeDue).toFixed(2)}`);
  }
}

const totalDue = 15;

const tooMuch = 20;
const tooLittle = 11;
const justRight = 15;

displayReceipt(totalDue, tooMuch);
console.log('--');
displayReceipt(totalDue, tooLittle);
console.log('--');
displayReceipt(totalDue, justRight);