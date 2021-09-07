let txtArea = document.getElementById('texter');
const ouputer = document.getElementById('output');
const form = document.querySelector('form');
const numDisplayer = 0;
const disp = 20;
const result = document.getElementById('result');
let num = 0

let txt = 'Enter text to display the number of letters inputed...';
function showText() {
    if(num < txt.length) {
        document.querySelector('#mytext').innerHTML  += txt.charAt(num);
        num++;
        setTimeout(showText, 200)
    }
}

showText()

form.addEventListener('keydown', (function displayCounter() {
   
    if(numDisplayer < disp) {
        let text1 = btoa(txtArea.value.length);
        let text2 = txtArea.value.length;
       ouputer.innerText = "The number of letters are: ".concat(text1 + '  (this is encoded)')
       result.innerText = "The number of letters are: ".concat(text2);
      setTimeout(clear, 60000);
  } 
}) )

function clear() {
    ouputer.innerHTML = '';
    result.innerText = '';
}