function digitar(entrada){
    visor = document.getElementById('visor');

    if(visor.value == 0 && entrada!= '+' && entrada!= '-'  && entrada!= '*'  && entrada!= '/'){
        visor.value = entrada;
    }
    else{
        visor.value += entrada;
    }
}

function limpar(){
    document.getElementById('visor').value = 0;
}

function resolver(){
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}