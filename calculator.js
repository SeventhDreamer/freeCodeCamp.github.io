var values =[] ;
var operators=[];
var clearOnNextOperation = false;

function clear() {
  document.getElementById('elm').innerHTML="";
  document.getElementById('exp').innerHTML="";
};
document.getElementById("aclear").onclick = clear;

function numberComplete(){
  if(clearOnNextOperation){
    clear;
  }
  document.getElementById('exp').innerHTML += document.getElementById('elm').innerHTML;
  document.getElementById('elm').innerHTML = '';
};

document.getElementById("ax").onclick = function() {
  numberComplete;
  document.getElementById('exp').innerHTML += 'x';
};
document.getElementById("a+").onclick = function() {
  numberComplete;
  document.getElementById('exp').innerHTML += '+';
};
document.getElementById("a-").onclick = function() {
  numberComplete;
  document.getElementById('exp').innerHTML += '-';
};
document.getElementById("a/").onclick = function() {
  numberComplete;
  document.getElementById('exp').innerHTML += '/';
};
document.getElementById("a=").onclick = function() {
  numberComplete;
  document.getElementById('exp').innerHTML += " = ";
  clearOnNextOperation = true;
};

document.getElementById("a1").onclick = function() {
  document.getElementById('elm').innerHTML+=1;
};
document.getElementById("a2").onclick = function() {
  document.getElementById('elm').innerHTML+=2;
};
document.getElementById("a3").onclick = function() {
  document.getElementById('elm').innerHTML+=3;
};
document.getElementById("a4").onclick = function() {
  document.getElementById('elm').innerHTML+=4;
};
document.getElementById("a5").onclick = function() {
  document.getElementById('elm').innerHTML+=5;
};
document.getElementById("a6").onclick = function() {
  document.getElementById('elm').innerHTML+=6;
};
document.getElementById("a7").onclick = function() {
  document.getElementById('elm').innerHTML+=7;
};
document.getElementById("a8").onclick = function() {
  document.getElementById('elm').innerHTML+=8;
};
document.getElementById("a9").onclick = function() {
  document.getElementById('elm').innerHTML+=9;
};
document.getElementById("a0").onclick = function() {
  document.getElementById('elm').innerHTML+=0;
};
document.getElementById("a.").onclick = function() {
  document.getElementById('elm').innerHTML+='.';
};
