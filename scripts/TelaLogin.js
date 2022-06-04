function ValidarLogin() {
    login = document.getElementById("login").value
    senha = document.getElementById("senha").value
    if (login.length >= 5 && senha.length >= 6){
        window.location.href = "./TelaPesquisa.html";
    }     
    else{
       alert("Um dos campos abaixo foi preenchido incorretamente")
    }

    let user = {email, password}
    let users = JSON.parse(localStorage.getItem("users"))
    if (users != null) {
        for (let cont = 0; cont < users.length; cont++) {
            if (users[cont].email == email){
                if (users[count].password == password){
                    window.location.href = "./TelaPesquisa.html"
                }
            }
        }
    }
}