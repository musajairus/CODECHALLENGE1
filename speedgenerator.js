// Challenge 2: Speed Detector
// Checks if driver is within speed limit or assigns demerit points

function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;

  if (speed < speedLimit) {
    return "Ok";
  } else {
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

// Example test
console.log(speedDetector(150)); // Output: Points: 2
