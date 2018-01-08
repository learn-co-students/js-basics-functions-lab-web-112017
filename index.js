// Code your solution in this file!
function distanceFromHqInBlocks (place) {
  final = 42 - place;
  if (final < 0) {
    return final * -1;
  } else {
    return final;
  }
}

function distanceFromHqInFeet (place) {
  return distanceFromHqInBlocks(place) * 264;
}

function distanceTravelledInFeet (start, destination) {
  final = (start - destination);
  if (final < 0) {
    final = final * -1;
  } else {
    final;
  }
  return final * 264;
}

function calculatesFarePrice (start, destination) {
  final = distanceTravelledInFeet(start, destination);

  if (final < 400) {
    return 0;
  } else if (final < 2000) {
    return .02 * final;
  } else if (final > 2000 && final < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


// Given the same starting and ending block, return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot. Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
