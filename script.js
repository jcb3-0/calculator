const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const add = document.querySelector('.add')
const multiply = document.querySelector('.multiply')
let operator = '';
const equals = document.querySelector('.equals')
let displayValue = 0;
let numbers = [];

const operate = () => {
    switch (operator) {
    case '+':
        if (numbers.length == 2) {
            display.innerText = numbers[0]+numbers[1];
            numbers = [parseInt(display.innerText)];
            console.log(numbers);

        }
        break;
    case 'x':
        if (numbers.length == 2) {
            display.innerText = numbers[0]*numbers[1];
            numbers = [parseInt(display.innerText)];
            console.log(numbers);
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
        operator = add.innerText;
        numbers.push(parseInt(displayValue));
        displayValue = 0
        operate();    
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
        operator = multiply.innerText;
        displayValue = display.innerText;
        numbers.push(parseInt(displayValue));
        console.log(numbers);
        displayValue = 0
        operate();    
    }
});

equals.addEventListener('click', () => {
    numbers.push(parseInt(displayValue));
    displayValue = 0
    operate();
});

