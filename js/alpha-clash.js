// function playNow(){
//   //step-1: hide the home screen.To hide the screen add hidden class to home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // show the play ground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);
  if(playerPressed === 'Escape'){
    gameOver();
  }

  // get the expected key to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, currentAlphabetElement);
  if(playerPressed === expectedAlphabet){
   
    const currentScore = getElementTextById('current-score');
    const updatedScore = currentScore + 1;
    setElementTextById('current-score', updatedScore)
    
    

    // -----------------------------------------------
    // // update score:
    // // 1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // // console.log(currentScore);
    
    // // 2.increase the score by 1
    // const newScore = currentScore + 1;
    // // 3. show the updated score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackGroundColorById(expectedAlphabet);
    continueGame();
    
  }else{
    
    const currentLife = getElementTextById('current-life');
    const updatedLife = currentLife - 1;
    setElementTextById('current-life', updatedLife);
    // console.log(updatedLife);
    if(updatedLife === 0){
      gameOver();
    }
    

    // -------------------------------
    // // update life:
    // // 1. get the current life
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);
    
    // // 2.decrease the life by 1
    // const newLife = currentLife - 1;
    // // 3. show the updated life
    // currentLifeElement.innerText = newLife;
  }
  
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
  // step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  // console.log(alphabet);

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  setBackGroundColorById(alphabet)
  


}

function play(){
  // hide everything except playground
  hideElementById('home-screen');
  hideElementById('final-result');
  showElementById('play-ground');
  continueGame();

  // reset the score and life in playground
  setElementTextById('current-score', 0);
  setElementTextById('current-life', 5)
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-result');
  // update final score
  const lastScore = getElementTextById('current-score');
  setElementTextById('final-score', lastScore);
  
  // clear the current alphabet highlight color when a new game is started
  const alphabet = getTextById('current-alphabet');
  removeBackGroundColorById(alphabet);
  
}

