// Función para cambiar el texto del botón al cambiar el idioma en la barra superior
function cambiarIdioma(lang) {
    if (lang === 'en') {
        document.getElementById("btnUnite").innerText = "Register";

localStorage.setItem("idiomaElegido", "en");

    } else {
        document.getElementById("btnUnite").innerText = "Regístrate";
localStorage.setItem("idiomaElegido", "es");
    }
}