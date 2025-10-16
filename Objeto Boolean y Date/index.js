function mostrarHoy() {
  let hoy = new Date();
  document.getElementById("act1").innerHTML += `<p>Hoy es ${hoy}</p>`;
}

function mostrarFechaTxt() {
  let textoHoy = new Date("2025-10-16");
  document.getElementById("act2").innerHTML += `<p>Hoy es ${textoHoy}</p>`;
}

function calcularTiempo() {
  let tiempoTranscurrido = Date.now();
  let hoy = new Date(tiempoTranscurrido);
  let parrafo = document.getElementById("act3");
  let segundos = Math.round(tiempoTranscurrido / 1000);
  let horas = Math.round(segundos / (60 * 60));
  let dias = Math.round(horas / 24);
  let anyos = Math.round(dias / 365);
  parrafo.innerHTML += `<p>Segundos: ${segundos}</p>
  <p>Horas: ${horas}</p>
  <p>Días: ${dias}</p>
  <p>Años: ${anyos}</p>`;
}

function tiempoTranscurrido() {
  let tiempoTranscurrido = Date.now();
  let hoy = new Date(tiempoTranscurrido);
  let fechaNacimiento = new Date("1999-02-02");
  let dias = Math.round((hoy - fechaNacimiento) / (1000 * 60 * 60 * 24));
  document.getElementById(
    "act4"
  ).innerHTML += `<p>Has vivido ${dias} días aproximadamente</p>`;
}

function mostrarTiempoVida() {
  let errorFlag = true;
  let zona, media, mediaH, mediaM, genero;
  let tiempoRestante;
  let parrafo = document.getElementById("act5");
  do {
    genero = prompt("Indique su género(H-M):");
    if (genero != "H" && genero != "M" && genero != "no indicado") {
      alert("Género solo puede ser H, M o no indicado");
    } else {
      zona = prompt("Introduzca la zona local donde vive:");
      switch (zona) {
        case "Japón":
          media = 84.3;
          mediaH = 81.5;
          mediaM = 86.9;
          errorFlag = false;
          break;
        case "Suiza":
          media = 83.4;
          mediaH = 81.8;
          mediaM = 85.1;
          break;
        case "España":
          media = 83.2;
          mediaH = 80.7;
          mediaM = 85.7;
          errorFlag = false;
          break;
        case "Italia":
          media = 83.0;
          mediaH = 80.9;
          mediaM = 84.9;
          errorFlag = false;
          break;
        case "Irak":
          media = 72.4;
          mediaH = 69.9;
          mediaM = 75.0;
          errorFlag = false;
          break;
        case "Guinea Ecuatorial":
          media = 62.2;
          mediaH = 60.9;
          mediaM = 63.6;
          errorFlag = false;
          break;
        case "Somalia":
          media = 56.5;
          mediaH = 54.0;
          mediaM = 59.2;
          errorFlag = false;
          break;
        default:
          alert("Error, no se conoce este país");
      }
    }
  } while (errorFlag);
  if (genero == "H") {
    tiempoRestante = Math.round(
      mediaH -
        (Date.now() - new Date("1999-02-02")) / (1000 * 60 * 60 * 24 * 365)
    );
    parrafo.innerHTML += `<p>Te quedan ${tiempoRestante} años de vida</p>`;
  } else if (genero == "M") {
    tiempoRestante = Math.round(
      mediaM -
        (Date.now() - new Date("1999-02-02")) / (1000 * 60 * 60 * 24 * 365)
    );
    parrafo.innerHTML += `<p>Te quedan ${tiempoRestante} años de vida</p>`;
  } else if (genero == "no indicado") {
    tiempoRestante = Math.round(
      media -
        (Date.now() - new Date("1999-02-02")) / (1000 * 60 * 60 * 24 * 365)
    );
    parrafo.innerHTML += `<p>Te quedan ${tiempoRestante} años de vida</p>`;
  }
}

