// Here the code imports readline and creates an interface for it to work
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// This part prompts the user to input the speed of the car
function input(callback) {
  rl.question("Enter speed of the car: ", (speed) => {
    callback(parseFloat(speed));
  });
}
// This part of the code calculates the demerit points if the driver is overspeeding
function demeritPoints(speed) {
  if (speed <= 70) {
    console.log("Ok");
  } else if (speed > 70) {
    const excessiveSpeed = speed - 70;
    const points = excessiveSpeed / 5;
    console.log(points);
    if (points > 12) {
      console.log("License suspended!!");
    }
  }
}

input((speed) => {
  demeritPoints(speed);
  rl.close();
});