// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  return Math.abs(42 - dest)
}

function distanceFromHqInFeet(dest) {
  return distanceFromHqInBlocks(dest) * 264
}

function distanceTravelledInFeet(start, dest) {
  return Math.abs(start-dest) * 264
}

function calculatesFarePrice(start, destination) {
  const dist = Math.abs(start - destination) * 264

  if (dist < 400) {
    return 0
  } else if (dist < 2000) {
    return dist * .02
  } else if (dist < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
