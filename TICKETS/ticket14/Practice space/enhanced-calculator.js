// --- Operator Functions ---
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error: Division by zero" : a / b;
const power = (base, exponent) => Math.pow(base, exponent);
const modulus = (a, b) => b === 0 ? "Error: Modulus by zero" : a % b;
const squareRoot = (num) => num < 0 ? "Error: Negative square root" : Math.sqrt(num);
const percentage = (num, percent) => (num * percent) / 100;

// --- History Array ---
let history = [];

// --- Main Calculation Function ---
function calculate(operation) {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  let result, expression;

  // Validation
  if (operation !== 'squareRoot' && (isNaN(a) || isNaN(b))) {
    result = "Error: Please enter valid numbers";
  } else if (operation === 'squareRoot' && isNaN(a)) {
    result = "Error: Please enter a valid number";
  } else {
    switch (operation) {
      case 'add': result = add(a, b); expression = `${a} + ${b} = ${result}`; break;
      case 'subtract': result = subtract(a, b); expression = `${a} - ${b} = ${result}`; break;
      case 'multiply': result = multiply(a, b); expression = `${a} × ${b} = ${result}`; break;
      case 'divide': result = divide(a, b); expression = `${a} ÷ ${b} = ${result}`; break;
      case 'power': result = power(a, b); expression = `${a} ^ ${b} = ${result}`; break;
      case 'modulus': result = modulus(a, b); expression = `${a} % ${b} = ${result}`; break;
      case 'squareRoot': result = squareRoot(a); expression = `√${a} = ${result}`; break;
      case 'percentage': result = percentage(a, b); expression = `${b}% of ${a} = ${result}`; break;
      default: result = "Error: Unknown operation";
    }
  }

  // Display result
  document.getElementById('result').textContent = `Result: ${result}`;

  // Update history if valid
  if (!String(result).startsWith("Error")) {
    history.push(expression);
    if (history.length > 5) history = history.slice(-5);
    renderHistory();
  }
}

// --- Clear Functions ---
function clearCalculator() {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('result').textContent = "Result will appear here";
}

function clearHistory() {
  history = [];
  renderHistory();
}

// --- Render History ---
function renderHistory() {
  const historyList = document.getElementById('history');
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}
