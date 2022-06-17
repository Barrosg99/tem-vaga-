const nome = document.getElementById('name');
const user = JSON.parse(localStorage.getItem('user'))
if (user) nome.innerHTML = `Olá, ${user.username}`

//Preenche opções do dropdown
const restaurants = JSON.parse(localStorage.getItem('restaurants'))
const divPesquisa = document.getElementById('myDropdow')
const divLugarProximo = document.getElementById('myDropdown')

for (let index = 0; index < restaurants.length; index++) {
  const restaurant = restaurants[index];

  const span = document.createElement('span')
  span.innerHTML = restaurant.nome
  span.setAttribute('onclick', `escolheRestaurante(${restaurant.id})`)

  const span2 = document.createElement('span')
  span2.innerHTML = restaurant.nome
  span2.setAttribute('onclick', `escolheRestaurante(${restaurant.id})`)

  divPesquisa.appendChild(span)
  divLugarProximo.appendChild(span2)
}

function logOut() {
  localStorage.removeItem('user')
  window.location.href = './TelaLogin.html'
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  console.log('aaa');
  document.getElementById("myDropdow").classList.add("show");
}

function voltar() {
  const telaPesquisa = document.getElementById('tela-pesquisa');
  const telaRestaurante = document.getElementById('tela-restaurante');

  telaPesquisa.classList.remove('sumir')
  telaRestaurante.classList.add('sumir')
}

function escolheRestaurante(param) {
  const telaPesquisa = document.getElementById('tela-pesquisa');
  const telaRestaurante = document.getElementById('tela-restaurante');
  const restaurant = restaurants[param - 1]
  telaPesquisa.classList.add('sumir')
  telaRestaurante.classList.remove('sumir')

  const logo = document.getElementById('logo')
  logo.setAttribute('src', restaurant.url)
  console.log(restaurant);
}

function dropConfig() {
  const configuracao = document.getElementById("configuracao");
  configuracao.style.top = 0
}

function hideConfig() {
  const configuracao = document.getElementById("configuracao");
  configuracao.style.top = '-200px'
}

function closeDropDownsByClassName(className) {
  var dropdowns = document.getElementsByClassName(className);
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-span') && !event.target.matches('.dropdown-svg')) {
    closeDropDownsByClassName('dropdown-content')
  }

  if (!event.target.matches('.pesquisa')) {
    closeDropDownsByClassName('dropdow-content')
  }
}