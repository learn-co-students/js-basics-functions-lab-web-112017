// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  return location > 42 ? location - 42 : 42 - location;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) *264;
}

function distanceTravelledInFeet(start, end) {
  return start > end ? (start - end) * 264 : (end - start) * 264 ;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)

  if (distance < 400 ) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return distance * 0.02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }

}
