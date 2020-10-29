let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*9);
};

const compareGuesses = (human, comp, target) => {
  let howCloseHuman = Math.abs(human - target);
  let howCloseComp = Math.abs(comp - target);
  if (howCloseHuman < howCloseComp) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  switch(winner) {
    case 'human': 
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
}