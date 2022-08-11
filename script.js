const display = document.querySelector('#display');
const one = document.querySelector('.one');
let displayVariable = [];

one.addEventListener('click', () => {
    displayVariable.push(one.innerText);
    console.log(displayVariable);
    display.innerText = displayVariable;
});