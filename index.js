// Code your solution in this file!


// assumes 42 street is your location

function distanceFromHqInBlocks(num) {
  if (num > 42) {
    return (num - 42)
  } else if (num <= 42) {
    return 42 - num
  }
}


function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264
}


function distanceTravelledInFeet(num1, num2) {
  if (num1 > num2) {
    return (num1 - num2) * 264
  } else if (num1 < num2) {
    return (num2 - num1) * 264
  }
}


function calculatesFarePrice(num1, num2) {
  let distance = distanceTravelledInFeet(num1, num2)

  if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000) {
    return 25.00
  } else if (distance === 264) {
    return 0
  } else {
    return distance * 0.02
  }
}
