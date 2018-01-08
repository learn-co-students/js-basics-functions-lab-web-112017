// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  blocks = block - 42;
  if (blocks < 0) {
    blocks = blocks * -1;
  }
  return blocks
}

function distanceFromHqInFeet(block) {
  blocks = distanceFromHqInBlocks(block);
  feet = blocks * 264;
  return feet;
}


function distanceTravelledInFeet(block1, block2) {
  blocks = block1-block2
  if (blocks < 0) {
    blocks *= -1;
  }
  return blocks*264;
}

function calculatesFarePrice(block1, block2) {
  feet = distanceTravelledInFeet(block1, block2);
  if (feet <= 264) {
    price = 0;
  }
  else if (feet > 400 && feet < 2000) {
    price = feet * .02;
  }
  else if (feet >= 2000 && feet <=2500) {
    price = 25;
  }
  else {
    return 'cannot travel that far';
  }
  return price;
}
