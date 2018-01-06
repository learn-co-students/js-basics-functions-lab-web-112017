// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  if (num > 42) {
    return num - 42;
  } else if (num < 42) {
    return 42 - num;
  }
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else if (start < destination) {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  } else if (400 < distance && distance < 2000) {
    return distance * .02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else {
    return 25;
  }
}
