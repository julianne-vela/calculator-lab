Calculator App plan

End Result: User inputs value and clicks 'Submit'. The sum of the two values is then displayed on the screen. 

HTML Setup: 
    - Create 2 Input fields, a plus sign, a button, and a secret display box for the results. 

Javascript time: 
    1) Get the dom elements for each input and button by using document.getElementByID('id')
        - Validation: console.log the DOM elements
    1) Add an event listener to the button
        - Validation: Console log 'hello world' on click
    1) Get access to what the user types in the field
        - How: get the .value property of the input element. 
        - Validation: console log the user input on click (in the cool zone)
    1) Use the input to calculate the sum of the two fields. 
        - Validation: log the result to the console (in the cool zone)
    1) Display the result to the user on screen. 
        - How: We need to get the secret box and inject the result into the .textContent property (in the cool zone)
        - Validation: we should see it display on screen. 

Repeat for Subtraction, multiplication, and division. 