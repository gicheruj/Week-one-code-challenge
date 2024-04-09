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
demeritPoints(567)