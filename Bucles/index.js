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
function esPrimo() {
  let num = parseInt(prompt("Introduzca un número natural:"));
  let esPrimo = true;
  if (num < 1) {
    document.getElementById("esPrimo").innerHTML =
      "Este número no puede ser primo. Debe ser positivo y mayor de 1.";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      document.getElementById("esPrimo").innerHTML =
        num + " es un número primo.";
    } else {
      document.getElementById("esPrimo").innerHTML =
        num + " no es un número primo.";
    }
  }
}
function invertirPalabra() {
  let palabra = prompt("Introduzca una palabra:");
  if (palabra == "") {
    document.getElementById("invertirPalabra").innerHTML =
      "No se pudo invertir, cadena vacía.";
  } else {
    for (let i = palabra.length - 1; i >= 0; i--) {
      document.getElementById("invertirPalabra").innerHTML +=
        palabra.charAt(i) + " ";
    }
  }
}
function contarLetra() {
  let frase = prompt("Introduzca una frase");
  let letra = prompt("Introduzca una letra:");
  if (letra.length > 1) {
    document.getElementById("contarLetra").innerHTML =
      "ERROR, debe introducir solo una letra, no una cadena de texto";
  } else if (frase == "") {
    document.getElementById("contarLetra").innerHTML =
      "No se puede contar las letras de una cadena vacía";
  } else {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase.charAt(i) === letra) {
        contador++;
      }
    }
    document.getElementById("contarLetra").innerHTML =
      "En la frase " +
      frase +
      " se ha repetido la letra " +
      letra +
      " " +
      contador +
      " veces.";
  }
}
function replicarTexto() {
  let mensaje = "";
  do {
    mensaje = prompt("Introduzca un mensaje:");
    document.getElementById("replicarTexto").innerHTML += mensaje + "<br>";
  } while (mensaje.toLocaleLowerCase() != "salir");
}
function calcularInteres() {
  let credito = parseFloat(
    prompt("Introduzca cuánto dinero desea pedir en préstamo (€):")
  );
  let interesAnual = parseFloat(
    prompt("Introduzca cuánto es el interés anual (0-1):")
  );
  let numAnios = parseInt(
    prompt("Introduzca en cuántos años desea pagar el préstamo:")
  );

  let salida = document.getElementById("calcularInteres");
  salida.innerHTML = "";
  if (credito <= 0 || interesAnual <= 0 || numAnios < 1) {
    salida.innerHTML = "ERROR: datos no válidos para calcular un préstamo.";
    return;
  }

  let totalPrestamo = (credito * Math.pow(1 + interesAnual, numAnios)).toFixed(
    2
  );
  let cuotaMensual = (totalPrestamo / (numAnios * 12)).toFixed(2);
  let totalPagado = 0;

  salida.innerHTML += "Total pedido: " + credito + "€<br>";
  salida.innerHTML += "Interés anual: " + interesAnual + "%<br>";
  salida.innerHTML += "Años para pagar: " + numAnios + "<br>";
  salida.innerHTML += "Total a devolver: " + totalPrestamo + "€<br>";
  salida.innerHTML += "Cuota mensual: " + cuotaMensual + "€<br><br>";

  for (let i = 1; i <= numAnios; i++) {
    totalPagado += cuotaMensual * 12;
    let restante = totalPrestamo - totalPagado;
    if (restante < 0) restante = 0;

    salida.innerHTML +=
      "Año " +
      i +
      ": pagado: " +
      totalPagado.toFixed(2) +
      " € — restante: " +
      restante.toFixed(2) +
      "€<br>";
  }
}
