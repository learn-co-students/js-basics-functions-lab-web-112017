function distanceFromHqInBlocks(distance) {
  return Math.abs(42 - distance);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(start - destination) * 264;

  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return distance * 0.02
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
