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

const btn = document.getElementById("meu-btn");
//console.log(btn.id);
btn.addEventListener("click", function(){
    //console.log(this.textContent);
    let r=0, g=0, b=0;
    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);
    this.setAttribute("style", `background-color:rgb(${r},${g},${b};`);
})




