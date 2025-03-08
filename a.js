let anomalyCounter = 0;
let beforeAnomalyCounter = 0;
let correctCounter = 0;
function checkTestVar() {
    if (testVar != 0) {
        // testVar should always be 0
        anomalyCounter++;
        console.log(`a.js: testVar is ${testVar}`);
    } else {
        correctCounter++;
        if (anomalyCounter == 0) {
            beforeAnomalyCounter++;
        }
    }
}

function stats() {
    console.log(`counters: anomaly: ${anomalyCounter} beforeAnomaly: ${beforeAnomalyCounter} correct: ${correctCounter}`);
}
