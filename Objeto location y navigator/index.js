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
function insertarMapa() {
  let ventana = window.open("", "navigator", "width=800,height=600");
  ventana.document.write(`<!DOCTYPE html>
<html>
  <body>
    <h1>The Window Navigator Object</h1>
    <h2>The Geolocation Property</h2>
    <p id="demo"></p>
    <iframe id="mapFrame" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <script>
      try {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } catch (e) {
        document.getElementById("demo").innerHTML =
          "Geolocation is not supported by this browser.";
      }

      function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("demo").innerHTML =
          "Latitude: " + lat + "<br>" + "Longitude: " + lon;

        // Construye la URL de Google Maps con las coordenadas
        const mapUrl = \`https://www.google.com/maps/@\${lat},\${lon},15z\`;

        // Asigna la URL al iframe
        document.getElementById("mapFrame").src = mapUrl;
      }

      function showError(error) {
        document.getElementById("demo").innerHTML =
          "Error obteniendo la geolocalización.";
      }
    </script>
  </body>
</html>`);
  ventana.document.close();
}
function cambiarZoom() {
  let ventana = window.open("", "navigator", "width=800,height=600");

  ventana.document.write(`<!DOCTYPE html>
<html>
  <body>
    <h1>The Window Navigator Object</h1>
    <h2>The Geolocation Property</h2>
    <p id="demo"></p>
    <iframe id="mapFrame" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <button onclick="aumentarZoom(1)">+</button>
    <button onclick="disminuirZoom(1)">-</button>

    <script>
      // Variables globales dentro de la ventana hija
      let mapUrl = "";
      let zoom = 15;
      let lat = 0;
      let lon = 0;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        document.getElementById("demo").innerHTML =
          "Geolocation is not supported by this browser.";
      }

      function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById("demo").innerHTML =
          "Latitude: " + lat + "<br>Longitude: " + lon;

        // Construye la URL de Google Maps con las coordenadas
        mapUrl = \`https://www.google.com/maps/@\${lat},\${lon},\${zoom}z\`;

        // Asigna la URL al iframe
        document.getElementById("mapFrame").src = mapUrl;
      }

      function showError(error) {
        document.getElementById("demo").innerHTML =
          "Error obteniendo la geolocalización.";
      }

      function actualizarMapa() {
        mapUrl = \`https://www.google.com/maps/@\${lat},\${lon},\${zoom}z\`;
        document.getElementById("mapFrame").src = mapUrl;
      }

      function aumentarZoom(cantidad) {
        zoom += cantidad;
        if (zoom > 21) zoom = 21;
        actualizarMapa();
      }

      function disminuirZoom(cantidad) {
        zoom -= cantidad;
        if (zoom < 3) zoom = 3;
        actualizarMapa();
      }
    <\/script>
  </body>
</html>`);

  ventana.document.close();
}
