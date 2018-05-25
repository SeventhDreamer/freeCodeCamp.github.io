var clearOnNextOperation = false;
var previouslyAnOperator = true;

var integers = []; //holds numbers that will be processed later
var operators = []; //holds operators that will be processed later

function processHighPriority(){
  var n =[];
  var hop =[];
  //pop off higher priority operators on the stack so they can be evaluated left to right
  //also pop off associated values
      while (operators[operators.length - 1] == "x" || operators[operators.length - 1] == "/") {
        n.push(integers.pop());
        hop.push(operators.pop());
      }
  //execute the high priority operators
      for(var i =n.length-1; i >=0; i--){
        if (hop[i] == "/") {
          integers[integers.length - 1] = integers[integers.length - 1] / n[i];
        } else {
          integers[integers.length - 1] = integers[integers.length - 1] * n[i];
        }
      }
}

//adds the next number to the equation
function addValue(op) {
  integers.push(Number(document.getElementById("elm").innerHTML));

  if (operators.length == 0) {
    //the first operator is always pushed on the stack
    operators.push(op);
  } else {
    if (op == "+" || op == "-") {
      processHighPriority();
      operators.push(op);
    } else {
      operators.push(op);
    }
  }  
}

//evaluate the final expression
function equals() {
  processHighPriority();
  
  var result = integers.shift();
  var op = operators.shift();
  while (integers.length > 0) {
    var num = integers.shift();
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "x":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
    op = operators.shift();
  }
  return Math.round(result*100)/100;
}

//reset everything to the initial state
document.getElementById("clear").onclick = clear;
function clear() {
  document.getElementById("elm").innerHTML = "";
  document.getElementById("exp").innerHTML = "";
  integers = [];
  operators = [];
  previouslyAnOperator = true;
  clearOnNextOperation = false;
}


//remove the last typed number
document.getElementById("backspace").onclick = function() {
  if (document.getElementById("elm").innerHTML != "") {
    var temp = "";
    temp = document.getElementById("elm").innerHTML;
    if (temp.length == 1) previouslyAnOperator = true;

    document.getElementById("elm").innerHTML = temp.substring(
      0,
      temp.length - 1
    );
  }
};

//updates the display to reflect the actions taken
function numberComplete() {
  if (clearOnNextOperation) {
    document.getElementById("exp").innerHTML = "";
    clearOnNextOperation = false;
  }
  document.getElementById("exp").innerHTML += document.getElementById(
    "elm"
  ).innerHTML;
  document.getElementById("elm").innerHTML = "";
}

document.getElementById("multiply").onclick = function() {
  if (!previouslyAnOperator) {
    addValue("x");
    numberComplete();
    document.getElementById("exp").innerHTML += "x";
    previouslyAnOperator = true;
  }
};
document.getElementById("add").onclick = function() {
  if (!previouslyAnOperator) {
    addValue("+");
    numberComplete();
    document.getElementById("exp").innerHTML += "+";
    previouslyAnOperator = true;
  }
};
document.getElementById("subtract").onclick = function() {
  if (!previouslyAnOperator) {
    addValue("-");
    numberComplete();
    document.getElementById("exp").innerHTML += "-";
    previouslyAnOperator = true;
  }
};
document.getElementById("divide").onclick = function() {
  if (!previouslyAnOperator) {
    addValue("/");
    numberComplete();
    document.getElementById("exp").innerHTML += "/";
    previouslyAnOperator = true;
  }
};
document.getElementById("equal").onclick = function() {
  if (!previouslyAnOperator) {
    integers.push(Number(document.getElementById("elm").innerHTML));
    numberComplete();
    document.getElementById("exp").innerHTML += " = " + equals();
    clearOnNextOperation = true;
    previouslyAnOperator = true;
  }
};


document.getElementById("one").onclick = a1;
  function a1() {
  document.getElementById("elm").innerHTML += 1;
  previouslyAnOperator = false;
}
document.getElementById("two").onclick = a2;
function a2() {
  document.getElementById("elm").innerHTML += 2;
  previouslyAnOperator = false;
}
document.getElementById("three").onclick = a3;
function a3() {
  document.getElementById("elm").innerHTML += 3;
  previouslyAnOperator = false;
}
document.getElementById("four").onclick = a4;
function a4() {
  document.getElementById("elm").innerHTML += 4;
  previouslyAnOperator = false;
}
document.getElementById("five").onclick = a5;
function a5() {
  document.getElementById("elm").innerHTML += 5;
  previouslyAnOperator = false;
}
document.getElementById("six").onclick = a6;
function a6() {
  document.getElementById("elm").innerHTML += 6;
  previouslyAnOperator = false;
}
document.getElementById("seven").onclick = a7;
function a7() {
  document.getElementById("elm").innerHTML += 7;
  previouslyAnOperator = false;
}
document.getElementById("eight").onclick = a8;
function a8() {
  document.getElementById("elm").innerHTML += 8;
  previouslyAnOperator = false;
}
document.getElementById("nine").onclick = a9;
function a9() {
  document.getElementById("elm").innerHTML += 9;
  previouslyAnOperator = false;
}
document.getElementById("zero").onclick = a0;
function a0() {
  document.getElementById("elm").innerHTML += 0;
  previouslyAnOperator = false;
}
document.getElementById("period").onclick = a;
function a() {
  if(document.getElementById("elm").innerHTML.indexOf(".") == -1)
  document.getElementById("elm").innerHTML += ".";
}