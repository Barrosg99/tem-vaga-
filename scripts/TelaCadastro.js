function ValidarCadastro() {
    username = document.getElementById("username").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    passwordConfirmation = document.getElementById("passwordConfirmation").value
    if (email.length < 5){
        alert("Email inválido")
    }else if(username.length < 5){
        alert("Username inválido")
    }else if (passwordConfirmation != password){
        alert("As senhas não são iguais!")
    }else if (password.length < 5){
        alert("Senha inválida!")
    }else{
        window.location.href = "./TelaPesquisa.html";
    }   
}