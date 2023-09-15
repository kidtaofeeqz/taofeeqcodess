let head = document.querySelector(".heading");

let question = document.querySelector(".question");

let writeAnswer = document.querySelector(".response");

let sendBtn = document.querySelector(".send");

let lost = document.querySelector(".lost");

question.innerHTML = "what is the fullmeaning of html";

 sendBtn.onclick = function () {
    if (writeAnswer.value == "hyper text markup language"){
        questionTwo ()

    }else{
        lost.style.display = "flex";
    }
    
 }

 function questionTwo () {
    head.innerHTML = "Quiz two";
    question.innerHTML = "What is the fullmeaning of css";
    
    if (writeAnswer.value == "cascading style sheet"){
        questionThree ()
        writeAnswer.value ="";
        alert("hello")

    }else{
        lost.style.display = "flex";

    }
 }


 function questionThree () {
    head.innerHTML = "Quiz three";
    question.innerHTML = "What is the fullmeaning of css";
    writeAnswer.value ="";
    if (writeAnswer.value == "cascading style sheet"){
        questionThree ()

    }else{
        lost.style.display = "flex";

    }
 }