//O que é um evento?
//Um evento é uma ação que ocorre seja ela feita, pelo usuário ou sistema:
//Ex: O sistema pode carregar a página, o usuário pode clicar no botão, o usuário pode pressionar a tecla, etc;


const inputUser = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const userLabel = document.querySelector("label[for='idUsuario']")
const passLabel = document.querySelector("label[for='idSenha']")

inputUser.addEventListener("keyup", () =>{
    if(inputUser.value.lenght < 5) {
        inputUser.setAttribute("style", "outlne-color: red;");
        userLabel.setAttribute("style", "color: red;");
    } else {
        inputUser.setAttribute("style", "outlne-color: green;");
        userLabel.setAttribute("style", "color: green;");
    }
})

inputSenha.addEventListener("keyup", () =>{
    if(inputSenha.value.length < 5) {
        inputSenha.setAttribute("style", "outlne-color: red;");
        passLabel.setAttribute("style", "color: red;");
    } else {
        inputSenha.setAttribute("style", "outlne-color: green;");
        passLabel.setAttribute("style", "color: green;");
    }
})