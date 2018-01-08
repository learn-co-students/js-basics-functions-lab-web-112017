// Code your solution in this file!
function distanceFromHqInBlocks(start){
  return Math.abs(42-start)
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start)*264
}

function distanceTravelledInFeet(start,end) {
  return 264*Math.abs(start-end)
}

function calculatesFarePrice(start, end) {
  feet = distanceTravelledInFeet(start, end)
  if (feet < 400){
    return 0;
  } else if (feet < 2000) {
    return 10.56;
  } else if (feet < 2500) {
    return 25;
  } else if (feet >= 2500) {
    return 'cannot travel that far';
  }
}
