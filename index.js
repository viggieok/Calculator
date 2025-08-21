const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDigit() {
  if (display) {
    let currentValue = display.value;
    if (currentValue.length > 0) {
      display.value = currentValue.slice(0, -1);
    }
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = math.evaluate(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleScientific() {
  const sci = document.getElementById("scientific-keys");
  sci.style.display = sci.style.display === "none" ? "grid" : "none";
}
