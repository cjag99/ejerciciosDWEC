function ejercicio1() {
  const ventas = [100, 200, 300, 400];
  let act1 = document.getElementById("act1");
  let totalVentas = ventas.reduce((acc, venta) => acc + venta, 0);
  act1.innerHTML += "El total de las ventas es: " + totalVentas;
}

function ejercicio2() {
  const empleados = ["Juan", "María", "Pedro", "Luis"];
  let act2 = document.getElementById("act2");
  act2.innerHTML += empleados.reduceRight(
    (acc, empleado) => acc + ", " + empleado,
    ""
  );
}

function ejercicio3() {
  let cantidades = [5, 10, 20, 15];
  let act3 = document.getElementById("act3");
  act3.innerHTML +=
    "Cantidad total: " +
    cantidades.reduce((acc, cantidad) => acc + cantidad, 0);
}

function ejercicio4() {
  let palabras = ["JavaScript", "es", "increíble"];
  let act4 = document.getElementById("act4");
  act4.innerHTML += palabras.join(" ");
}

function ejercicio5() {
  let nums = [1, 2, 3, 4, 5];
  let act5 = document.getElementById("act5");
  act5.innerHTML += nums.toString();
}

function ejercicio6() {
  let precios = [1000, 2000, 3000];
  let act6 = document.getElementById("act6");
  act6.innerHTML +=
    "Precios en dólares: " +
    precios.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function ejercicio7() {
  let ingresos = [500, 1000, 1500, 2000];
  let act7 = document.getElementById("act7");
  act7.innerHTML +=
    "Total ingresos: " + ingresos.reduce((acc, ingreso) => acc + ingreso, 0);
}

function ejercicio8() {
  let compras = ["Manzana", "Naranja", "Plátano"];
  let act8 = document.getElementById("act8");
  act8.innerHTML += compras.reduceRight(
    (acc, compra) => acc + ", " + compra,
    ""
  );
}

function ejercicio9() {
  let numeros = [10, 20, 30, 40];
  let act9 = document.getElementById("act9");
  act9.innerHTML += numeros.toString();
}

function ejercicio10() {
  let precios2 = [1000, 1500, 2000];
  let act10 = document.getElementById("act10");
  act10.innerHTML +=
    "Precios en EE.UU: " +
    precios2.toLocaleString("en-US", { style: "currency", currency: "USD" }) +
    "<br>";
  act10.innerHTML +=
    "Precios en España: " +
    precios2.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}