function mostrarEjemplos() {
  let parrafo = document.getElementById("act6");
  let ejemplos = [
    ["Hoy: ", Date.today().toString()],
    ["Próximo viernes: ", Date.today().next().friday().toString()],
    ["Último lunes: ", Date.today().last().monday().toString()],
    ["Próximo marzo: ", new Date().next().march().toString()],
    ["Hace una semana: ", new Date().last().week().toString()],
    ["¿Hoy es viernes? ", Date.today().is().friday().toString()],
    ["¿Hoy es fri? ", Date.today().is().fri().toString()],
    ["¿Hoy es noviembre? ", Date.today().is().november().toString()],
    ["¿Hoy es nov? ", Date.today().is().nov().toString()],
    ["¿Hoy es día laboral? ", Date.today().is().weekday().toString()],
    ["Sumar 1 día: ", Date.today().addDays(1).toString()],
    ["Restar 3 meses: ", Date.today().addMonths(-3).toString()],
    [
      "Sumar 1 día (método alternativo): ",
      Date.today().add(1).day().toString(),
    ],
    [
      "Restar 3 meses (método alternativo): ",
      Date.today().add(-3).months().toString(),
    ],
    ["1 día desde ahora: ", (1).day().fromNow().toString()],
    ["3 meses atrás: ", (3).months().ago().toString()],
    ["6 meses desde ahora: ", (6).months().fromNow().toString()],
    ["Lunes de esta semana: ", Date.monday().toString()],
    ["Lunes abreviado: ", Date.mon().toString()],
    ["Marzo 1 de este año: ", Date.march().toString()],
    ["Mar abreviado: ", Date.mar().toString()],
    ["Primer jueves del mes: ", Date.today().first().thursday().toString()],
    ["Segundo jueves del mes: ", Date.today().second().thursday().toString()],
    ["Tercer jueves de marzo: ", Date.march().third().thursday().toString()],
    [
      "Cuarto domingo de octubre: ",
      Date.october().fourth().sunday().toString(),
    ],
    ["Cuarto domingo del mes: ", Date.today().fourth().sunday().toString()], //Si ponias el quinto da error porque este mes no tiene 5 domingos
    ["Último domingo de octubre: ", Date.october().final().sunday().toString()],
    ["Primer lunes de enero: ", Date.january().first().monday().toString()],
    [
      "Último viernes de diciembre: ",
      Date.december().final().friday().toString(),
    ],
    ["Hoy a las 18:15: ", Date.today().at("6:15pm").toString()],
    [
      "Hoy a las 18:15 (objeto): ",
      Date.today().at({ hour: 18, minute: 15 }).toString(),
    ],
    [
      "Fecha configurada con objeto: ",
      Date.today().set({ month: 1, day: 20, hour: 20, minute: 30 }).toString(),
    ],
  ];
  for (let i = 0; i < ejemplos.length; i++) {
    parrafo.innerHTML += `<p>${ejemplos[i][0]} ${ejemplos[i][1]}</p>`;
  }
}
function calcularDateJS() {
  let parrafo = document.getElementById("act7");
  let calculos = [
    ["Hoy: ", Date.today().toString()],
    ["Próximo viernes: ", Date.today().next().friday().toString()],
    ["Hoy a las 23:00: ", Date.today().at({ hour: 23, minute: 0 }).toString()],
    ["Hoy dentro de un año: ", Date.today().addYears(1).toString()],
    [
      "Tu cumpleaños este año: ",
      Date.parse(`02 Feb ${Date.today().getFullYear()}`).toString(),
    ],
    [
      "El primer lunes de mes que viene: ",
      Date.today().moveToFirstDayOfMonth().next().monday().toString(),
    ],
    ["Preguntar si hoy es viernes: ", Date.today().is().friday() ? "Sí" : "No"],
    [
      "Preguntar si hace un mes fue septiembre: ",
      Date.today().addMonths(-1).is().september() ? "Sí" : "No",
    ],
  ];
  for (let i = 0; i < calculos.length; i++) {
    parrafo.innerHTML += `<p>${calculos[i][0]} ${calculos[i][1]}</p>`;
  }
}
