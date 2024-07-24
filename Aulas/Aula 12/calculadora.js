let textValue = '';

function addNumber(Number){
    uptadeText();
}

function addOperador(Operador){
    uptadeText();
}

function addDecimal(){
    uptadeText();
}

function uptadeText(text){
    var numero = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = numero + text
}

function clearText(){
    document.getElementById('texto').innerHTML = ""
}

function returnText(){
    var resultado = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = resultado.substring(0, resultado.length -1)
}

function calculate(){
    var resultado = document.getElementById('texto').innerHTML;
    if(resultado){
        document.getElementById('texto').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('texto').innerHTML = 'Error'
    }
}