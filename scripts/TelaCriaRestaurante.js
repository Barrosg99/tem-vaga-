function adicionaInputVaga() {
  const vagasDiv = document.querySelector('.vagas')

  let spanTipoVaga = document.createElement('span');
  spanTipoVaga.innerHTML = 'Tipo de Vaga (Coberta/Descoberta)'
  let inputTipoVaga = document.createElement('input');

  let spanQuantVaga = document.createElement('span');
  spanQuantVaga.innerHTML = 'Quantidade de vaga';
  let inputQuantVaga = document.createElement('input');
  inputQuantVaga.setAttribute("type", "number");
  inputQuantVaga.setAttribute("min", 0);

  vagasDiv.appendChild(spanTipoVaga)
  vagasDiv.appendChild(inputTipoVaga)
  vagasDiv.appendChild(spanQuantVaga)
  vagasDiv.appendChild(inputQuantVaga);
  window.scrollTo(0, document.body.scrollHeight);
}

function removeInputVaga() {
  const vagasDiv = document.querySelector('.vagas')
  const vagasDivInputs = document.querySelectorAll('.vagas input');
  const vagasDivSpan = document.querySelectorAll('.vagas span');

  if (vagasDivSpan.length === 2) return;

  for (let index = 1; index < 3; index++) {
    vagasDiv.removeChild(vagasDivSpan[vagasDivSpan.length - index])
    vagasDiv.removeChild(vagasDivInputs[vagasDivSpan.length - index])
  }
}

function cadastraRestaurante() {
  const nome = document.getElementById("name").value
  const endereço = document.getElementById("address").value
  const url = document.getElementById("image").value
  const vagaInputs = document.querySelectorAll('.vagas input')

  if (!validaInputs(nome, endereço, url, vagaInputs)) return

  const restaurant = {
    nome,
    endereço,
    url,
    vagas: [],
  }

  for (let index = 0; index < vagaInputs.length; index += 2) {
    const vaga = {}
    vaga.nome = vagaInputs[index].value
    vaga.quantidade = vagaInputs[index+1].value
    restaurant.vagas.push(vaga)
  }

  let restaurants = JSON.parse(localStorage.getItem("restaurants"))

  if (restaurants == null) {
    restaurant.id = 1
    restaurants = [restaurant]
  } else {
    restaurant.id = restaurants[restaurants.length - 1].id + 1
    restaurants.push(restaurant)
  }

  localStorage.setItem('restaurants', JSON.stringify(restaurants))
  window.location.href = "./TelaPesquisa.html"
}

function validaInputs(nome, endereço, url, vagaInputs) {
  if (!nome || !endereço || !url) {
    alert('Todos os campos são obrigatórios')
    return false
  }

  for (const input of vagaInputs) {
    if (!input.value) {
      alert('Todos os campos são obrigatórios')
      return false;
    }
  }
  return true
}