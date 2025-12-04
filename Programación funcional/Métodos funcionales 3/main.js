const { act } = require("react");

function ejercicio1() {
  let productos = ["manzana", "naranja", "plátano", "pera"];
  let act1 = document.getElementById("act1");
  act1.innerHTML +=
    "<p> ¿Está la naranja en el inventario?" +
    (productos.includes("naranja") ? " Sí" : " No") +
    "</p>";
  act1.innerHTML +=
    "<p> ¿Está el mango en el inventario desde el índice 2?" +
    (productos.includes("mango", 2) ? " Sí" : " No") +
    "</p>";
}

function ejercicio2() {
  let data = [1, 2, 3];
  let act2 = document.getElementById("act2");
  act2.innerHTML +=
    "¿Es data un array?" + (Array.isArray(data) ? " Sí" : " No");
  act2.innerHTML += Array.isArray(data)
    ? "<p> Los datos son: " + data.join(", ") + "</p>"
    : "Error al mostrar los datos, no es un array";
}

function ejercicio3() {
  let campos = [true, true, false, true, false, false, true];
  let act3 = document.getElementById("act3");
  act3.innerHTML += campos.every((campo) => campo)
    ? "Todos los campos están completos"
    : "Hay campos incompletos";
}
function ejercicio4() {
  let permisos = [true, true, true, false, true];
  let act4 = document.getElementById("act4");
  act4.innerHTML += permisos.some((permiso) => permiso)
    ? "Al menos un permiso concedido"
    : "Ningún permiso concedido";
}
function ejercicio5() {
  let stock = [15, 7, 25, 5];
  let act5 = document.getElementById("act5");
  let hayStock = stock.find((cantidad) => cantidad < 10);
  act5.innerHTML += hayStock
    ? "Hay productos con stock menor a 10: " + hayStock
    : "No hay productos con stock menor a 10";
}
function ejercicio6() {
  let prioridades = ["baja", "media", "alta", "baja"];
  let act6 = document.getElementById("act6");
  let prioridadAlta = prioridades.findLast((prioridad) => prioridad === "alta");
  act6.innerHTML +=
    "El índice de la última prioridad 'alta' es: " +
    prioridades.lastIndexOf(prioridadAlta);
}
function ejercicio7() {
  let precios = [100, 50, 30, 150];
  let act7 = document.getElementById("act7");
  act7.innerHTML +=
    "El índice del primer precio menor a 50 es : " +
    precios.findIndex((precio) => precio < 50);
}
function ejercicio8() {
  let clientes = ["regular", "VIP", "regular", "VIP"];
  let act8 = document.getElementById("act8");
  let ultimoVIP = clientes.findLastIndex((cliente) => cliente === "VIP");
  act8.innerHTML += "El índice del último cliente 'VIP' es : " + ultimoVIP;
}
function ejercicio9() {
  let frutas = ["manzana", "naranja", "plátano"];
  let act9 = document.getElementById("act9");
  let posPlatano = frutas.indexOf("plátano");
  let ultimaManzana = frutas.lastIndexOf("manzana");
  act9.innerHTML += "El índice de 'plátano' es: " + posPlatano + "<br>";
  act9.innerHTML += "El último índice de 'manzana' es: " + ultimaManzana;
}
function ejercicio10() {
  let roles = ["usuario", "usuario", "admin", "moderador"];
  let act10 = document.getElementById("act10");
  act10.innerHTML += roles.includes("admin")
    ? "El rol 'admin' está presente"
    : "El rol 'admin' no está presente";
  act10.innerHTML += "<br>";
  act10.innerHTML += roles.some((r) => r === "admin")
    ? "El rol 'admin' está presente (usando some)"
    : "El rol 'admin' no está presente (usando some)";
}
