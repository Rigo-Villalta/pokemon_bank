if (localStorage.length == 0 && localStorage.nombre == undefined) {
    localStorage.setItem("nombre", "Ash Ketchum");
    localStorage.setItem("pin", "1234");
    localStorage.setItem("cuenta", "0987654321");
    localStorage.setItem("saldo", "500.00");
    localStorage.setItem("autenticado", "");
    localStorage.setItem("transacciones", '{\"ingresos\":{\"Apertura de cuenta\":\"500\"},\"egresos\":{}}');
}

function transacciones() {
    let parseTransacciones = JSON.parse(localStorage.transacciones);
    return parseTransacciones
}

function listaIngresos() {
    let parseTransacciones = transacciones();
    return parseTransacciones.ingresos;
}

function listaEgresos() {
    let parseTransacciones = transacciones();
    return parseTransacciones.egresos;
}

function transaccion(monto, descripcion, tipo) {
    parseTransacciones = transacciones();
    let saldoActual = Number(localStorage.saldo);
    if (tipo == "ingreso") {
        fechaHora = new Date().toLocaleString();
        parseTransacciones.ingresos[descripcion + " - " + fechaHora] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTransacciones));
        saldoActual += Number(monto);
        localStorage.setItem("saldo", saldoActual.toString());
    } else if (tipo == "egreso") {
        fechaHora = new Date().toLocaleString();
        parseTransacciones.egresos[descripcion + " - " + fechaHora] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTransacciones));
        saldoActual -= Number(monto);
        localStorage.setItem("saldo", saldoActual.toString());
    } else {
        console.log("trasacción no válida");
    }
}

