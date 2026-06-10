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