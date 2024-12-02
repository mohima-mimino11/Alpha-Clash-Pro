// function playNow(){
//   //step-1: hide the home screen.To hide the screen add hidden class to home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // show the play ground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function continueGame(){
  // step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  // console.log(alphabet);

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  setBackGroundColorById(alphabet)
  


}

function playNow(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}

