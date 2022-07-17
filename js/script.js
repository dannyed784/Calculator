/*buttons */
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const productButton = document.querySelector('.product');
const divisionButton = document.querySelector('.division');
const additionButton = document.querySelector('.addition');
const minusButton = document.querySelector('.minus');
const squareButton = document.querySelector('.square');
const acButton = document.querySelector('.ac');
const equalButton = document.querySelector('.equal');
const outPut = document.querySelector('.input');

oneButton.addEventListener('click', () => {
  outPut.value = outPut.value + '1';
});
twoButton.addEventListener('click', () => {
  outPut.value = outPut.value + '2';
});
threeButton.addEventListener('click', () => {
  outPut.value = outPut.value + '3';
});
fourButton.addEventListener('click', () => {
  outPut.value = outPut.value + '4';
});
fiveButton.addEventListener('click', () => {
  outPut.value = outPut.value + '5';
});
sixButton.addEventListener('click', () => {
  outPut.value = outPut.value + '6';
});
sevenButton.addEventListener('click', () => {
  outPut.value = outPut.value + '7';
});
eightButton.addEventListener('click', () => {
  outPut.value = outPut.value + '8';
});
nineButton.addEventListener('click', () => {
  outPut.value = outPut.value + '9';
});
