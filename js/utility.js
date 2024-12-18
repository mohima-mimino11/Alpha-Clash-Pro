function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
function setBackGroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-[#FFA500]');
}

function removeBackGroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-[#FFA500]');
}

function getTextById(elementId){
  const element = document.getElementById(elementId)
  const elementText = element.innerText;
  return elementText;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setElementTextById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getRandomAlphabet(){
  // get or create an alphabet array
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);
  
  // get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  
  
  const alphabet = alphabets[index];
  // console.log(index, alphabet);
  return alphabet;
}