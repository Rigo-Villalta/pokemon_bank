let botonSalir = document.getElementById("salir").addEventListener('click', salirDeSistema);

function salirDeSistema() {
    swal.fire({
        text: "Ha salido del sistema.",
        timer: 5000,
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("autenticado", "");
            window.location = "login.html";
        }
    });
    localStorage.setItem("autenticado", "");
    setTimeout(() => {
        window.location = "login.html"    
    }, 5000);
}