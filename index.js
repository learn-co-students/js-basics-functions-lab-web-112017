// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  if (location > 42)
    return location - 42
  else
    return 42 - location
};

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
};

function distanceTravelledInFeet(start, end) {
  if (start < end)
    return (end - start) * 264
  else
    return (start - end) * 264
};

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) <= 400)
    return 0
  else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2001)
    return distanceTravelledInFeet(start, end) * 0.02
  else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2501)
    return 25
  else
    return 'cannot travel that far'
};
