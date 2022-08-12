const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const add = document.querySelector('.add')
let operator = '';
const equals = document.querySelector('.equals')
let displayArray = [];
let firstNumber = 0;
let secondNumber = 0;

const operate = () => {
    switch (operator) {
    case '+':
        display.innerText = firstNumber+secondNumber;
        displayArray = [display.innerText];
        break;
}};

// event listners
one.addEventListener('click', () => {
    displayArray.push(one.innerText);
    console.log(displayArray);
    display.innerText = displayArray.join('');
});
two.addEventListener('click', () => {
    displayArray.push(two.innerText);
    console.log(displayArray);
    display.innerText = displayArray.join('');
});
add.addEventListener('click', () => {
    firstNumber = parseInt(displayArray.join(''));
    operator = add.innerText;
    console.log(add);
    console.log(firstNumber);
    displayArray = [];
});
equals.addEventListener('click', () => {
    secondNumber = parseInt(displayArray.join(''));
    console.log(secondNumber);
    displayArray = [];
    operate();
});

