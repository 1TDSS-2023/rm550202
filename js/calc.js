//desafio 1 
//inserir o value dos botoes de número e operações no visor
//obrigatório ultilizar funções parametrizadas
//Pode ultilizar enventos inline
function insereNumeroNoVisor(botao, input) {
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" ||botao.value == "/") {
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" ||visor.value[visor.value.length-1] == "/") {
            visor.value.slice(visor.value[visor.value.length-1])
        } else {
            input.value += botao.value;
        }
    } else {
        input.value += botao.value;
    }
}


//Desafio 2
//arrow function(simplifica o código)
const calculo = (visor) => {
    let valor = visor.value;
    visor.value = eval(valor);
}
//function
function soma(visor) {
    let valor = visor.value;
    visor.value = eval(valor);
}