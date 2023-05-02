const buttonEl = document.getElementById('myButton');
buttonEl.onclick = onButtonClicked;

function onButtonClicked() {
  const inputEl = document.getElementById('dateInput');
  // console.log(inputEl.value);
  const userDate = new Date('2023-03-03');

  const messageEl = document.getElementById('messagep');
  messageEl.innerHTML = userDate.toLocaleString();
}
