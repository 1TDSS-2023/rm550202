 
//1º tarefa
const btn = document.getElementById("meu-btn");
const body = document.getElementById("geral");
btn.addEventListener("click", function(){ 
    let r=0,g=0,b=0;  
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);  
    // this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
    body.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
});

//2º tarefa 
 
//3º tarefa
const img = document.getElementById("img-btn");
const btn2 = document.getElementById("btn");
imgElements.addEventListener("clicar", function(){ 
    img.setAttribute("src", "../img/lobo2.png");
});