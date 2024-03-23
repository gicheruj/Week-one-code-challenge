// The code first prompts the user to input the speed of the car
const prompt = require('prompt-sync')();
const input = function () {
    console.log("Enter speed of the car.");
    return parseFloat(prompt());
}
// This is a function that calculates the demerit points.
const speed = input();
function demeritPoints(speed) {
    if (speed <= 70) {
        console.log("Ok");
    }else if (speed > 70) {
        const excessiveSpeed = speed - 70;
        const points = excessiveSpeed/5;
        console.log(points);
    }
}
demeritPoints(speed);