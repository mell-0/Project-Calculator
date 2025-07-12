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


// displays results when equals button is clicked
function equalsToBtn()
{
    num2 = output.textContent;

    let result = operate(operater, Number(num1) , Number(num2));

    // only round if it's not decimal & if answer is more than 11 in len, & only rounds when operate went through
    if ((result !== undefined) && (result.toString().length > 11) && (result % 1 !== 0)) // only round if decimal
    {
        result = result.toFixed(11);
    }
        
    console.log(`num1: ${num1}, num2: ${num2}, operator: ${operater}, = ` + result);

    output.textContent = result;
}


let a = 6;
let b = 3;

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


let numbers = '0123456789.'; // used to check if input is a number or decimal
let operaters = '+-*/' ; // used to check if input is an operator


// used to store the values for the operator function
let num1 = 0;
let num2 = 0;
let operater;

// using the bubble feature so I don't need to make a onClick on all the buttons
calc.addEventListener('click', (e) => 
{
    let str = e.target.innerText; // gets the text of which button that was clicked

    if (numbers.includes(str)) // checks if the button clicked is a number or decimal
    {
        console.log('this is a number');

        let newStr; // used to store the new string that includes the new number at the end

        // 0 is defult value for output screen, so if only 0, don't include it
        if (output.textContent === '0') 
        {
            if (str === '.') // keep 0 if first input is a decimal
            {
                newStr = output.textContent + str; 
            }
            else
                newStr = str; // replace 0 with number
        }
        else
        {
            console.log(str + " a number");
            
            if (str === '.') // adding a 0 if there is non when using decimal
                output.textContent = '0';

            newStr = output.textContent + str; // adds the number to the end
        }
        
        console.log(newStr);

        output.textContent = newStr;
    }
    else // if not a number or decimal
    {
        console.log(str);

        if (str === 'Clear') // maybe put clear, equal, & pos/neg into a switch statement
        {
            output.textContent = '0';
            num1 = 0;
            num2 = 0;
            operater = undefined;
        }
        else
        {
            if (operaters.includes(str)) // if input was an operator
            {
                console.log('this is an operator');

                num1 = output.textContent;
                operater = str;

                //console.log('prev num: ' + num1);
                output.textContent = '';
            }
            else if (str === '=')
            {
                num2 = output.textContent;

                let result = operate(operater, Number(num1) , Number(num2));

                // only round if it's not decimal & if answer is more than 11 in len, & only rounds when operate went through
                if ((result !== undefined) && (result.toString().length > 11) && (result % 1 !== 0)) // only round if decimal
                {
                    result = result.toFixed(11);
                }
                   
                console.log(`num1: ${num1}, num2: ${num2}, operator: ${operater}, = ` + result);

                output.textContent = result;
            }
            else
                output.textContent = str;
        }
            
    }
});

// console.log("poo " + operate('+', 1, 2));




