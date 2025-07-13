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


// used to store the values for the operator function
let num1 = 0;
let num2 = 0;
let operater = undefined;
let answer = undefined;

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

        // storing numbers if an operator was clicked
        if (operater === undefined)
            num1 = output.textContent;
        else
            num2 = output.textContent;
    });
});


// getting decimal button
let decimalBtn = document.querySelector('.decimal');

decimalBtn.addEventListener('click', () =>
{
    console.log("this is a deciaml");
    
    if (!output.textContent.includes(".")) // only adds decimal when it doesn't have one
    {
        if (output.textContent === '')
            output.textContent = '0.';
        else
            output.textContent += '.';

        digits++;
    }
});


// trying to make operators onClick
// first try to make it work on the console
let operaterBtn = document.querySelectorAll('.operator');
operaterBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        operater = button.textContent; // store the operator
        output.textContent = ''; // clear output when an operator is clicked on
        digits = 0;

        console.log(button.textContent + ' is an operator');
    });
});


// getting equal button to work
let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', (e) => 
{
    console.log(e.target.textContent + " was clicked");
    console.log(`${num1} ${operater} ${num2} = ${operate(operater, Number(num1), Number(num2))}`);
    
    answer = parseFloat(operate(operater, Number(num1), Number(num2)).toFixed(3));

    // round to 3rd place if answer len is more than 13
    if (String(answer).length > 13)
    {
        output.textContent = Number.parseFloat(answer).toExponential(3); // rounds to the 3rd place
    }
    else
    {   // if answer length is less than or equal to 13
        output.textContent = answer; 
    }
    
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








