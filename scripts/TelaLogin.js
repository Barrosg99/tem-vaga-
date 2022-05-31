function ValidarLogin() {
    login = document.getElementById("login").value
    senha = document.getElementById("senha").value
    if (login.length >= 5 && senha.length >= 6){
        window.location.href = "./TelaPesquisa.html";
    }     
    else{
       alert("Um dos campos abaixo foi preenchido incorretamente")
    }
    
}
 