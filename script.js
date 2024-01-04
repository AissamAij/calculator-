const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let oreratorValue = '';
let awitingNextValue = false;

function sendEventValue(number){
    if(awitingNextValue){
        calculatorDisplay.textContent = number;
        awitingNextValue = false;

    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
} 

function addDecimal(){
    if(awitingNextValue) return;
    if(!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

// calculate first and second values depending on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (firstNumber, secondNumber) => secondNumber,
} 

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if(operatorValue && awitingNextValue) {
        operatorValue = operator;
        return};
    // asign firstValue if no value 
    if(!firstValue){
        firstValue = currentValue;
    } else{
        console.log(firstValue, operatorValue, currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        console.log('calculation', calculation);
        firstValue = currentValue
    }
    awitingNextValue = true;
    operatorValue = operator;   
}

// ADD EVENT LISTINER FOR NUNBERS, OPERATORS, DECIMAL BUTTONS
inputBtns.forEach((inputBtn) =>{
    if(inputBtn.classList.length === 0){
        inputBtn.addEventListener('click', () => sendEventValue(inputBtn.value));

    } else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }
    else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }
}) 


// Reset all, dispay 
function resetAll(){
     firstValue = 0;
     oreratorValue = '';
     awitingNextValue = false;
   calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);