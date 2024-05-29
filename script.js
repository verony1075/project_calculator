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
function chooseOperation(selectedOperation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
  }
  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
   
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
  
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay(); // Refresh the display with the new state
  }

  function updateDisplay() {
    document.getElementById('current-operand').innerText = currentOperand;
    document.getElementById('previous-operand').innerText = previousOperand + ' ' + (operation || '');
  }
  function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
  }
  function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
  }
  function appendDot() {
    if (currentOperand.includes('.')) return; // Prevent multiple decimals
    if (currentOperand === '') currentOperand = '0'; // If empty, start with '0.'
    currentOperand += '.';
    updateDisplay();
  }
  clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
dotButton.addEventListener('click', appendDot);
// this line below is for the additional button i added
switch (operation) {
    // Existing cases
    case '√':
        computation = Math.sqrt(current);
        break;
    case '^':
        computation = Math.pow(prev, current);
        break;
    case '%':
        computation = (prev / 100) * current;
        break;
    // Continue with the rest
  }
  // this is for user enable to input both numbers and operations
  document.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) appendNumber(event.key);
    if (event.key === '.') appendDot();
    if (event.key === 'Enter' || event.key === '=') compute();
    if (event.key === 'Backspace') deleteNumber();
    if (event.key === 'Escape') clear();
    // Mapping other keys to operations
    updateDisplay();
  });

  let memoryValue = 0;

function memoryAdd() {
  memoryValue += parseFloat(currentOperand);
}

function memorySubtract() {
  memoryValue -= parseFloat(currentOperand);
}

function memoryRecall() {
  currentOperand = memoryValue.toString();
  updateDisplay();
}

function memoryClear() {
  memoryValue = 0;
}