function presentar() {
  let nombre;
  let edad;
  nombre = prompt("Ingrese su nombre:", "");
  edad = prompt("Ingrese su edad:", "");
  document.getElementById("presentacion").innerText =
    "Hola " + nombre + " asi que tienes " + edad + " años";
}
function escribiri() {
  let texto;
  texto = prompt("Ingrese un texto:", "");
  document.getElementById("negrita").innerHTML =
    "<h1><b>" + texto + "</b></h1>";
}
function esMayor() {
  let edad = prompt("Ingrese su edad:", "");
  if (edad < 18) {
    document.getElementById("esMayor").innerText = "Eres menor de edad.";
  } else {
    document.getElementById("esMayor").innerText = "Eres mayor de edad.";
  }
}
function esActivo() {
  let anyoNacimiento = prompt("Ingrese su año de nacimiento:", "");
  let mesNacimiento = prompt("Ingrese su mes de nacimiento:", "");
  let diaNacimiento = prompt("Ingrese su día de nacimiento:", "");
  let fechaNacimiento = new Date(
    anyoNacimiento,
    mesNacimiento - 1,
    diaNacimiento
  );
  if (
    fechaNacimiento.getFullYear < 2007 ||
    (fechaNacimiento.getFullYear() == 2007 &&
      fechaNacimiento.getMonth() < 10) ||
    (fechaNacimiento.getFullYear() == 2007 &&
      fechaNacimiento.getMonth() == 10 &&
      fechaNacimiento.getDate() <= 2)
  ) {
    document.getElementById("esActivo").innerText =
      "Eres mayor de edad y por lo tanto eres activo.";
  } else {
    document.getElementById("esActivo").innerText =
      "Eres menor de edad y por lo tanto no eres activo.";
  }
}
function puedeTrabajar() {
  let anyoNacimiento = prompt("Ingrese su año de nacimiento:", "");
  let mesNacimiento = prompt("Ingrese su mes de nacimiento (1-12):", "");
  let diaNacimiento = prompt("Ingrese su día de nacimiento:", "");

  let fechaNacimiento = new Date(
    anyoNacimiento,
    mesNacimiento - 1,
    diaNacimiento
  );

  function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  let edad = calcularEdad(fechaNacimiento);

  if (edad < 18) {
    document.getElementById("puedeTrabajar").innerText =
      "Eres menor de edad y por lo tanto no puedes trabajar.";
  } else if (edad < 67) {
    document.getElementById("puedeTrabajar").innerText =
      "Eres mayor de edad y por lo tanto puedes trabajar.";
  } else {
    document.getElementById("puedeTrabajar").innerText =
      "Eres mayor de 65 años y por lo tanto no puedes trabajar.";
  }
}
function esBisiesto() {
  let anyo = prompt("Ingrese un año:", "");
  anyo % 4 == 0
    ? (document.getElementById("esBisiesto").innerText =
        "El año " + anyo + " es bisiesto.")
    : (document.getElementById("esBisiesto").innerText =
        "El año " + anyo + " no es bisiesto.");
}
function tipoPagina() {
  let ventana = window.location.href;
  ventana.substring(0, 5) == "https"
    ? (document.getElementById("tipoPagina").innerText = "La página es remota.")
    : (document.getElementById("tipoPagina").innerText = "La página es local.");
}
function numeroCliente() {
  let numero = prompt("Ingrese su número de cliente:", "");
  numero == 1000
    ? (document.getElementById("numeroCliente").innerText =
        "Ganaste un premio.")
    : (document.getElementById("numeroCliente").innerText =
        "Lo sentimos, sigue participando.");
}
function numeroMenor() {
  let numero1 = prompt("Ingrese el primer número:", "");
  let numero2 = prompt("Ingrese el segundo número:", "");
  numero1 < numero2
    ? (document.getElementById("numeroMenor").innerText =
        "El número menor es: " + numero1)
    : (document.getElementById("numeroMenor").innerText =
        "El número menor es: " + numero2);
}
function numeroMenorIgual() {
  let numero1 = prompt("Ingrese el primer número:", "");
  let numero2 = prompt("Ingrese el segundo número:", "");
  if (numero1 < numero2) {
    document.getElementById("numeroMenorIgual").innerText =
      "El número menor es: " + numero1;
  } else if (numero1 > numero2) {
    document.getElementById("numeroMenorIgual").innerText =
      "El número menor es: " + numero2;
  } else {
    document.getElementById("numeroMenorIgual").innerText =
      "Los números son iguales: " + numero1;
  }
}
function diaSemana() {
  let dia = prompt("Ingrese un número del 1 al 7:", "");
  switch (dia) {
    case "1":
      document.getElementById("diaSemana").innerText = "Hoy es Lunes";
      break;
    case "2":
      document.getElementById("diaSemana").innerText = "Hoy es Martes";
      break;
    case "3":
      document.getElementById("diaSemana").innerText = "Hoy es Miércoles";
      break;
    case "4":
      document.getElementById("diaSemana").innerText = "Hoy es Jueves";
      break;
    case "5":
      document.getElementById("diaSemana").innerText = "Hoy es Viernes";
      break;
    case "6":
      document.getElementById("diaSemana").innerText = "Hoy es Sábado";
      break;
    case "7":
      document.getElementById("diaSemana").innerText = "Hoy es Domingo";
      break;
    default:
      document.getElementById("diaSemana").innerText =
        "El número introducido " + dia + " no es válido.";
  }
}
function valorAbsoluto() {
  let numero = prompt("Ingrese un número:", "");
  numero < 0
    ? (document.getElementById("valorAbsoluto").innerText =
        "El valor absoluto de " + numero + " es: " + -numero)
    : (document.getElementById("valorAbsoluto").innerText =
        "El valor absoluto de " + numero + " es: " + numero);
}
function coincidenciaNombres() {
  let nombre1 = prompt("Ingrese el primer nombre:", "");
  let nombre2 = prompt("Ingrese el segundo nombre:", "");
  nombre1.charAt(0).toLowerCase() === nombre2.charAt(0).toLowerCase()
    ? (document.getElementById("coincidenciaNombres").innerText =
        "Coincidencia")
    : (document.getElementById("coincidenciaNombres").innerText =
        "No hay coincidencia");
}
function votar() {
  let candidato = prompt(
    "Ingrese el nombre del candidato (A, B o C):",
    ""
  ).toUpperCase();
  switch (candidato) {
    case "A":
      document.getElementById("votar").innerText =
        "Usted ha  votado por el partido rojo.";
      break;
    case "B":
      document.getElementById("votar").innerText =
        "Usted ha votado por el partido verde.";
      break;
    case "C":
      document.getElementById("votar").innerText =
        "Usted ha votado por el partido azul.";
      break;
    default:
      document.getElementById("votar").innerText = "Opción errónea.";
  }
}
function esVocal() {
  let letra = prompt("Ingrese una letra:", "").toLowerCase();
  if (letra.length > 1) {
    document.getElementById("esVocal").innerText =
      "No se puede procesar el dato.";
  } else {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      document.getElementById("esVocal").innerText = "La letra es una vocal.";
    } else {
      document.getElementById("esVocal").innerText =
        "La letra no es una vocal.";
    }
  }
}
function anioBisiesto() {
  let anyo = prompt("Ingrese un año:", "");
  (anyo % 4 == 0 && anyo % 100 != 0) || anyo % 400 == 0
    ? (document.getElementById("anioBisiesto").innerText =
        "El año " + anyo + " es bisiesto.")
    : (document.getElementById("anioBisiesto").innerText =
        "El año " + anyo + " no es bisiesto.");
}
function votarSwitch() {
  let candidato = prompt(
    "Ingrese el nombre del candidato (A, B o C):",
    ""
  ).toUpperCase();

  switch (candidato) {
    case "A":
      document.getElementById("votarSwitch").innerText =
        "Usted ha  votado por el partido rojo.";
      break;
    case "B":
      document.getElementById("votarSwitch").innerText =
        "Usted ha votado por el partido verde.";
      break;
    case "C":
      document.getElementById("votarSwitch").innerText =
        "Usted ha votado por el partido azul.";
      break;
    default:
      document.getElementById("votarSwitch").innerText = "Opción errónea.";
  }
}
function parImpar() {
  let numero = prompt("Ingrese un número:", "");
  numero % 2 == 0
    ? (document.getElementById("parImpar").innerText =
        "El número " + numero + " es par.")
    : (document.getElementById("parImpar").innerText =
        "El número " + numero + " es impar.");
}
function puedeVotar() {
  let edad = prompt("Ingrese su edad:", "");
  edad >= 18
    ? (document.getElementById("puedeVotar").innerText =
        "Usted es mayor de edad y por lo tanto puede votar.")
    : (document.getElementById("puedeVotar").innerText =
        "Usted es menor de edad y por lo tanto no puede votar.");
}
function mayorTernario() {
  let numero1 = prompt("Ingrese el primer número:", "");
  let numero2 = prompt("Ingrese el segundo número:", "");
  numero1 > numero2
    ? (document.getElementById("mayorTernario").innerText =
        "El número mayor es: " + numero1)
    : (document.getElementById("mayorTernario").innerText =
        "El número mayor es: " + numero2);
}
function clasificarNota() {
  let nota = prompt("Ingrese una nota (0-10):", "");
  if (nota >= 0 && nota <= 10) {
    document.getElementById("clasificarNota").innerText =
      nota >= 5 ? "Aprobado" : "Suspenso";
  } else {
    document.getElementById("clasificarNota").innerText = "Nota no válida";
  }
}
function calificar() {
  let nota = prompt("Ingrese una nota (0-10):", "");
  switch (nota) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
      document.getElementById("calificar").innerText = "Insuficiente";
      break;
    case "5":
    case "6":
      document.getElementById("calificar").innerText = "Suficiente";
      break;
    case "7":
    case "8":
      document.getElementById("calificar").innerText = "Notable";
      break;
    case "9":
    case "10":
      document.getElementById("calificar").innerText = "Sobresaliente";
      break;
    default:
      document.getElementById("calificar").innerText = "Nota no válida";
  }
}
function positivoNegativo() {
  let numero = prompt("Ingrese un número:", "");
  if (numero > 0) {
    document.getElementById("positivoNegativo").innerText =
      "El número " + numero + " es positivo.";
  } else if (numero < 0) {
    document.getElementById("positivoNegativo").innerText =
      "El número " + numero + " es negativo.";
  } else {
    document.getElementById("positivoNegativo").innerText =
      "El número es cero.";
  }
}
function validarContrasena() {
  let contrasena = prompt("Ingrese una contraseña:", "");
  contrasena === "admin123"
    ? (document.getElementById("validarContrasena").innerText =
        "Contraseña correcta. Accesio permitido.")
    : (document.getElementById("validarContrasena").innerText =
        "Contraseña incorrecta. Acceso denegado.");
}
function diaSemanaSwitch() {
  let dia = prompt("Ingrese un número del 1 al 7:", "");
  switch (dia) {
    case "1":
      document.getElementById("diaSemanaSwitch").innerText = "Lunes";
      break;
    case "2":
      document.getElementById("diaSemanaSwitch").innerText = "Martes";
      break;
    case "3":
      document.getElementById("diaSemanaSwitch").innerText = "Miércoles";
      break;
    case "4":
      document.getElementById("diaSemanaSwitch").innerText = "Jueves";
      break;
    case "5":
      document.getElementById("diaSemanaSwitch").innerText = "Viernes";
      break;
    case "6":
      document.getElementById("diaSemanaSwitch").innerText = "Sábado";
      break;
    case "7":
      document.getElementById("diaSemanaSwitch").innerText = "Domingo";
      break;
    default:
      document.getElementById("diaSemanaSwitch").innerText = "Número no válido";
  }
}
function calculadora() {
  let numero1 = parseFloat(prompt("Ingrese el primer número:", ""));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:", ""));
  let operacion = prompt("Ingrese la operación (+, -, *, /):", "");
  switch (operacion) {
    case "+":
      document.getElementById("calculadora").innerText =
        "El resultado de la suma es: " + (numero1 + numero2);
      break;
    case "-":
      document.getElementById("calculadora").innerText =
        "El resultado de la resta es: " + (numero1 - numero2);
      break;
    case "*":
      document.getElementById("calculadora").innerText =
        "El resultado de la multiplicación es: " + numero1 * numero2;
      break;
    case "/":
      if (numero2 !== 0) {
        document.getElementById("calculadora").innerText =
          "El resultado de la división es: " + numero1 / numero2;
      } else {
        document.getElementById("calculadora").innerText =
          "Error: División por cero.";
      }
      break;
    default:
      document.getElementById("calculadora").innerText = "Operación no válida";
  }
}
function semaforo() {
  let color = prompt(
    "Ingrese un color (rojo, amarillo, verde):",
    ""
  ).toLowerCase();
  switch (color) {
    case "rojo":
      document.getElementById("semaforo").innerText = "Detente";
      break;
    case "amarillo":
      document.getElementById("semaforo").innerText = "Precaución";
      break;
    case "verde":
      document.getElementById("semaforo").innerText = "Adelante";
      break;
    default:
      document.getElementById("semaforo").innerText = "Color no válido";
  }
}
