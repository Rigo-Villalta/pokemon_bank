function verificarAutenticacion() {
    if (localStorage.autenticado != "si") {
        window.location = "login.html";
    }

}