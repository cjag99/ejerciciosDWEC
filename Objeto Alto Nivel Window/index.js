let ventana;
function crearVentana() {
  let width, height;
  let errorFlag = true;
  do {
    width = parseInt(prompt("Indique el ancho de la ventana:"));
    height = parseInt(prompt("Indique el largo de la ventana:"));
    if (isNaN(width) || isNaN(height)) {
      alert("Error, el tamaño debe ser un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  ventana = window.open(
    "nueva.html",
    "nueva",
    `width = ${width}, height = ${height}`
  );
}
function cerrarVentana() {
  if (ventana && !ventana.closed) {
    ventana.close();
    s;
  } else {
    alert("No existe ventana que cerrar");
  }
}
function comprobarVentana() {
  let estadoVentana;
  if (!ventana) {
    estadoVentana = "No existe la ventana";
  } else if (ventana.closed) {
    estadoVentana = "La ventana está cerrada";
  } else {
    estadoVentana = "La ventana está abierta";
  }
  document.getElementById("act3").innerHTML += estadoVentana + "<br>";
}
function verificarLink(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
function verLink() {
  let url = prompt("Introduzca un enlace para ver su información:");
  if (url !== "" && verificarLink(url)) {
    let infoURL = window.open("", "infoURL", "width=800, height = 600");
    infoURL.document.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>InfoURL</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { color: green; }
            li { margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <h1>Info de la URL: ${url}</h1>
          <ul>
            <li>defaultStatus: ${infoURL.defaultStatus}</li>
            <li>length: ${infoURL.length}</li>
            <li>location: ${infoURL.location}</li>
            <li>name: ${infoURL.name}</li>
          </ul>
        </body>
      </html>
    `);
    infoURL.document.close();
  } else {
    alert("Debe proporcionar una url válida");
  }
}
function alertaBanco() {
  alert("ALERTA: Te están robando el banco");
  let decision = confirm("¿Está de acuerdo?");
  decision
    ? alert("De acuerdo. Contanctando con su sucursal bancaria...")
    : alert("No. Por favor, revise el estado de su cuenta.");
}
function cronometro() {
  let cronómetro = window.open("", "cornómetro", "width=800, height=600");
  cronómetro.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cronómetro</title>
  </head>
  <body>
    <h1>Cronómetro</h1>
    <p id="display"></p>
    <button onclick="iniciar()">Iniciar cuenta</button>
    <button onclick="pausar()">Parar cuenta</button>
    <script>
      let intervalo = null;
      let segundos = 0;

      function iniciar() {
        segundos = 0;
        let duracion = parseInt(prompt("Introduce la duración en segundos:"));
        let display = document.getElementById("display");
        if (isNaN(duracion) || duracion <= 0) {
          alert("Por favor, introduce un número válido mayor que 0.");
          return;
        }

        intervalo = setInterval(function () {
          segundos++;
          display.innerHTML = "Tiempo transcurrido: " + segundos + " segundos";
          if (segundos >= duracion) {
            clearInterval(intervalo);
            intervalo = null;
            display.innerHTML += " - ¡Tiempo terminado!";
          }
        }, 1000);
      }

      function pausar() {
        if (intervalo !== null) {
          clearInterval(intervalo);
          intervalo = null;
        }
      }
    </script>
  </body>
</html>`);
  cronometro.document.close();
}
function intervaloHora() {
  let muestraHora = window.open("", "muestraHora", "width=800, height= 600");
  muestraHora.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Muestra hora</title>
  </head>
  <body>
    <h1>Muestra horas</h1>
    <p id="display"></p>
    <button onclick="iniciar()">Iniciar cuenta</button>
    <button onclick="pausar()">Parar cuenta</button>
    <script>
      let intervalo = null;
      let segundos = 0;

      function iniciar() {
        segundos = 0;
        let duracion = parseInt(prompt("Introduce la duración en segundos:"));
        let display = document.getElementById("display");
        if (isNaN(duracion) || duracion <= 0) {
          alert("Por favor, introduce un número válido mayor que 0.");
          return;
        }

        intervalo = setInterval(function () {
          segundos++;
          const hora = new Date();
          display.innerHTML = \`Hola \${hora.toLocaleTimeString()}\`;
          if (segundos >= duracion) {
            clearInterval(intervalo);
            intervalo = null;
            display.innerHTML += " - ¡Tiempo terminado!";
          }
        }, 1000);
      }

      function pausar() {
        if (intervalo !== null) {
          clearInterval(intervalo);
          intervalo = null;
        }
      }
    </script>
  </body>
</html>`);
  muestraHora.document.close();
}
function verCodigo() {
  let ejemplo = window.open("", "ejemplo", "width= 800, height= 600");
  ejemplo.document.write(`<!DOCTYPE html>
<html>
<body>
<h1>The Window Object</h1>
<h2>The setInterval() and clearInterval() Methods</h2>
<button onclick="stopColor()">Stop </button>
<button onclick=" iniciarIntervalo()">Start </button>
<script>
let myInterval = null;
function iniciarIntervalo() {
myInterval = setInterval(setColor, 500);
}
iniciarIntervalo();
function setColor() {
let x = document.body;
if( x.style.backgroundColor == "yellow") {
x.style.backgroundColor = "pink"
}
else {
x.style.backgroundColor = "yellow"
}
// x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
function stopColor() {
  if (myInterval !== null) {
    clearInterval(myInterval);
    myInterval = null;
  }
}
</script>
</body>
</html>`);
  ejemplo.document.close();
}
function ajustarIntervalo() {
  let ejemplo = window.open("", "ejemplo", "width= 800, height= 600");
  ejemplo.document.write(`<!DOCTYPE html>
<html>
<body>
<h1>The Window Object</h1>
<h2>The setInterval() and clearInterval() Methods</h2>
<button onclick="stopColor()">Stop </button>
<button onclick=" iniciarIntervalo()">Start </button>
<script>
let myInterval = null;
function iniciarIntervalo() {
let duracion = parseInt(prompt("Intrduzca la duracion en segundos:"));
if(isNaN(duracion)){
    duracion = 500;
}
myInterval = setInterval(setColor, duracion);
}
iniciarIntervalo();
function setColor() {
let x = document.body;
if( x.style.backgroundColor == "yellow") {
x.style.backgroundColor = "pink"
}
else {
x.style.backgroundColor = "yellow"
}
// x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
function stopColor() {
  if (myInterval !== null) {
    clearInterval(myInterval);
    myInterval = null;
  }
}
</script>
</body>
</html>`);
  ejemplo.document.close();
}
function ajustarEjemplo() {
  let ejemplo = window.open("", "ejemplo", "width= 800, height= 600");
  ejemplo.document.write(`<!DOCTYPE html>
        <html>
        <body>
        <h1>The Window Object</h1>
        <h2>The setInterval() and clearInterval() Methods</h2>
        <button onclick="stopColor()">Stop </button>
        <button onclick=" iniciarIntervalo()">Start </button>
        <script>
        let myInterval = null;
        let color1, color2;
function esColorValido(color) {
  const s = new Option().style; 
  s.color = color;
  return s.color !== "";
}
function iniciarIntervalo() {
let duracion = parseInt(prompt("Intrduzca la duracion en segundos:"));
if(isNaN(duracion)){
    duracion = 500;
}
color1 = prompt("Introduzca un color (en inglés):");
color2 = prompt("Introduzca otro color (en inglés):");
if(!esColorValido(color1)) color1 = "yellow";
if(!esColorValido(color2)) color2 = "pink";

myInterval = setInterval(setColor, duracion);
}
iniciarIntervalo();
function setColor() {
let x = document.body;
if( x.style.backgroundColor == color1) {
x.style.backgroundColor = color2;
}
else {
x.style.backgroundColor = color1;
}
// x.style.backgroundColor = x.style.backgroundColor == color1 ? color2 : color1;
}
function stopColor() {
  if (myInterval !== null) {
    clearInterval(myInterval);
    myInterval = null;
  }
}
</script>
</body>
</html>`);
  ejemplo.document.close();
}
