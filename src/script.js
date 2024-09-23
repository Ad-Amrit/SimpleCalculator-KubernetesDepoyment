const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        } else if (value === '&lt;') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (value === '=') {
            if (operation === '+') {
                currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
            } else if (operation === '-') {
                currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
            } else if (operation === '&times;') {
                currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
            } else if (operation === '&divide;') {
                currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
            }
            display.value = currentNumber;
            previousNumber = '';
            operation = '';
        } else if (['+', '-', '&times;', '&divide;'].includes(value)) {
            previousNumber = currentNumber;
            operation = value;
            currentNumber = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});