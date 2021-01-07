// -- Addition Section --
const add1 = document.getElementById('add-input-1');
const add2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

addButton.addEventListener('click', () => {
    const addValue = add1.valueAsNumber;
    const addValue2 = add2.valueAsNumber;

    const theSum = addValue + addValue2;

    addResults.textContent = theSum;
})

// -- Subtraction Section --
const sub1 = document.getElementById('sub-input-1');
const sub2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

subButton.addEventListener('click', () => {
    const subValue = sub1.valueAsNumber;
    const subValue2 = sub2.valueAsNumber;

    const theDifference = subValue - subValue2;

    subResults.textContent = theDifference;
})

// // -- Multiply Section --
const mult1 = document.getElementById('mult-input-1');
const mult2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResults = document.getElementById('mult-results');

multButton.addEventListener('click', () => {
    const multValue = mult1.valueAsNumber;
    const multValue2 = mult2.valueAsNumber;

    const theProduct = multValue * multValue2;

    multResults.textContent = theProduct;
})


// // -- Division Section --
const div1 = document.getElementById('div-input-1');
const div2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResults = document.getElementById('div-results');

divButton.addEventListener('click', () => {
    const divValue = div1.valueAsNumber;
    const divValue2 = div2.valueAsNumber;

    const theQuotient = divValue / divValue2;

    divResults.textContent = theQuotient;
})
