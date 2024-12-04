const display = document.getElementById("inputtext");
const resultField = document.getElementById("result");

appendtodisplay = (input) => {
  display.value += input;
  display.scrollLeft = display.scrollWidth; // Automatically scroll to the right
};

cleardisplay = () => {
  display.value = "";
  resultField.innerHTML = "";
  resultField.scrollLeft = 0; // Reset scroll position
};

calculate = () => {
  try {
    resultField.innerHTML = eval(display.value);
    resultField.scrollLeft = resultField.scrollWidth; // Ensure the result is fully visible
  } catch (error) {
    resultField.innerHTML = "Error";
    resultField.scrollLeft = 0; // Reset scroll position in case of error
  }
};
