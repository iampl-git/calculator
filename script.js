// Append value to the display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last character
function deleteChar() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Calculate the result of mathematical expressions
function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
        // Replace user-friendly function names with Math equivalents
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/log\(/g, 'Math.log(');
        expression = expression.replace(/exp\(/g, 'Math.exp(');

        // Convert trigonometric inputs from degrees to radians
        expression = expression.replace(/Math.sin\(([^)]+)\)/g, 'Math.sin(toRadians($1))');
        expression = expression.replace(/Math.cos\(([^)]+)\)/g, 'Math.cos(toRadians($1))');
        expression = expression.replace(/Math.tan\(([^)]+)\)/g, 'Math.tan(toRadians($1))');

        // Evaluate the final expression
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Append scientific function to the display
function appendFunction(func) {
    document.getElementById("display").value += func + "(";
}

// Append Pi (π)
function appendPi() {
    document.getElementById("display").value += Math.PI;
}

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
