function mostrarHTMLCollections() {
  let elementos = {
    "anchors[]": document.anchors.length,
    "applets[]": document.applets.length,
    "forms[]": document.forms.length,
    "images[]": document.images.length,
    "links[]": document.links.length,
    "scripts[]": document.scripts.length,
    "stylesheets[]": document.styleSheets.length,
    cookies: document.cookie.length,
  };
  let parrafo = document.getElementById("act1");
  parrafo.innerHTML += "<ul>";
  for (let elemento in elementos) {
    parrafo.innerHTML += `<li><b>${elemento}</b>: ${elementos[elemento]}</li>`;
  }
  parrafo.innerHTML += "</ul>";
}
function mostrarDocumentProperties() {
  let propiedades = {
    domain: document.domain,
    lastModified: document.lastModified,
    readyState: document.readyState,
    referrer: document.referrer,
    title: document.title,
    URL: document.URL,
  };
  let parrafo = document.getElementById("act2");
  parrafo.innerHTML += "<ul>";
  for (let propiedad in propiedades) {
    parrafo.innerHTML += `<li><b>${propiedad}</b>: ${propiedades[propiedad]}</li>`;
  }
  parrafo.innerHTML += "</ul>";
}
function cambiarTitulo() {
  alert(`El título anterior era: "${document.title}"`);
  let nuevoTitulo = prompt("Ingrese el nuevo título del documento:");
  document.title = nuevoTitulo;
  alert(`El título ha sido cambiado a: "${document.title}"`);
}
function modificarTituloInnerHTML() {
  let parrafo = document.getElementById("act4");
  parrafo.innerHTML += `<p>El título actual del documento es: "<b>${document.title}</b>"</p>`;
  let nuevoTitulo = prompt("Ingrese el nuevo título del documento:");
  document.title = nuevoTitulo;
  parrafo.innerHTML += `<p>El título ha sido cambiado a: "<b>${document.title}</b>"</p>`;
}
function ejercicioGetElementById() {
  let parrafo = document.getElementById("act5");
  let nombre = prompt("Ingrese su nombre:");
  parrafo.style.color = "blue";
  parrafo.style.fontSize = "20px";
  parrafo.style.fontFamily = "Arial, sans-serif";
  parrafo.innerHTML = `<p>Hola, <b>${nombre}</b>! Bienvenido al sitio web.</p>
  <p>Este contenido ha sido generado gracias a GetElementById()</p>`;
}
function ejercicioGetElementsByName() {
  let text1 = document.getElementsByName("text")[0];
  let text2 = document.getElementsByName("text")[1];
  let parrafo = document.getElementById("act6");
  parrafo.innerHTML += `<p>Tu nombre completo es ${text2.value}, ${text1.value}</p>`;
}
function visualizarEnunciados() {
  let numEnunciado = parseInt(
    prompt("Introduzca el enunciado que desea visualizar:")
  );
  if (isNaN(numEnunciado) || numEnunciado < 1 || numEnunciado > 9) {
    alert("Error, no se ha encontrado ese enunciado");
  } else {
    let enunciado = document.getElementsByTagName("li")[numEnunciado];
    let parrafo = document.getElementById("act7");
    parrafo.innerHTML += enunciado.textContent;
  }
}
function selectorTag() {
  let selector = prompt(
    "Introduzca la etiqueta de la que desea ver sus contenidos:"
  );
  let arrayTag = document.getElementsByTagName(selector);
  if (arrayTag.length == 0) {
    alert("No hay contenido en el documento con esa etiqueta");
  } else {
    let parrafo = document.getElementById("act8");
    parrafo.innerHTML += `<p>Elemento seleccionado: ${selector}</p>`;
    for (let tag of arrayTag) {
      parrafo.innerHTML += `<p>${tag.textContent}</p>`;
    }
  }
}
function tagByNum() {
  let numero = prompt("Ingresa el numero de la etiqueta:", "");
  if (isNaN(numero) || numero < 1 || numero > 3) {
    alert("Error, no se encuentra esta etiqueta");
  } else {
    let elements = document.getElementsByName("etiqueta" + numero);
    let valorDeEtiqueta = elements[0].value;
    document.getElementById("explica").innerHTML =
      "El contenido de la etiqueta " + numero + " es: ";
    document.getElementById("elemento").innerHTML = valorDeEtiqueta;
  }
}
