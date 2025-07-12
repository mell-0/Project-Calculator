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
    //console.log(`hi from operator ${operator} ${a} ${b}`);
    switch (operator)
    {
        case '+':
            //console.log('hi from +');
        return add(a, b);

        case '-':
        return subtract(a, b);

        case '*':
        return multiply(a, b);

        case '/':
            if (b === 0)
                alert("Can't divide by 0");
            else
                return divide(a, b);
    }
};


// making the output screen interactable
let output = document.querySelector('.output');


// used to store the values for the operator function
let num1 = 0;
let num2 = 0;
let operater;

let digits = 0; // used to count # of digits in a num, only allow 14 digits


// trying to make buttons onClick
let numBtn = document.querySelectorAll('.num');
numBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        if (++digits < 14) // only allow 14 digit numbers
        {
            let btnNum = button.textContent;

            if (output.textContent === '0')
            {
                output.textContent = btnNum;
            }
            else
            {    
                output.textContent += btnNum;
            }
        }
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
        console.log(button.textContent + ' is an operator');
    });
});


// trying to make other btns onClick
let otherBtn = document.querySelectorAll('.otherBtn');
otherBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        output.textContent = button.textContent;
        console.log(button.textContent + ' is an misc');
    });
});


// getting decimal button
let decimalBtn = document.querySelector('.decimal');

decimalBtn.addEventListener('click', () =>
{
    console.log("this is a deciaml");
    
    if (!output.textContent.includes(".")) // only adds decimal when it doesn't have one
    {
        output.textContent += '.';
        digits++;
    }
});






