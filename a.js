let anomalyCounter = 0;
let beforeAnomalyCounter = 0;
let correctCounter = 0;
function checkTestVar() {
    if (testVar != 0) {
        // testVar should always be 0
        if (anomalyCounter == 0 ) {
            console.log(`a.js: testVar is ${testVar} (printed only once)`);
        }
        anomalyCounter++;
    } else {
        correctCounter++;
        if (anomalyCounter == 0) {
            beforeAnomalyCounter++;
        }
    }
}

function stats() {
    return `counters: anomaly: ${anomalyCounter} correct: ${correctCounter} beforeAnomaly: ${beforeAnomalyCounter}`;
}
