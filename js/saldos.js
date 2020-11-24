let nombre = document.getElementById("nombre");
nombre.innerHTML = localStorage.nombre;

let cuenta = document.getElementById("cuenta");
cuenta.innerHTML = localStorage.cuenta;

let saldo = document.getElementById("saldo");
saldo.innerHTML = `$${localStorage.saldo}`;