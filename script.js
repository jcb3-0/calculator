const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const three = document.querySelector('.two')
const four = document.querySelector('.three')
const five = document.querySelector('.four')
const six = document.querySelector('.five')
const seven = document.querySelector('.six')
const eight = document.querySelector('.seven')
const nine = document.querySelector('.eight')
const ten = document.querySelector('.nine')
const zero = document.querySelector('.zero')

const add = document.querySelector('.add')
const multiply = document.querySelector('.multiply')

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
    case 'x':
        if (numbers.length == 2) {
            display.innerText = numbers[0]*numbers[1];
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

equals.addEventListener('click', () => {
    numbers.push(parseInt(displayValue));
    // displayValue = 0
    console.log(numbers);
    operate();
});

