/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  console.log('aaa');
  document.getElementById("myDropdow").classList.add("show");
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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-span') && !event.target.matches('.dropdown-svg')) {
    closeDropDownsByClassName('dropdown-content')
  }

  if (!event.target.matches('.pesquisa')) {
    closeDropDownsByClassName('dropdow-content')
  }
}