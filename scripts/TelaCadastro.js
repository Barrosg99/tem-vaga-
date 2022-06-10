function ValidarCadastro() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let passwordConfirmation = document.getElementById("passwordConfirmation").value
    if (email.length < 5){
        alert("Email inválido")
    }else if(username.length < 5){
        alert("Username inválido")
    }else if (passwordConfirmation != password){
        alert("As senhas não são iguais!")
    }else if (password.length < 5){
        alert("Senha inválida!")
    }else{
        let user = {username, email, password}
        let users = JSON.parse(localStorage.getItem("users"))
        //verifica se usuario ja existe
        if (users != null) {
            for (let cont = 0; cont < users.length; cont++) {
                if (users[cont].email == email){
                    alert("email já existe!")
                    return
                }
            }
        }
        cadastra(users,user)
    }   
}
function cadastra(users,user) {

    if (users == null) {
        users = [user]
    }
    else{
        users.push(user)
    }
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = "./TelaLogin.html";
}