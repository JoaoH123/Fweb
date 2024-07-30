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

//comando para anexar os numeros na calculadora//
function uptadeText(text){
    var numero = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = numero + text
}

//comando para limpar a calculadora//
function clearText(){
    document.getElementById('texto').innerHTML = ""
}

//comando para limpar apenas 1 numero//
function returnText(){
    var resultado = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = resultado.substring(0, resultado.length -1)
}


//comando para calcular os numeros//
function calculate(){
    var resultado = document.getElementById('texto').innerHTML;
    if(resultado){
        document.getElementById('texto').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('texto').innerHTML = 'Error'
    }
}