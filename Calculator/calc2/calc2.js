
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let calculate = document.getElementById("calculate");
let num1error = document.getElementById("num1error");
let num2error = document.getElementById("num2error");
let operatorerror = document.getElementById("operatorerror");
let Result;
let num1status , num2status , operatorstatus = false;

num1error.style.display = "none";
num2error.style.display = "none";
operatorerror.style.display = "none";

submit.addEventListener("click",function(){
    let firstnum = document.getElementById("fn");
    let secondnum = document.getElementById("sn");
    let operator = document.getElementById("op");

    checkValidation(firstnum,secondnum,operator);

    if(num1status ==false && num2status ==false && operatorstatus == false){
        firstnum = parseInt(firstnum.value)
    secondnum = parseInt(secondnum.value)
    switch(operator.value){
        case "+":
            Result = firstnum + secondnum;
            break;
        case "-":
            Result = firstnum - secondnum;
            break;
        case "*":
            Result = firstnum * secondnum;
            break;
        case "/":
            Result = firstnum / secondnum;
            break;
        case "%":
            Result = firstnum % secondnum;
            break;
    }
    result.innerHTML = Result;
    }
    
    
    
})



function checkValidation(firstnum,secondnum,operator){
    if (firstnum.value == "" || firstnum.value == null || firstnum.value == undefined){
        num1error.style.display = "block";
        num1status = true;
     } else{
         num1error.style.display = "none";
         num1status = false;
     }
     if (secondnum.value == "" || secondnum.value == null || secondnum.value == undefined){
         num2error.style.display = "block";
         num2status =true;
      } else{
          num2error.style.display = "none";
          num2status = false;
      }
      if (operator.value == ""){
         operatorerror.style.display = "block";
         num2status = true;
      } else{
          operatorerror.style.display = "none";
          num2status = false;
      }
}