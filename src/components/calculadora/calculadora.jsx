let total = ''
//ATRIBUIÇÕES
function valores(num){
    total = total + num
    console.log(total)
    valor(total)
}

//OPERAÇÕES
function soma() {

    total = `${total}+` 
    valor(total)
}

function mult() {
    total = `${total}*` 
    valor(total)
}

function sub() {
    total = `${total}-`
    valor(total)
}

function divisao() {
    total = `${total}/`
    valor(total)
}

//TOTAL
function result() {
    total = eval(total)
    valor(total)
}

function valor(valorTotal){
    document.getElementById("resultado").value = valorTotal
}

function limpar(){
    document.getElementById("resultado").value = ""
    total = ''
}
