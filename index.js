// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  distance = Math.abs(42 - street);
  return distance;
}

function distanceFromHqInFeet (street) {
  let distance = distanceFromHqInBlocks(street);

  let feet = distance * 264;
  return feet
}

function distanceTravelledInFeet (start, end) {
  let net = Math.abs(start - end);
  let distance = net * 264;
  return distance;
}

function calculatesFarePrice (start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price = 0;
  switch (true) {
    case distance <= 400 :
      price = 0;
      break;
    case distance <= 2000:
      price = .02 * distance;
      break;
    case distance <= 2500:
      price = 25;
      break;
    default:
      price = 'cannot travel that far';
  }
  return price;
}
