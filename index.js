// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >= 42) {
    return (location - 42)
  }
  else if (location < 42) {
    return (42 - location)
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(begin, end) {
  const blocks = begin - end;
  if (blocks > 0) {
    return blocks * 264
  }
  else if (blocks < 0) {
    return blocks * 264 * (-1)
  }
}


function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0
  }
  else if (feet > 400 && feet <= 2000){
    return 0.02*feet
  }
  else if (feet > 2000 && feet < 2500) {
    return 25
  }
  else if (feet > 2500) {
    return "cannot travel that far"
  }

}
