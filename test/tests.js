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

test ('sub function', (expect =>{
    const sub1 = 7;
    const sub2 = 4;
    const expected = 3;
    const actual = sub(sub1, sub2);
    expect.equal(actual, expected);

}));

test ('multiply function', (expect =>{
    const multiply1 = 5;
    const multiply2 = 4;
    const expected = 20;
    const actual = multiply(multiply1, multiply2);
    expect.equal(actual, expected);
}));


