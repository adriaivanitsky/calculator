// import functions and grab DOM elements
import { add, sub, multiply, divide } from './calculations.js';

//addition
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const sum = document.getElementById('sum');
const addButton = document.getElementById('add-button');

//subtraction
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const difference = document.getElementById('difference');
const subButton = document.getElementById('sub-button');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const product = document.getElementById('multiply-button');
const multiplyButton = document.getElementById('multiply-button');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-1');
const quotient = document.getElementById('divide-button');







// initialize global state

// set event listeners 

addButton.addEventListener('click', ()=>{
    const x = Number(addInput1.value); //set x equal to the value of addInput1
    const y = Number(addInput2.value);


    //get the sum of x and y anad store it in a variable
    const result = add (x, y);
    sum.textContent = result;
    
});

subButton.addEventListener('click', ()=>{
    const x = Number(subInput1.value);
    const y = Number(subInput2.value);

    const result = sub (x, y);
    difference.textContent = result;
});

multiplyButton.addEventListener('click', ()=>{
    const x = Number(multiplyInput1.value);
    const y = Number(subInput2.value);

    const result = multiply (x, y);
    product.textContent = result;
});