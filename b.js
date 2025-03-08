/*
    This is a minimal reproducer for a Chromium browser bug.

    A variable is read as NaN despite not being NaN in setInterval context.
    While i'm multiplying 0 with Math.PI here, i've observed this bug in a different context i can't reproduce where a
    simple timestamp was assigned to the variable afterwards being read as NaN.

    For this reproducer, using the multiplication of 0 and Math.PI or Math.E seems necessary, i don't know why.

    The function accessing testVar being in a different js source file was a requirement to reproduce at least for me.
*/

let testVar;
testVar = 0 * Math.PI;

console.log(`testVar is ${testVar}`);

// same bug for multiplying with Math.E, no bug for a constant number


setInterval(checkTestVar, 3);
