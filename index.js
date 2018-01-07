// // Code your solution in this file!
function distanceFromHqInBlocks(num) {
  if (num >= 42) {
    return num - 42;
  } else {
    return 42 - num;
  }
}
// returns a distance in blocks ‣

// calculates distances below 42nd street ‣

function distanceFromHqInFeet(num) {
  if (num >= 42) {
    return (num - 42) * 264;
  } else {
    return (42 - num) * 264;
  }
}
// returns a distance in feet ‣

// calculates distances below 42nd street ‣

function distanceTravelledInFeet(num1, num2) {
  if (num1 >= 42) {
      return (num2 - num1) * 264;
  } else {
      return (num1 - num2) *264;
  }
}
// returns the distance travelled in feet ‣
//
// returns distance when destination is below distance ‣
// ReferenceError: distanceTravelledInFeet is not defined
//     at Context.<anonymous> (test/indexTest.js:42:7)
function calculatesFarePrice(start, destination) {
  let total = distanceTravelledInFeet(start, destination);
  if (total > 2400) {
      return 'cannot travel that far';
  } else if (total > 400 && total < 2000) {
      return total * 0.02;
  } else if (total > 2000) {
      return 25;
  } else if (total < 400) {
      return 0;
  }
}
// gives customers a free sample ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:48:7)
// charges 2 cents per foot when total feet travelled is between 400 and 2000 in example below is 528 ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:53:7)
// charges 25 dollars for a distance over 2000 feet ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:57:7)
// does not allow rides over 2500 feet