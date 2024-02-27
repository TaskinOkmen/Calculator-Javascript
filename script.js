
function operate(operator, num1, num2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    return result;
}

const numButtons = document.querySelectorAll('.num-button');
const evaluateButton = document.querySelector('.evaluate-button');
const resultField = document.querySelector('.result-screen');
const operatorButtons = document.querySelectorAll('.op-button');
const clearButton = document.querySelector('.clear-button');

let num1 = 0, num2 = null, operator = null;
let inputLine = '0';

numButtons.forEach(button => {
    button.addEventListener('click', () => {

        inputLine += button.textContent;
        resultField.textContent = parseInt(inputLine);

        if (operator == null)
            num1 = parseInt(inputLine);
        else
            num2 = parseInt(inputLine);
    });
});


operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if (num2 != null) {
            const result = operate(operator, num1, num2);
            
            resultField.textContent = result;
    
            num1 = result;
            num2 = null;
        }
        
        operator = button.textContent;
        inputLine = '';
    });
});


evaluateButton.addEventListener('click', () => {
    if (operator == null) return;

    const result = operate(operator, num1, num2);
    
    inputLine = result;
    resultField.textContent = inputLine;

    num1 = result;
    num2 = null;
    operator = null;
});


clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = null;
    operator = null;
    inputLine = '0';
    resultField.textContent = inputLine;
});