function ejemploDOM() {
  document.getElementById("elementoaCambiar").innerHTML =
    "Texto cambiado desde JavaScript<br>";
  document.getElementById("elementoaCambiar").innerHTML +=
    "Este código recoge un elemento del DOM mediante la función getElementById() y cambia su contenido con innerHTML.";
}
function propiedadesLocation() {
  let propiedades = {
    hash: location.hash,
    host: location.host,
    hostname: location.hostname,
    href: location.href,
    pathname: location.pathname,
    port: location.port,
    protocol: location.protocol,
    search: location.search,
  };
  let parrafo = document.getElementById("act2");
  for (let prop in propiedades) {
    parrafo.innerHTML += `<p>${prop}: ${propiedades[prop]}</p>`;
  }
}
function verAssign() {
  let ventana = window.open("", "assign", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
        <html>
        <body>
<h2>The assign Property of Location Object</h2>
<button onclick="myFunction()">Load new document</button>
<script>
function myFunction() {
location.assign("https://www.iesplayamar.es");
}
</script>
</body>
</html>`);
  ventana.document.close();
}
function explicarAssign() {
  verAssign();
  let parrafo = document.getElementById("act3");
  parrafo.innerHTML = `La función location.assign() carga un nuevo documento en la ventana actual. 
    A diferencia de location.replace(), assign() mantiene la página actual en el historial del navegador, 
    lo que permite al usuario volver a ella utilizando el botón "Atrás".`;
}
function assignURL() {
  let ventana = window.open("", "assign", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
        <html>
        <body>
<h2>The assign Property of Location Object</h2>
<button onclick="myFunction()">Load new document</button>
<script>
function myFunction() {
let url = prompt("Introduce una URL válida:");
if (!esURL(url)) {
  alert("La URL introducida no es válida. Inténtalo de nuevo.");
} else {
    location.assign(url);
}
}
function esURL(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}
</script>
</body>
</html>`);
  ventana.document.close();
}
function reloadPage() {
  let ventana = window.open("", "assign", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
        <html>
        <body>
<h2>The assign Property of Location Object</h2>
<button onclick="myFunction()">Load new document</button>
<button onclick="location.reload()">Recargar página</button>
<script>
function myFunction() {
let url = prompt("Introduce una URL válida:");
if (!esURL(url)) {
  alert("La URL introducida no es válida. Inténtalo de nuevo.");
} else {
    location.assign(url);
}
}
function esURL(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}
</script>
</body>
</html>`);
  ventana.document.close();
}
function replaceURL() {
  let ventana = window.open("", "assign", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
        <html>
        <body>
<h2>The assign Property of Location Object</h2>
<button onclick="myFunction()">Load new document</button>
<button onclick="location.reload()">Recargar página</button>
<script>
function myFunction() {
let url = prompt("Introduce una URL válida:");
if (!esURL(url)) {
  alert("La URL introducida no es válida. Inténtalo de nuevo.");
} else {
    location.replace(url);
}
}
function esURL(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}
</script>
</body>
</html>`);
  ventana.document.close();
}
function propiedadesNavigator() {
  let propiedades = {
    appCodeName: navigator.appCodeName,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    userAgent: navigator.userAgent,
  };
  let parrafo = document.getElementById("act8");
  for (let prop in propiedades) {
    parrafo.innerHTML += `<p>${prop}: ${propiedades[prop]}</p>`;
  }
}
function ejemploNavigator() {
  let ventana = window.open("", "navigator", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
        <html>
        <body>
<h1>The Window Navigator Object</h1>
<h2>The The geolocation Property</h2>
<p id="demo"></p>
<script>
try {
if (navigator.geolocation.getCurrentPosition(showPosition).GeolocationPositionError != PERMISSION_DENIED)
navigator.geolocation.getCurrentPosition(showPosition);
} catch (e) {
document.getElementById("demo").innerHTML =
"Geolocation is not supported by this browser2.";
}
function showPosition(position) {
document.getElementById("demo").innerHTML =
"Latitude: " + position.coords.latitude + "<br>" +
"Longitude: " + position.coords.longitude;
}
</script>
</body>
</html>`);
  ventana.document.close();
}
let lat = 36.643675;
let lon = -4.4902875;
let zoom = 15;
function insertarMapa() {
  let mapaURL = `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;

  let parrafo = document.getElementById("mapa");
  parrafo.innerHTML = `
    <iframe 
      src="${mapaURL}" 
      width="600" height="450" style="border:0;" 
      allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}
function insertarMapaZoom() {
  let mapaURL = `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;

  let parrafo = document.getElementById("mapa2");
  parrafo.innerHTML = `
    <iframe 
      src="${mapaURL}" 
      width="600" height="450" style="border:0;" 
      allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}
function aumentarZoom(cantidad) {
  let nuevoZoom = (zoom += cantidad);
  if (zoom > 21) zoom = 21; // Zoom máximo permitido por Google Maps
  actualizarMapa(lat, lon, nuevoZoom);
}
function disminuirZoom(cantidad) {
  let nuevoZoom = (zoom -= cantidad);
  if (zoom < 3) zoom = 3; // Zoom mínimo permitido por Google Maps
  actualizarMapa(lat, lon, nuevoZoom);
}
function actualizarMapa(lat, lon, zoom) {
  const iframe = document.querySelector("#mapa2 iframe");
  const nuevoSrc = `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;
  iframe.removeAttribute("src");
  setTimeout(() => {
    iframe.src = nuevoSrc;
  }, 100);
}
