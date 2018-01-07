// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
  return Math.abs(42-streetNumber)
};

function distanceFromHqInFeet(streetNumber){
  return distanceFromHqInBlocks(streetNumber) * 264
};

function distanceTravelledInFeet(startStreet, endStreet){
  return Math.abs(startStreet-endStreet) * 264
};

function calculatesFarePrice(startStreet,endStreet){
  let feet =  distanceTravelledInFeet(startStreet,endStreet);

  switch(true){
    case feet < 400:
      return 0;
      break;
    case (feet >= 400 && feet < 2000):
      return feet * .02
      break;
    case (feet > 2000 && feet < 2500):
      return 25.00
      break;
    default:
      return 'cannot travel that far'
      break;
  };
};

function calculateVertical(beginning, destination){
  return (beginning-destination)*264;
};
