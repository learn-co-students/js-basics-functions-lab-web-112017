// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}


function calculateVertical(low, high) {
  return (high - low) * 264
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  switch (true) {
    case distance <= 400:
      return 0
    case distance > 2500:
      return 'cannot travel that far'
    case distance > 2000:
      return 25
    case distance > 400:
      return distance * .02
  }
}
