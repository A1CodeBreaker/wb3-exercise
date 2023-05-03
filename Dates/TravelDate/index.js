const buttonEl = document.getElementById('myButton');
buttonEl.onclick = onButtonClicked;

function onButtonClicked() {
  const inputEl = document.getElementById('dateInput');
  const now = new Date();
  const tripDateIsoString = `${inputEl.value}T00:00:00`;
  const tripDate = new Date(tripDateIsoString);

  const msNow = now.getTime();
  const msTrip = tripDate.getTime();

  const msTillTrip = msTrip - msNow;
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.round(msTillTrip / msPerDay);

  const outputEl = document.getElementById('messagep');
  outputEl.innerHTML = `${days} days until your trip`;
}
