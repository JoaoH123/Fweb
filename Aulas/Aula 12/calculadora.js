let textValue = '';

function addNumber(Number){
    updateText();
}

function addOperador(Operador){
    updateText();
}

function addDecimal(){
    updateText();
}

function clearText(){
    updateText();
}

function updateText(){
    document.querySelector(addNumber).onsubmit = textValue
}

function calculate(){

}