const numberKeyPad = document.querySelector('.numbers');
let userInput = document.getElementById('user-input-pin');

const submitBtn = document.getElementById('submit-btn');


const generateBtn = document.getElementById('generate-btn');
const generatedPin = document.getElementById('show-pin');

generateBtn.addEventListener('click', function () {
  generatedPin.value = randomRange(1000, 9999);
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = '#495bc3';
  resetStage();
});

function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }
