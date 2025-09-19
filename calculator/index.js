// CALCULATOR PROGRAM


const enteredVal =document.getElementById("enteredVal");

function appendToDisplay(input){
    enteredVal.value += input;
}

function clearDisplay(){
    enteredVal.value = "";
}

function backspace(){
    const enteredVal = document.getElementById("enteredVal");
    enteredVal.value = enteredVal.value.slice(0, -1); // remove last character
}


function calculate(){
    try{
        enteredVal.value =eval(enteredVal.value);
        }
    catch(error){
        enteredVal.value = "Error";
    }
}