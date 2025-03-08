/*
    This is a minimal reproducer for a Chromium browser bug.

    A variable is read as NaN despite not being NaN.
    While this reproducer assigns testVar the value 0 * Math.PI,
    i've observed this bug in a different context i can't reproduce where a
    simple timestamp was assigned to the variable afterwards being read as NaN.

    For this reproducer, using the multiplication of 0 and Math.PI or Math.E seems necessary, i don't know why.

    The function accessing testVar being in a different js source file was a requirement to reproduce at least for me.
*/

let testVar;
testVar = 0 * Math.PI;

console.log(`b.js: testVar is ${testVar}`);

// same bug for multiplying with Math.E, no bug for a constant number

for (let i = 0; i < 10000; i++) {
    checkTestVar();
}

console.log(stats());

document.getElementById("stats").innerText = stats();

if (anomalyCounter) {
    document.getElementById("affected").innerText = "This browser version is affected."
} else {
    document.getElementById("affected").innerText = "This browser version is probably not affected."
}
