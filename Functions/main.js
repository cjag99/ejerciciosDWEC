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
