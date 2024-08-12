let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList.remove("responsivo");
        menuVisible = false;
    } else {
        document.getElementById("nav").classList.add("responsivo");
        menuVisible = true;
    }
}

// Función para ocultar el menú una vez que se selecciona una opción
function seleccionar() {
    document.getElementById("nav").classList.remove("responsivo");
    menuVisible = false;
}
