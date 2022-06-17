function mudarSenha() {
  const senha = document.getElementById('actualPassword').value;
  const novaSenha = document.getElementById('newPassword').value;
  const confirmaNovaSenha = document.getElementById('newPasswordConfirmation').value;
  const user = JSON.parse(localStorage.getItem('user'))

  if (senha !== user.password) alert('Senha incorreta')
  else if (novaSenha !== confirmaNovaSenha) alert('As senhas não são iguais')
  else {
    user.password = novaSenha
    localStorage.setItem('user', JSON.stringify(user))
    document.getElementById('actualPassword').value = ''
    document.getElementById('newPassword').value = '';
    document.getElementById('newPasswordConfirmation').value = '';
    alert('Senha trocada com sucesso')
  }
}

function voltar() {
  window.location.href = './TelaPesquisa.html'
}