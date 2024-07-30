function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar(){
    document.getElementById('resultado').innerHTML = ''
}

function apagar(){
    var conta = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = conta.substring(0, conta.length - 1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = 'ERROR'
    }
}