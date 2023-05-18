var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  
  event.preventDefault(); //Detiene la recarga de la pagina 

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var celular = document.getElementById("celular").value;

  console.log("Nombre: " + nombre);
  console.log("Email: " + email);
  console.log("Celular: " + celular);

  
    formulario.reset(); // Restablecer los campos del formulario
});

function datos(){

    let email = document.getElementById ('nombre').value;
    let nombre = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;

    localStorage.setItem('email: ', email);
    localStorage.setItem('nombre: ', nombre);
    localStorage.setItem('celular: ', celular);
}