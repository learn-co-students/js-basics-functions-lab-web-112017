// Code your solution in this file!
function distanceFromHqInBlocks(street) {
   return Math.abs(42 - street);
}

function distanceFromHqInFeet(blocks) {
  let difference = distanceFromHqInBlocks(blocks)
  return difference * 264;
}

function distanceTravelledInFeet(start, end) {
  let difference = Math.abs(start - end);
  return difference * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
     return distance * .02;
   } else if (distance > 2000 && distance < 2500) {
     return 25;
   } else {
     return 'cannot travel that far';
  }
}
