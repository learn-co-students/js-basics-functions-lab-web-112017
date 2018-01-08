// Code your solution in this file!
function distanceFromHqInBlocks(address) {
  return address > 42 ? address - 42 : 42 - address
}

function distanceFromHqInFeet(address) {
  return distanceFromHqInBlocks(address) * 264
}

function distanceTravelledInFeet(start, end){
  return start > end ? (start - end) * 264 : (end - start) * 264
}

function calculatesFarePrice(start, end) {
  d = distanceTravelledInFeet(start, end)
  switch (true) {
    case d > 2500:
    return 'cannot travel that far';
    case d > 2000 && d < 2500:
    return 25;
    case d > 400 && d < 2000:
    return d * 0.02;
    default:
    return 0;
  }
}
