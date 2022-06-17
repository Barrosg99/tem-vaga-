function ValidarLogin() {
    login = document.getElementById("login").value
    senha = document.getElementById("senha").value

    let users = JSON.parse(localStorage.getItem("users"))
    if (users != null) {
        let hasLoggedUser = false
        for (let cont = 0; cont < users.length; cont++) {
            if (users[cont].email == login){
                if (users[cont].password == senha) {
                    hasLoggedUser = true
                    localStorage.setItem('user', JSON.stringify(users[cont]))
                    window.location.href = "./TelaPesquisa.html"
                    break
                }
            }
        }
        if (!hasLoggedUser) alert("Login ou senha, incorreto.")
    } else {
        alert("Você precisa se cadastrar antes")
    }
}