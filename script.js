console.log('hi from script');

// operator functions

function add(a, b)
{
    return a + b;
};

function subtract(a, b)
{
    return a - b;
};

function multiply(a, b)
{
    return a * b;
};

function divide(a, b)
{
    return a / b;
};

function operate(operator, a, b)
{
    switch (operator)
    {
        case '+':
        return add(a, b);

        case '-':
        return subtract(a, b);

        case '*':
        return multiply(a, b);

        case '/':
        return divide(a, b);
    }
};


let a = 6;
let b = 3;
let operator;

// console.log(add(a, b)); // returns 9
// console.log(add(-a, b)); // returns -3
console.log(operate('+', a, b)); // returns 9
console.log(operate('+', -a, b)); // returns -3


// console.log('\n' + subtract(a, b)); // 3
// console.log(subtract(-a, b)); // -9
console.log('\n' + operate('-', a, b));
console.log(operate('-', -a, b));


// console.log('\n' + multiply(a, b)); // 18
// console.log(multiply(-a, b)); // -18
console.log('\n' + operate('*', a, b)); 
console.log(operate('*', -a, b));


// console.log('\n' + divide(a, b)); // 2
// console.log(divide(-a, b)); // -2
console.log('\n' + operate('/', a, b));
console.log(operate('/', -a, b));


// trying to make buttons onclick
let calc = document.querySelector('.calculator');

// making the output screen interactable
let output = document.querySelector('.output');

calc.addEventListener('click', (e) => 
{
    console.log(e.target.innerText);
    output.textContent = e.target.innerText;
});





