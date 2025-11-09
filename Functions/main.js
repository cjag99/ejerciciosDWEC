function ej1Trigonometrica(num, opcion) {
  let parrafo = document.getElementById("act1");
  if (num < 0 || num > 360) {
    parrafo.innerHTML = "Error, los ángulos solo admiten valores entre 0 y 360";
  } else {
    let rad = (num * Math.PI) / 180;
    let operacion = 0;
    let tipoOp = "";
    switch (opcion) {
      case "cos":
        tipoOp = "coseno";
        operacion = Math.cos(rad).toFixed(2);
        break;
      case "sin":
        tipoOp = "seno";
        operacion = Math.sin(rad).toFixed(2);
        break;
      case "tan":
        tipoOp = "tangente";
        operacion = Math.tan(rad).toFixed(2);
        break;
      default:
        parrafo.innerHTML =
          "Error, esa opción no corresponde con ninguna operación trigonométrica";
    }
    parrafo.innerHTML = `Operación: ${tipoOp} -> Resultado: ${operacion}`;
  }
}
function act1() {
  let num = parseInt(document.getElementById("angle").value);
  let opera = document.getElementById("opera").value;
  ej1Trigonometrica(num, opera);
}
function ej2JS() {
  let cadena = document.getElementById("cadena").value;
  let arrayCadena = cadena.split(",");
  let lista = arrayCadena.map((e) => `<li>${e}</li>`).join("");
  let parrafo = document.getElementById("act2");
  parrafo.innerHTML += `<ul>${lista}</ul>`;
}
function recogerParams(id) {
  let cadena = document.getElementById(id).value;
  let cadenaArray = cadena.split(",").map((e) => e.trim());
  return cadenaArray;
}
function listaEn(id, ...cadena) {
  let parrafo = document.getElementById(id);
  let items = cadena.map((e) => `<li>${e}</li>`).join("");
  parrafo.innerHTML = `<ul>${items}</ul>`;
}
function mostrarTriple() {
  let numParam = parseFloat(document.getElementById("tripleNum").value);
  let parrafo = document.getElementById("act4");
  let tripleNum = function (n) {
    return n * 3;
  };
  parrafo.innerHTML = `El triple de ${numParam} es ${tripleNum(numParam)}`;
}

function mostrarCuadrado() {
  let numParam = parseFloat(document.getElementById("cuadradoNum").value);
  let parrafo = document.getElementById("act5");
  let cuadradoNum = (n) => n ** 2;
  parrafo.innerHTML = `El cuadrado de ${numParam} es ${cuadradoNum(numParam)}`;
}

// * Función anonima hola mundo con ejecución automática
(() => (document.getElementById("act6").innerHTML = "Hola Mundo"))();

function mostrarListaNegrita(id, ...cadena) {
  let parrafo = document.getElementById(id);
  let items = cadena.map((e) => `<strong>${e}</strong>, `).join("");
  parrafo.innerHTML =
    "Los valores del array en negrita son: " + items.valueOf();
}
function generarTabla() {
  let parrafo = document.getElementById("act8");
  parrafo.innerHTML =
    "<table border='1'>" +
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]
      .map(
        (row) =>
          `<tr>${row
            .map((cell) => `<td>${Math.round(9 * Math.random())}</td>`)
            .join("")}</tr>`
      )
      .join("") +
    "</table>";
}
function generarCuadradoMagico() {
  let i = parseInt(document.getElementById("magicSquare").value);
  let parrafo = document.getElementById("act9");
  parrafo.innerHTML =
    "<table border='1'>" +
    [
      [i + 3, i + 8, i + 1],
      [i + 2, i + 4, i + 6],
      [i + 7, i, i + 5],
    ]
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
      )
      .join("") +
    "</table>";
}
function cambiarColor() {
  let nombreColor = document.getElementById("nombreColor").value;
  let texto = document.getElementById("act10");
  texto.style.color = nombreColor;
}
function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}
function mostrarFactorial() {
  let parrafo = document.getElementById("act11");
  let num = parseInt(document.getElementById("factorial").value);
  let numFactorial = factorial(num);
  parrafo.innerHTML = `El factorial de ${num} es ${numFactorial}`;
}
