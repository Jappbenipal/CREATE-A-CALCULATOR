// Multiplication
document.getElementById("multiplication").addEventListener("click", multiply);

function multiply() {
  // Input
  let first = +document.getElementById("first").value;
  let second = +document.getElementById("second").value;

  // Process
  let product = first * second;

  //Output
  document.getElementById("result").innerHTML = product;
}

// Division
document.getElementById("division").addEventListener("click", divide);

function divide() {
  // Input
  let first = +document.getElementById("first").value;
  let second = +document.getElementById("second").value;

  // Process
  let remainder = first / second;

  // Output
  document.getElementById("result").innerHTML = remainder;
}

// Subtraction
document.getElementById("subtraction").addEventListener("click", subtract);

function subtract() {
  // Input
  let first = +document.getElementById("first").value;
  let second = +document.getElementById("second").value;

  // Process
  let minus = first - second;

  // Output
  document.getElementById("result").innerHTML = minus;
}

// Addition
document.getElementById("addition").addEventListener("click", add);

function add() {
  // Input
  let first = +document.getElementById("first").value;
  let second = +document.getElementById("second").value;

  // Process
  let plus = first + second;

  // Output
  document.getElementById("result").innerHTML = plus;
}
