let txtArea = document.getElementById('texter');
const ouputer = document.getElementById('output');
const numDisplayer = 0;
const disp = 20;
const result = document.getElementById('result');
const textDisplay = document.querySelector('.textdisplay');

const myArr = txtArea.value;

let num = 0

let txt = 'Enter text to display the number of letters inputed...';
function showText() {
    if(num < txt.length) {
        document.querySelector('.mytext').innerHTML  += txt.charAt(num);
        num++;
        setTimeout(showText, 20)
    }
}

showText()

function displayCounter() {
   
    if(numDisplayer < disp) {
      ouputer.innerHTML = 'The number of letters are: ' + txtArea.value.length;
      clearAll();
      setTimeout(clearOutputer, 3000);
  } 
    
}

function clearAll() {
    txtArea.value = " ";
}

function clearOutputer() {
    ouputer.innerHTML = '';
}