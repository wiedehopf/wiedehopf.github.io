let anomalyCounter = 0;
function checkTestVar() {
    if (isNaN(testVar)) {
        anomalyCounter++;
        console.log(`testVar is ${testVar} (${anomalyCounter})`);
    }
}
