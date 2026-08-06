//Menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

//Click abrir
btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active"); 
});

//Click cerrar
btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active"); 
});

//Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function(){
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active"); 
});

//Slider de productos
var contenedor = document.querySelector(".slider"),
btnIzquierdo = document.getElementById("btn-izquierda"),
btnDerecho = document.getElementById("btn-derecha");

//Evento para el boton derecho
btnDerecho.addEventListener("click", function(){
   contenedor.scrollLeft += contenedor.offsetWidth;   
});

//Evento para el boton izquierdo
btnIzquierdo.addEventListener("click", function(){
   contenedor.scrollLeft -= contenedor.offsetWidth;   
});

//Validacion de formulario
var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComments = document.getElementById("comentarios");

    if(inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value == 0){
        e.preventDefault();
        alert("Datos vacios");
    }else{
        e.preventDefault();
        alert("Datos enviados");
        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

//Eventos del formulario
formulario.addEventListener("submit", validar);