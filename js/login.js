const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");

inputSenha.addEventListener("keyup", ()=>{
    if(inputSenha.value.length < 5){
        inputSenha.setAttribute("style", "outline-color: red;");
        passLabel.setAttribute("style", "color: red;");
    }else{
        inputSenha.setAttribute("style", "outline-color: green;");
        passLabel.setAttribute("style", "color: green;");
    }
});

inputUser.addEventListener("keyup",()=>{

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style", "outline-color: red;");
        userLabel.setAttribute("style", "color: red;");
    }else{
        inputUser.setAttribute("style", "outline-color: green;");
        userLabel.setAttribute("style", "color: green;");
    }

});

/* <i class="fa fa-eye-slash" aria-hidden="true"></i> */
//Quando o usuário clicar no olho para ver a senha troque também o ícone....


const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", ()=>{
    // if(inputSenha.type == "password"){
    //     inputSenha.type = "text";
    // }else{
    //     inputSenha.type = "password";
    // }

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");
    }

});

const usuarioLogado = {
    nomeUsuarioLogado: inputUser.value,
    senhaUsuarioLogado: inputSenha.value
}
addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit") {
        if(usuarioLogado.nomeUsuarioLogado == "melogts" && usuarioLogado.senhaUsuarioLogado == "123456") {
            alert("Certo")
        } else {
            alert("Não válido")
        }
    }
});