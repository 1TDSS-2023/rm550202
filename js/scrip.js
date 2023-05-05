//console.log("Olá mundo!");
//
//var nr1 = "7";
//var nr2 = "3";
//
////Realizando operações
//console.log(parseInt(nr1)+parseInt(nr2));
//console.log("-------------------------")
//
//var nome1 = "guga";
//let nome2 = "igot";
//const nome3 = "lukinhas";
//
//console.log(nome3, nome2);
//if(nome1 != "") {
//    let nome1 = "Igot";
//}
//
//console.log(nome1);
//diferença entre var e let

//const btn = document.getElementById("meu-btn");
////console.log(btn.id);
//btn.addEventListener("click", function(){
//    //console.log(this.textContent);
//    let r=0, g=0, b=0;
//    r = Math.round(Math.random() *255);
//    g = Math.round(Math.random() *255);
//    b = Math.round(Math.random() *255);
//    this.setAttribute("style", `background-color:rgb(${r},${g},${b};`);
//})

// let frutas = ["banana", "maça", "laranja", "morango", "uva", "amora", "cereja", "abacate"]
// console.log(frutas)

// console.log(frutas[0]);
// console.log(`O tamanho da array é de:  ${frutas.length} letras.`);

// //inserindo um item no final da array(push)
// frutas.push("Pêssego");
// console.log(frutas)
// //inserindo um item no inicio do array(unshift)
// frutas.unshift("Pera");
// console.log(frutas)
// //removendo um item do inicio, através do pop
// frutas.pop();
// console.log(frutas)
// //removendo um item do final, através do shift
// frutas.shift();
// console.log(frutas)

// let indice = frutas.indexOf("uva")
// console.log(`Indice do item buscado: indice ${indice}`)
// console.log(`Elemento buscado: ${frutas[indice]}`)

// //removendo um item do array com o metodo splice(indice do item, qtd de vezes que indice será removido)
// let indice2 = frutas.indexOf("banana");
// console.log(`Elemento no indice antes da remoção: ${frutas[indice2]}`);
// frutas.splice(indice2,1);
// console.log(`Elemento no indice após a remoção: ${frutas[indice2]}`);

// //imprimindo array em forma de tabela
// console.table(frutas)

// //função de callback
// frutas.forEach( (fruta) => {
//     console.log("Fruta da vez: " + fruta)
// })

let nr1 = [1, 2, 3, 4, 5, 6]
let nr2 = [7, 8, 9, 10, 11, 12]
let juntando = [nr1 + "," + nr2]
console.log(juntando)
//concatenando arrays em um novo array.
let nr3 = [...nr1, ...nr2]
console.log("Novo array: " +nr3)
//imprimindo o novo array com forEach
nr3.forEach( (nr) => {
    console.log("Itens do novo array: " + nr)
})