function validaBusca(){
    if (document.querrySelector('#inputlupa').value ==''){
        alert('Não podia ter der deixado em branco a busca!');
        return false
    }
}

document.querrySelector('#form-busca').onsubmit = validaBusca