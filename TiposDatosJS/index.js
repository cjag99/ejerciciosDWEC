const c1 = "Esto es una const",
  c2 = 25,
  c3 = true;
var ejemplo1 = "Hola",
  ejemplo2 = 3,
  ejemplo3 = true,
  a = true,
  b = "hola",
  c = 1;
function holaMundo() {
  alert("Hola Mundo");
}

function ejemplo() {
  return "Esto es una función";
}
var elementosTabla = [
  { dato: "Cadena", valor: "Hola mundo" },
  { dato: "Número", valor: 4 },
  { dato: "Boolean", valor: true },
  { dato: "Null", valor: null },
  {
    dato: "Object",
    valor: JSON.stringify({
      nombre: "Pepe",
      edad: 20,
    }),
  },
  { dato: "Arrays", valor: [1, 2, 3, 4] },
  { dato: "Function", valor: ejemplo },
];
function mostrarTabla() {
  let tabla = document.getElementById("tabla");
  for (let i = 0; i < elementosTabla.length; i++) {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    celda1.textContent = elementosTabla[i].dato;
    celda2.textContent = elementosTabla[i].valor;
  }
}

function mostrarTipos() {
  let tabla2 = document.getElementById("tabla2");
  for (let i = 0; i < elementosTabla.length; i++) {
    let fila2 = tabla2.insertRow();
    let celda3 = fila2.insertCell(0);
    let celda4 = fila2.insertCell(1);
    celda3.textContent = elementosTabla[i].dato;
    celda4.textContent = typeof elementosTabla[i].valor;
  }
}
function mostrarConst() {
  const c1 = "Esto es una const",
    c2 = 25,
    c3 = true;
  alert(c1);
  alert(c2);
  alert(c3);
  try {
    c1 = "Hola";
    c2 = 45;
    c3 = false;
  } catch (error) {
    alert(
      "Se muestran los valores de la primera asignación, puesto que los valores const una vez inicializados no cambian."
    );
  }
}
function respuesta24() {
  document.getElementById("res1").innerHTML = 4 + 4;
  document.getElementById("res2").innerHTML = "4" + 4;
  document.getElementById("res3").innerHTML = a + c;
  document.getElementById("res4").innerHTML = b + c;
  document.getElementById("res5").innerHTML = 2.9e3 + 1;
  document.getElementById("res6").innerHTML = 2.9e3 + b;
  document.getElementById("res7").innerHTML = 2.9e3 + a;
}
function respuesta25() {
  document.getElementById("res01").innerHTML =
    "parseInt(): " + parseInt(2.9e3) + "\t parseFloat(): " + parseFloat(2.9e3);
  document.getElementById("res02").innerHTML =
    "parseInt(): " +
    parseInt(30.1e-3) +
    "\t parseFloat(): " +
    parseFloat(30.1e-3);
  document.getElementById("res03").innerHTML =
    "parseInt(): " +
    parseInt(0.000000004) +
    "\t parseFloat(): " +
    parseFloat(0.000000004);
  document.getElementById("res04").innerHTML =
    "parseInt(): " + parseInt(0.6) + "\t parseFloat(): " + parseFloat(0.6);
  document.getElementById("res05").innerHTML =
    "parseInt(): " +
    parseInt(3000000) +
    "\t parseFloat(): " +
    parseFloat(3000000);
  document.getElementById("res06").innerHTML =
    "parseInt(): " +
    parseInt(301231000) +
    "\t parseFloat(): " +
    parseFloat(301231000);
}
function respuesta26() {
  let respuesta = document.getElementById("respuesta");
  let cadena = "123456";
  respuesta.innerHTML = cadena.length;
}
function mostrarVars() {
  alert(ejemplo4 + "\n" + ejemplo5 + "\n" + ejemplo6);
}
if (ejemplo3 == true) {
  let ejemplo7 = "¿Qué tal?";
  let ejemplo8 = -5;
  let ejemplo9 = true;
  function mostrarLet() {
    alert(ejemplo7 + "\n" + ejemplo8 + "\n" + ejemplo9);
  }
}
function mostrarLet2() {
  try {
    alert(ejemplo7 + "\n" + ejemplo8 + "\n" + ejemplo9);
  } catch (error) {
    alert("No se pueden mostrar let fuera de su ámbito de uso");
  }
}
function mostrarDatos() {
  mostrarTabla();
  mostrarTipos();
  respuesta24();
  respuesta25();
  respuesta26();
}
if (ejemplo3 == true) {
  var ejemplo4 = "Adios";
  var ejemplo5 = 0;
  var ejemplo6 = false;
}
