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
    console.log(`hi from operator ${operator} ${a} ${b}`);
    switch (operator)
    {
        case '+':
            console.log('hi from +');
        return add(a, b);

        case '-':
        return subtract(a, b);

        case '*':
        return multiply(a, b);

        case '/':
        return divide(a, b);
    }
};


// making the output screen interactable
let output = document.querySelector('.output');


let numbers = '0123456789.'; // used to check if input is a number or decimal
let operaters = '+-*/' ; // used to check if input is an operator


// used to store the values for the operator function
let num1 = 0;
let num2 = 0;
let operater;


// trying to make buttons onClick
let numBtn = document.querySelectorAll('.num');
numBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        output.textContent = button.textContent;
        console.log(button.textContent + ' is a number');
    });
    
});


// trying to make operators onClick
let operaterBtn = document.querySelectorAll('.operator');
operaterBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        output.textContent = button.textContent;
        console.log(button.textContent + ' is an operator')
    });
});


// trying to make other btns onClick
let otherBtn = document.querySelectorAll('.otherBtn');
otherBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        output.textContent = button.textContent;
        console.log(button.textContent + ' is an misc')
    });
});






