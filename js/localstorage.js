if (localStorage.length == 0 && localStorage.nombre == undefined) {
    localStorage.setItem("nombre", "Ash Ketchum");
    localStorage.setItem("pin", "1234");
    localStorage.setItem("cuenta", "0987654321");
    localStorage.setItem("saldo", "500");
    localStorage.setItem("autenticado", "");
    localStorage.setItem("transacciones", '{\"ingresos\":{\"Apertura de cuenta\":\"500\"},\"egresos\":{}}');
}

function transacciones() {
    let parseTransacciones = JSON.parse(localStorage.transacciones);
    return parseTransacciones
}

function ingresos() {
    let parseTransacciones = transacciones();
    return parseTransacciones.ingresos;
}

function egresos() {
    let parseTransacciones = transacciones();
    return parseTransacciones.egresos;
}

function transaccion(monto, descripcion, tipo) {
    parseTransacciones = transacciones();
    if (tipo == "ingreso") {
        parseTransacciones.ingresos[descripcion] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTransacciones));
    } else if (tipo == "egreso") {
        parseTransacciones.egresos[descripcion] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTransacciones));
    } else {
        console.log("trasacción no valida");
    }
}

