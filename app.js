const expressionScreen = document.querySelector('#expression');
const resultScreen = document.querySelector('#result');
const equals = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');
const maths = document.querySelectorAll('.math');
const undoBtn = document.querySelector('#undo');

let expression = '';
expressionScreen.innerText = '0';

function undo() {
    if (expression.length <= 1) {
        expressionScreen.innerText = '0';
        expression = '';
        return;
    }
    expression = expression.slice(0, -1);
    expressionScreen.innerText = expression;
}
undoBtn.addEventListener('click', undo)

function clear() {
    expression = '';
    resultScreen.innerText = '';
    expressionScreen.innerText = '0';
}
clearBtn.addEventListener('click', clear)

function calculate() {
    if (expression.slice(-2) == '/0') {
        resultScreen.innerText = 'Cannot divide by zero';
        return;
    }
    const operators = ['+', '-', '*', '/']
    while (operators.includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
        console.log(expression)
    }

    resultScreen.innerText = eval(expression);
    expression = '';
}
equals.addEventListener('click', calculate)

for (let math of maths) {
    math.addEventListener('click', (e) => {
        expression += math.innerText;
        expressionScreen.innerText = expression;
    })
}

document.addEventListener('keydown', e => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/',]

    if (keys.includes(e.key)) {
        expression += e.key;
        expressionScreen.innerText = expression;
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        calculate();
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
        clear();
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        undo();
    }
})
