const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const add = document.querySelector('.add')
let operator = '';
const equals = document.querySelector('.equals')
let displayValue = 0;
let numbers = [];
// let secondNumber = [];

const operate = () => {
    switch (operator) {
    case '+':
        if (numbers.length == 2) {
            display.innerText = numbers[0]+numbers[1];
            // displayValue = [display.innerText];
            numbers = [parseInt(display.innerText)];
            console.log(`numbers is ${numbers}`);
            // secondNumber.shift();    
        }
        break;
}};

// event listners
one.addEventListener('click', () => {
    displayValue == 0 ? displayValue = one.innerText : displayValue += (one.innerText);
    console.log(displayValue);
    display.innerText = displayValue;
});
two.addEventListener('click', () => {
    displayValue == 0 ? displayValue = two.innerText : displayValue += (two.innerText);
    console.log(displayValue);
    display.innerText = displayValue;
});
add.addEventListener('click', () => {
    if (numbers[0] == undefined)  {
        numbers.push(parseInt(displayValue))
        operator = add.innerText;
        console.log(numbers);
        displayValue = 0    
    } else if (operator != undefined) {
        operator = add.innerText;
        numbers.push(parseInt(displayValue));
        console.log(`numbers is ${numbers}`);
        displayValue = 0
        operate();    
    }
});
equals.addEventListener('click', () => {
    numbers.push(parseInt(displayValue));
    console.log(numbers);
    displayValue = 0
    operate();
});

// use ONE array to store the numbers?