function mudarLogin() {
  const senha = document.getElementById('password').value;
  const novoNome = document.getElementById('username').value;
  const confirmaNovoNome = document.getElementById('usernameConfirmation').value;
  const user = JSON.parse(localStorage.getItem('user'))

  if (senha !== user.password) alert('Senha incorreta')
  else if (novoNome !== confirmaNovoNome) alert('Os nomes não são iguais')
  else {
    user.username = novoNome
    localStorage.setItem('user', JSON.stringify(user))
    document.getElementById('password').value = ''
    document.getElementById('username').value = '';
    document.getElementById('usernameConfirmation').value = '';
    alert('Nome trocado com sucesso')
  }
}

function voltar() {
  window.location.href = './TelaPesquisa.html';
}