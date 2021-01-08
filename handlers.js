import { getSum, getDiff, getProduct, getQuotient } from './utils.js';

// -- Addition Box --
const add1 = document.getElementById('add-input-1');
const add2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function addClickHandler() {
    const addValue = add1.valueAsNumber;
    const addValue2 = add2.valueAsNumber;

    const theSum = getSum(addValue, addValue2);

    addResults.textContent = theSum;
};

// -- Subtraction Box --
const sub1 = document.getElementById('sub-input-1');
const sub2 = document.getElementById('sub-input-2');
const subResults = document.getElementById('sub-results');

export function subClickHandler() {
    const subValue = sub1.valueAsNumber;
    const subValue2 = sub2.valueAsNumber;

    const theDifference = getDiff(subValue, subValue2);

    subResults.textContent = theDifference;
}

// -- Multiply Box --
const mult1 = document.getElementById('mult-input-1');
const mult2 = document.getElementById('mult-input-2');
const multResults = document.getElementById('mult-results');

export function multiplyClickHandler() {
    const multValue = mult1.valueAsNumber;
    const multValue2 = mult2.valueAsNumber;

    const theProduct = getProduct(multValue, multValue2);

    multResults.textContent = theProduct;
};

// -- Division Box --
const div1 = document.getElementById('div-input-1');
const div2 = document.getElementById('div-input-2');
const divResults = document.getElementById('div-results');

export function divClickHandler() {
    const divValue = div1.valueAsNumber;
    const divValue2 = div2.valueAsNumber;

    const theQuotient = getQuotient(divValue, divValue2);

    divResults.textContent = theQuotient;
};