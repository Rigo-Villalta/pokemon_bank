let ingresos = listaIngresos();

let ingresosHTML = "";

for (const [key, value] of Object.entries(ingresos)) {
    ingresosHTML += `<tr><td>${key}</td><td>$${value}</td></tr>`;
  }

let tablaIngresos = document.getElementById("tabla-ingresos");

tablaIngresos.innerHTML = ingresosHTML;


let egresos = listaEgresos();

let egresosHTML = "";

for (const [key, value] of Object.entries(egresos)) {
    egresosHTML += `<tr><td>${key}</td><td>$${value}</td></tr>`;
  }

let tablaEgresos = document.getElementById("tabla-egresos");

tablaEgresos.innerHTML = egresosHTML;