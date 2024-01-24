function calculateSquare() {
  // Get the selected number from the dropdown
  var selectedNumber = document.getElementById("number").value;

  // Calculate the square
  var square = selectedNumber * selectedNumber;

  // Display the result
  document.getElementById("result").textContent = "Square: " + square;
}
