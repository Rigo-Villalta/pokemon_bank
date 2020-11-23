let botonIngresar = document.getElementById("ingresar").addEventListener('click', ingresar);

function ingresar() {
    let formularioIngreso = new FormData(document.getElementById('formulario-ingreso'));
    let arrayIngreso = [];

    for (let valor of formularioIngreso.values()) {
        arrayIngreso.push(valor);
    }

    if (arrayIngreso[0] != "Ash Ketchum" || arrayIngreso[1] != "1234") {
        swal.fire({
            text: "Usuario y/o contraseña incorrecto(s).",
            timer: 5000,
        });
    } else {
        localStorage.setItem("autenticado", "si");
        window.location = "acciones.html"
    }
}
