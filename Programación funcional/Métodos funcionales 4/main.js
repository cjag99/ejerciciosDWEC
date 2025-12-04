function ejercicio1() {
  let precios = [100, 45, 30, 70, 25];
  let act1 = document.getElementById("act1");
  act1.innerHTML =
    "Precios menores a 50: " + precios.filter((precio) => precio < 50);
}
function ejercicio2() {
  const comentarios = [
    ["Buen post", "Gracias"],
    ["Interesante"],
    ["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]],
  ];
  let act2 = document.getElementById("act2");
  act2.innerHTML = "Comentarios planos: " + comentarios.flat().join("--");
}
function ejercicio3() {
  const usuarios = [
    { nombre: "Juan", roles: ["admin", "editor"] },
    { nombre: "María", roles: ["usuario"] },
    { nombre: "Pedro", roles: ["moderador", "editor"] },
  ];
  let act3 = document.getElementById("act3");
  act3.innerHTML =
    "Roles de usuarios: " + usuarios.flatMap((u) => u.roles).join(", ");
}
function ejercicio4() {
  const tareas = ["Lavar platos", "Comprar comida", "Hacer ejercicio"];
  let act4 = document.getElementById("act4");
  act4.innerHTML = "Tareas:<br>";
  tareas.forEach((tarea, index) => {
    act4.innerHTML += index + 1 + ". " + tarea + "<br>";
  });
}
function ejercicio5() {
  let precios = [100, 200, 300];
  let act5 = document.getElementById("act5");
  let preciosConIVA = precios.map((precio) => precio * 1.21);
  act5.innerHTML = "Precios con IVA: " + preciosConIVA.join(", ");
}
function ejercicio6() {
  const usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "María", activo: false },
    { nombre: "Pedro", activo: true },
  ];
  let act6 = document.getElementById("act6");
  let usuariosActivos = usuarios.filter((u) => u.activo).map((u) => u.nombre);
  act6.innerHTML = "Usuarios activos: " + usuariosActivos.join(", ");
}
function ejercicio7() {
  const categorias = ["Electrónica", ["Teléfonos", "Computadoras"], "Ropa"];
  let act7 = document.getElementById("act7");
  let categoriasPlanas = categorias.flat();
  act7.innerHTML = "Categorías planas: " + categoriasPlanas.join(", ");
}
function ejercicio8() {
  let nombre = ["juan", "maría", "pedro"];
  let act8 = document.getElementById("act8");
  let nombresMayusculas = nombre.map((n) => n.toUpperCase());
  act8.innerHTML = "Nombres en mayúsculas: " + nombresMayusculas.join(", ");
}
function ejercicio9() {
  let ventas = [10, 20, 30, 40];
  let act9 = document.getElementById("act9");
  ventas.forEach((venta) => {
    act9.innerHTML += `Se han vendido ${venta} productos<br>`;
  });
}
function ejercicio10() {
  let precios = [50, 100, 150];
  let act10 = document.getElementById("act10");
  let preciosConDescuento = precios.map((precio) => precio * 0.9);
  act10.innerHTML = "Precios con descuento: " + preciosConDescuento.join(", ");
}
