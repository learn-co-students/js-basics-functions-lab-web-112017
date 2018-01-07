// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42;
  if (location >= 42) {
    return location - hq;
  } else {
     return hq - location;
  }
}

function distanceFromHqInFeet(location) {
   return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(beg, end) {
  if (end > beg) {
    return (end - beg) * 264;
  } else {
    return (beg - end) * 264;
  }
}

function calculatesFarePrice(beg, end) {
  const distance = distanceTravelledInFeet(beg, end);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
