import {
    addClickHandler,
    subClickHandler,
    multiplyClickHandler,
    divClickHandler
} from './handlers.js';

// -- Addition Box --
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addClickHandler)

// -- Subtraction Box --
const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', subClickHandler);

// -- Multiply Box --
const multButton = document.getElementById('mult-button');

multButton.addEventListener('click', multiplyClickHandler);

// -- Division Box --
const divButton = document.getElementById('div-button');

divButton.addEventListener('click', divClickHandler);
