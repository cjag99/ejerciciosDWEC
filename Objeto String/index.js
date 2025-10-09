function mostrarTamanyo() {
  let mensaje = window.prompt();
  document.getElementById("act1").innerHTML =
    "El tamaño de " + mensaje + " es " + mensaje.length;
}

function caracterMitad() {
  let mensaje = window.prompt();
  document.getElementById("act2").innerHTML =
    "En " +
    mensaje +
    " el caracter de la mitad es " +
    mensaje.charAt(mensaje.length / 2);
}

function caracterUnicode(id) {
  let mensaje = window.prompt();
  document.getElementById(id).innerHTML =
    "En " +
    mensaje +
    " el caracter de la mitad es " +
    mensaje.charAt(mensaje.length / 2) +
    " y en Unicode sería " +
    mensaje.charCodeAt(mensaje.length / 2);
}

function unirCadenas() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act5").innerHTML =
    "El resultado de unir " +
    mensaje1 +
    " y " +
    mensaje2 +
    " es: " +
    mensaje1.concat(mensaje2);
}

function numToUnicode() {
  let esNum = false;
  do {
    let numero = window.prompt();
    let resultado = numero.match(/^\d+$/);
    if (resultado != null) {
      document.getElementById("act6").innerHTML =
        "El número " + numero + " en Unicode es " + String.fromCharCode(numero);
      esNum = true;
    } else {
      alert("Debe introducir solamente números");
    }
  } while (esNum == false);
}

function buscarCadena() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act7").innerHTML =
    "En las cadenas " +
    mensaje1 +
    " y  " +
    mensaje2 +
    " la coincidencia está en la posición " +
    mensaje2.indexOf(mensaje1, 0);
}

function buscarUltimaAparicion() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act8").innerHTML =
    "En las cadenas " +
    mensaje1 +
    " y  " +
    mensaje2 +
    " la última coincidencia está en la posición " +
    mensaje2.lastIndexOf(mensaje1);
}

function compararRegEx() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  let regex = new RegExp(mensaje2, "i");
  document.getElementById("act9").innerHTML =
    "En la cadena " +
    mensaje1 +
    " la coincidencia con " +
    mensaje2 +
    " es en: " +
    mensaje1.match(regex);
}

function reemplazarCadena() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act10").innerHTML +=
    "Al reemplazar " +
    mensaje1 +
    " con " +
    mensaje2 +
    " el resultado es " +
    mensaje2.replace(mensaje1);
}

function buscarEnCadena() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act11").innerHTML +=
    "En la cadena " +
    mensaje1 +
    " podemos encontrar " +
    mensaje2 +
    " en la posición " +
    mensaje1.search(mensaje2);
}

function cortarCadena() {
  let mensaje = window.prompt();
  document.getElementById("act12").innerHTML =
    "Si dividimos la cadena " +
    mensaje +
    " en las posiciones 0 y " +
    mensaje.length / 2 +
    " el resultado es " +
    mensaje.slice(0, mensaje.length / 2);
}

function dividirCadena() {
  let mensaje = window.prompt();
  document.getElementById("act13").innerHTML =
    "El resultado de dividir " + mensaje + " usando split('-') es ";
  let arrayM = mensaje.split("-");
  for (const palabra of arrayM) {
    document.getElementById("act13").innerHTML += palabra + " ";
  }
}

function extraerCadena() {
  let mensaje = window.prompt();
  document.getElementById("act14").innerHTML =
    "Si extraemos de la cadena " +
    mensaje +
    " los primeros 5 caracteres a partir de la posicion 2 el resultado es el siguiente: " +
    mensaje.substr(2, 5);
}

function substraerCadena() {
  let mensaje = window.prompt();
  document.getElementById("act15").innerHTML =
    "Si extraemos de la cadena " +
    mensaje +
    " los caracteres entre la posición 0 y la " +
    mensaje.length / 2 +
    " el resultado es " +
    mensaje.substring(0, mensaje.length / 2);
}

function toMayusMinus() {
  let mensaje = window.prompt();
  document.getElementById("act16").innerHTML =
    mensaje +
    " en mayúsuculas: " +
    mensaje.toLocaleUpperCase() +
    "<br>" +
    mensaje +
    " en minúsculas: " +
    mensaje.toLocaleLowerCase();
}

function enNegrita() {
  let mensaje1 = window.prompt();
  let mensaje2 = window.prompt();
  document.getElementById("act17").innerHTML =
    "Si comparamos " +
    mensaje1 +
    " con " +
    mensaje2 +
    " el resultado será: " +
    mensaje1.substring(0, mensaje1.indexOf(mensaje2)) +
    "-<b>" +
    mensaje1.charAt(mensaje1.indexOf(mensaje2)) +
    "</b>-" +
    mensaje1.substring(mensaje1.indexOf(mensaje2) + 1, mensaje1.length);
}
