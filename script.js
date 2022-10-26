const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

const clear = document.querySelector('.AC')
const add = document.querySelector('.add')
const multiply = document.querySelector('.multiply')
const subtract = document.querySelector('.subtract')
const divide = document.querySelector('.divide')


let operator = '';
const equals = document.querySelector('.equals')
let displayValue = 0;
let numbers = [];

const operate = () => {
    switch (operator) {
    case '+':
        if (numbers.length === 2) {
            display.innerText = numbers[0]+numbers[1];
            console.log(numbers);
            numbers = [parseInt(display.innerText)];
            console.log(numbers);
            displayValue = 0;
            console.log(operator);
        }
        break;
    case '-':
        if (numbers.length === 2) {
            display.innerText = numbers[0]-numbers[1];
            console.log(numbers);
            numbers = [parseInt(display.innerText)];
            console.log(numbers);
            displayValue = 0;
            console.log(operator);
        }
    case 'x':
        if (numbers.length == 2) {
            display.innerText = numbers[0]*numbers[1];
            numbers = [parseInt(display.innerText)];
            console.log(numbers);
            displayValue = 1;
            console.log(operator);
        }
        break;
        case '/':
            if (numbers.length == 2) {
                display.innerText = numbers[0]/numbers[1];
                numbers = [parseInt(display.innerText)];
                console.log(numbers);
                displayValue = 1;
                console.log(operator);
            }
            break;    
}};

// event listeners
one.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '1' : displayValue += '1';
    display.innerText = displayValue;
});
two.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '2' : displayValue += '2';
    display.innerText = displayValue;
});
three.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '3' : displayValue += '3';
    display.innerText = displayValue;
});
four.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '4' : displayValue += '4';
    display.innerText = displayValue;
});
five.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '5' : displayValue += '5';
    display.innerText = displayValue;
});
six.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '6' : displayValue += '6';
    display.innerText = displayValue;
});
seven.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '7' : displayValue += '7';
    display.innerText = displayValue;
});
eight.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '8' : displayValue += '8';
    display.innerText = displayValue;
});
nine.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '9' : displayValue += '9';
    display.innerText = displayValue;
});
zero.addEventListener('click', () => {
    displayValue == 0 ? displayValue = '0' : displayValue += '0';
    display.innerText = displayValue;
});
add.addEventListener('click', () => {
    if (numbers[0] == undefined)  {
        numbers.push(parseInt(displayValue))
        operator = add.innerText;
        displayValue = 0    
    } else if (operator != undefined) {
        console.log(`displayValue ` + displayValue);
        numbers.push(parseInt(displayValue));
        console.log(`numbers after push ` + numbers);
        operate();    
        operator = add.innerText;
        displayValue = 0
    }
});
subtract.addEventListener('click', () => {
    if (numbers[0] == undefined)  {
        numbers.push(parseInt(displayValue))
        operator = subtract.innerText;
        displayValue = 0    
    } else if (operator != undefined) {
        console.log(`displayValue ` + displayValue);
        numbers.push(parseInt(displayValue));
        console.log(`numbers after push ` + numbers);
        operate();    
        operator = subtract.innerText;
        displayValue = 0
    }
});
multiply.addEventListener('click', () => {
    if (numbers[0] == undefined)  {
        displayValue = display.innerText;
        numbers.push(parseInt(displayValue))
        console.log(numbers);
        operator = multiply.innerText;
        displayValue = 0    
    } else if (operator != undefined) {
        numbers.push(parseInt(displayValue));
        operate();    
        operator = multiply.innerText;
        displayValue = display.innerText;
        console.log(numbers);
        displayValue = 0
    }
});
divide.addEventListener('click', () => {
    if (numbers[0] == undefined)  {
        displayValue = display.innerText;
        numbers.push(parseInt(displayValue))
        console.log(numbers);
        operator = '/';
        displayValue = 0    
    } else if (operator != undefined) {
        numbers.push(parseInt(displayValue));
        operate();    
        operator = '/';
        displayValue = display.innerText;
        console.log(numbers);
        displayValue = 0
    }
});
equals.addEventListener('click', () => {
    numbers.push(parseInt(displayValue));
    // displayValue = 0
    console.log(numbers);
    operate();
});
clear.addEventListener('click', () => {
    numbers = [];
    displayValue = 0;
    display.innerText = displayValue;
    operator = '';
    console.log(numbers);
    console.log(displayValue);
});

