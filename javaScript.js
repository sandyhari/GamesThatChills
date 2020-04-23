
const quizContainer = document.getElementById('quiz');
const txtbox = document.getElementById('txtbox1');
const btn = document.getElementById('button-addon2');
let questions =
  {
    1 :"Multiply your given Number with 3, and wait for 5 sec..",
    2 :"Now add the resultant Number with 3 and wait for 5 more sec..",
    3 :"Ok now multiply the obtained Number again with 3 and wait for 5 more sec..",
    4 :"That's good -- my boi, now add the digits of the number you got and check the results by hitting below button."
  };
let i = 1;
btn.addEventListener("click",startMusic)
function startMusic(){
  myVar = setInterval(myFunction,9000);
  function myFunction(){
    txtbox.disabled  = true;
    quizContainer.innerText = questions[i];
    i++;
    console.log(i);
    if (i == 5){
      clearInterval(myVar);
    }
  }
}

function txtVal(){
  let val = txtbox.value;
  if (val < 1){
    alert("Dont do Over-Actions Enter any number between 1 to 9.");
  }
  else if (val > 9) {
    alert("Dont do Over-Actions Enter any number between 1 to 9.");
  }
}
