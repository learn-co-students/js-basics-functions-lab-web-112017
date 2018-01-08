// Code your solution in this file!
function distanceFromHqInBlocks(num){
  return Math.abs(num - 42);
}

function distanceFromHqInFeet (num) {
  return 264 * distanceFromHqInBlocks(num);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet (start, end){
  return Math.abs(start - end)*264;

}


function calculatesFarePrice(start, end) {
  x = distanceTravelledInFeet(start, end)
  if (x < 400){
    return 0;
  } else if (400 <= x &&  x <= 2000){
    return x*0.02;
  } else if (2000 < x && x <= 2500){
    return 25;
  } else if (x > 2500){
    return 'cannot travel that far';
  }

}
