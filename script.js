function generateRandomNumber(elementId) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomNumberElement = document.getElementById(`random-number${elementId.slice(-1)}`);
  randomNumberElement.textContent = `Number ${elementId.slice(-1)}: ${randomNumber}`;
}
