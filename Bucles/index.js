function repetirFor() {
  let palabra = prompt("Ingrese una palabra:");
  for (let index = 0; index < 10; index++) {
    document.getElementById("repetirFor").innerHTML += palabra + "<br>";
  }
}
function mostrarEdad() {
  let edad = prompt("Ingrese su edad:");
  let i = 1;
  while (i <= edad) {
    document.getElementById("edad").innerHTML += "Edad: " + i + "<br>";
    i++;
  }
}
function mostrarImpar() {
  let num = prompt("ingrese un número natural:");
  let impar = 0;
  do {
    if (impar % 2 != 0) {
      document.getElementById("impar").innerHTML += impar + " ";
    }
    impar++;
  } while (impar <= num);
}
function cuentaAtras() {
  document.getElementById("cuentaAtras").innerHTML = "";
  let num = prompt("Ingrese un número natural:");
  if (num > 0) {
    for (let i = num; i >= 0; i--) {
      document.getElementById("cuentaAtras").innerHTML += i + ";";
    }
  } else {
    document.getElementById("cuentaAtras").innerHTML =
      "No se pudo inicializar la cuenta atrás: número negativo";
  }
}
function calcularCapital() {
  let cantidad = prompt("Indique la cantidad a invertir:");
  if (cantidad < 0) {
    document.getElementById("capital").innerHTML =
      "No se puede invertir con capital negativo";
  } else {
    let interes = prompt("Indique el interés anual:");
    let numAnios = prompt("Indique el nº de años:");
    document.getElementById("capital").innerHTML =
      "Capital obtenido: " + (cantidad + (1 + interes) * numAnios) + "€";
  }
}
function mostrarTriangulo() {
  let altura = prompt("Introduzca la altura del triangulo(>0):");
  if (altura < 1) {
    document.getElementById("triangulo").innerHTML =
      "No se puede hacer un triángulo de altura " + altura;
  } else {
    let signo = "*";
    for (let i = 0; i < altura; i++) {
      document.getElementById("triangulo").innerHTML += signo + "<br>";
      signo += "*";
    }
  }
}
function mostrarTablas() {
  let num = prompt("Ingrese la tabla a mostrar(1-10):");
  if (num < 1 || num > 10) {
    document.getElementById("tablasMultiplicar").innerHTML =
      "Solo se puede mostar las tablas del 1 al 10";
  } else {
    for (let i = 0; i < 11; i++) {
      document.getElementById("tablasMultiplicar").innerHTML +=
        num + "*" + i + "= " + num * i + "<br>";
    }
  }
}
function trianguloNum() {
  let altura = prompt("Ingrese la altura del triángulo(>0):");
  if (altura < 1) {
    document.getElementById("numTriangulo").getElementById.innerHTML =
      "No se puede hacer un triángulo de altura " + altura;
  } else {
    let sumando = 1;
    for (let i = 0; i <= altura; i++) {
      for (let j = sumando; j >= 1; j -= 2) {
        document.getElementById("numTriangulo").innerHTML += j + " ";
      }
      document.getElementById("numTriangulo").innerHTML += "<br>";
      sumando += 2;
    }
  }
}
function verificar() {
  let contraseña = "admin123";
  let verificado = false;
  do {
    let intento = prompt("Introduzca su contraseña:");
    if (intento == contraseña) {
      document.getElementById("verificar").innerHTML =
        "Inicio de sesión correcto";
      verificado = true;
    } else {
      alert("Inicio de sesión fallido. Vuelva a intentarlo");
    }
  } while (verificado == false);
}
