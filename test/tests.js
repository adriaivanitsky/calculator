import { add, sub, multiply, divide } from '../calculations.js';

const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) =>{
    const add1 = 3;
    const add2 = 4;
    const expected = 7;
    const actual = add(add1, add2);
    expect.equal(actual, expected);

});



// test('sub function'), (expect) => {
//     const expected = 4
//     const actual = 