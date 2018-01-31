var outputDiv;

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var operators = ['+','-','*','/'];
var operations = ['add','sub','mul','div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp){
    try {
       return eval(mathExp)
    } catch (e) {
       return NaN
    }
}


document.addEventListener('DOMContentLoaded', function () {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function (event) {
    var elementId = event.target.id;
    // outputDiv.innerText += elementId;
    ops(elementId)
    

    if (elementId === "clr") {
      outputDiv.innerText = ""
    } else if (elementId === "eq") {
      outputDiv.innerText = calculate(outputDiv.innerText)
    } else if (elementId === "del") {
      var arr = outputDiv.innerText.split("")
      arr.pop()
      outputDiv.innerText = ""
      outputDiv.innerText += arr.join("")
    }
    console.log("this is the id:" + elementId)
    console.log("this is the inner text:", outputDiv.innerText)
    console.log(outputDiv.innerText.split(""))

    repeat(outputDiv)
  })

})

function ops (ID) {

  var index = operations.indexOf(ID)
  
  if (operations.includes(ID) && 
  outputDiv.innerText[outputDiv.innerText.length - 1] !== operators[index]) {
    outputDiv.innerText += operators[index];
  } 
  
  // if (outputDiv.innerText[outputDiv.innerText.length - 1] === operators[index]) {
  //   outputDiv.innerText += "yes"
  // }
  
  if(numbers.includes(ID)) {
    outputDiv.innerText += ID;
  }

  
}

// function repeat (rep) {
//   var arr = rep.innerText.split("");

// operators.in
//   for (var i = 0; i < operators.length; i++) {

//     if (arr[arr.length - 1].includes(operators[i])) {
//       outputDiv.innerText += 
//     }
//   }

// } 