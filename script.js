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

let numbers = '0123456789.';


calc.addEventListener('click', (e) => 
{
    let str = e.target.innerText;

    if (numbers.includes(str)) // checks if the button clicked is a number or decimal
    {
        console.log('this is a number');

        let newStr;
        // 0 is defult value for output screen, so if 0, don't include it
        if (output.textContent === '0') 
        {
            if (str === '.') // keep 0 if first input is a decimal
               newStr = output.textContent + str; 
            else
                newStr = str; // replace 0 with number
        }
        else
        {
            newStr = output.textContent + str; // adds the number to the end
        }
        
        console.log(newStr);

        output.textContent = newStr;
    }
    else // if not a number or decimal
    {
        console.log(str);
        output.textContent = str;
    }
});


/**
 * trying to make the screen add the number or decimal at the end, only 1 decimal
 */



