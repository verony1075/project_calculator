const calculator = document.getElementById('calculator');
const displayCurrent = document.getElementById('current-operand');
const displayPrevious = document.getElementById('previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
  });
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    });
  });
  clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', compute);
dotButton.addEventListener('click', appendDot);

function clear() {

}

function deleteNumber() {
 
}

function compute() {
  // Function to compute the expression
}

let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return; // Preventing multiple decimals
  currentOperand = currentOperand.toString() + number.toString();
}