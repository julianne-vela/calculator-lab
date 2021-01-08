// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getDiff, getProduct, getQuotient, getSum } from '../utils.js';

const test = QUnit.test;

test('should return 12 when provided 7 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(7, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return -5 when provided -7 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(-7, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 5 when provided 7 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiff(7, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 255 when provided 349 and 94', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 255;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiff(349, 94);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 945 when provided 27 and 35', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 945;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getProduct(27, 35);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 56115 when provided 1247 and 45', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 56115;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getProduct(1247, 45);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 157 when provided 785 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 157;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getQuotient(785, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 24 when provided 144 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getQuotient(144, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
