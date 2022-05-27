function ValidarLogin() {
    login = document.getElementById("login").value
    if (login.length < 5){
        alert("O username tem no minimo 5 caracteres!")}
    else{
        window.location.href = "./TelaPesquisa.html";
    }
}