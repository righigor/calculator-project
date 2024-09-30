const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const backBtn = document.getElementById("backspace");

let currentInput = '';
let prevInput = '';
let operator = null;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.value;

        if (value === '=') {
            calculate()
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            prevInput = currentInput;
            currentInput = ''
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    })
})

clearBtn.addEventListener('click', () => {
    currentInput = ''
    prevInput = ''
    operator = null
    display.innerText = '0'
})

backBtn.addEventListener('click', () => {
    const currentDisplay = display.innerText;
    if (currentDisplay.length > 1) {
        display.innerText = currentDisplay.slice(0, -1);
    } else {
        currentInput = ''
        display.innerText = '0';
    }
});

function calculate() {
    if (prevInput && currentInput && operator) {
        const prev = parseFloat(prevInput);
        const curr = parseFloat(currentInput);
        let result;
        
        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
        }
        
        display.innerText = result;
        currentInput = result.toString();
        prevInput = '';
        operator = null;
    }
}