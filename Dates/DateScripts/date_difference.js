let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

const msPerday = 1000*60*60*24;
const msDiff = startDate.getTime() - endDate.getTime();

const daysElapsed = msDiff/msPerday;
const daysRounded = Math.abs(Math.round(daysElapsed));

console.log("Days between two dates:", daysRounded);