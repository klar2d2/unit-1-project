//state of the app
var displayText = 0;

//frequent grabs
const displayEl = document.getElementById('display')
const buttonsEl = document.getElementsByClassName('button')
const numInput = document.getElementById('numInput')

for (var i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener('click', operation)
}

function operation(event) {
  let buttonSelected = event.target.id

  if (event.target.id === 'plus'){
    displayText += Number(numInput.value)
    render();
    checkNegative()
  }
  else {
    displayText -= Number(numInput.value)
    console.log(displayText)
    render();
    checkNegative();
  }
}

function render() {
  displayEl.textContent = displayText
}

function checkNegative() {
  if (displayText < 0) {
    displayEl.style.color = 'red';
  }
  else {
    displayEl.style.color = 'black';
  }
}
