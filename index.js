// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(origin,current_location) {
  const travelled = Math.abs(current_location - origin);
  return travelled * 264;
}

function calculatesFarePrice(origin,destination) {
  const distance = distanceTravelledInFeet(origin,destination);

  switch(true){
    case (distance === 264):
      return 0;
      break;
    case (distance > 2500):
      return 'cannot travel that far';
      break;
    case (distance > 2000):
      return 25;
      break;
    case (distance > 400):
      return distance * 0.02;
  }


}
