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
let num1 = undefined;
let num2 = undefined;
let operater = undefined;
let answer = undefined;

let hasOperator = false;

let digits = 0; // used to count # of digits in a num, only allow 13 digits


// reset values 
function reset()
{
    // num1 = undefined;
    num2 = undefined;
    operater = undefined;
    answer = undefined;
    hasOperator = false;
    digits = 0;
}


// checks if you have all info to do operation: num1 & 2 & operator
function canOperate()
{
    return (num1 !== undefined && num2 !== undefined && operater !== undefined);
}


// returns answer
function getAnswer(operater, num1, num2)
{
    return parseFloat(operate(operater, Number(num1), Number(num2)).toFixed(3))
}


// displays answer
function displayAnswer(answer)
{
    // round to 3rd place if answer len is more than 13
    if (String(answer).length > 13)
    {
        output.textContent = Number.parseFloat(answer).toExponential(3); // rounds to the 3rd place
    }
    else
    {   // if answer length is less than or equal to 13
        output.textContent = answer; 
    }
}


// trying to make buttons onClick
let numBtn = document.querySelectorAll('.num');
numBtn.forEach((button) => 
{
    button.addEventListener('click', () => 
    {
        if (++digits < 14) // only allow 13 digit numbers
        {
            let btnNum = button.textContent;

            if (output.textContent === '0' || hasOperator)
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
        {
            num2 = output.textContent; // store num 2 when operator was clicked on
        }
            
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
        if (num1 !== undefined && num2 !== undefined && operater !== undefined)
        {
            console.log(`${num1} ${operater} ${num2} = ${operate(operater, Number(num1), Number(num2))}`);

            answer = getAnswer(operater, num1, num2);

            displayAnswer(answer);

            num1 = answer;
            num2 = undefined;

            operater = button.textContent; // keeping the operator for the next operation
            hasOperator = true; // used for getting the 2nd input after chaining operators
        } 
        else
        {
            operater = button.textContent; // store the operator
            digits = 0;
            output.textContent = ''; // clear output when an operator is clicked on
        }

        console.log(button.textContent + ' is an operator');
    });
});


// getting equal button to work
let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', (e) => 
{
    // only do operator if it's defined
    if (canOperate())
    {
        console.log(e.target.textContent + " was clicked");
        console.log(`${num1} ${operater} ${num2} = ${operate(operater, Number(num1), Number(num2))}`);
        
        answer = getAnswer(operater, num1, num2);

        displayAnswer(answer);

        num1 = answer; // storing answer to num1 so it can be used later

        reset();
    }
    else    
        console.log('no operator');
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


// clear button
let clearBtn = document.querySelector('.Clear');
clearBtn.addEventListener('click', () => 
{
    reset();
    output.textContent = '0';
});











