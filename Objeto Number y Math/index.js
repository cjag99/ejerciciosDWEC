function datoCirculo() {
  let errorFlag = true;
  let radio;
  do {
    radio = parseFloat(prompt("Introduce un radio:"));
    if (isNaN(radio)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  let circunferencia = (2 * Math.PI * radio).toFixed(2);
  let area = Math.pow(Math.PI * radio, 2).toFixed(2);
  let parrafo = document.getElementById("act1");
  parrafo.innerHTML += `<p>Circunferencia: ${circunferencia}</p>`;
  parrafo.innerHTML += `<p>Área: ${area}</p>`;
}

function calcularHipotenusa() {
  let errorFlag = true;
  let cateto1, cateto2;
  let parrafo = document.getElementById("act2");
  do {
    cateto1 = parseFloat(prompt("Introduzca un cateto:"));
    cateto2 = parseFloat(prompt("Introduzca otro cateto:"));
    if (isNaN(cateto1) || isNaN(cateto2)) {
      alert("Los catetos deben ser números");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  let radicando = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
  if (radicando < 0) {
    parrafo.innerHTML += "No se puede calcular la hipotennusa (RAIZ NEGATIVA).";
  } else {
    let hipotenusa = Math.sqrt(radicando);
    parrafo.innerHTML += `<p>La hipotenusa de los catetos ${cateto1} y ${cateto2} es ${hipotenusa.toFixed(
      2
    )}</p>`;
  }
}

function mostrarConstantes() {
  let parrafo = document.getElementById("act3");
  parrafo.innerHTML += `<ul>
    <li>E: ${Math.E}</li>
    <li>LN2: ${Math.LN2}</li>
    <li>LN10: ${Math.LN10}</li>
    <li>LOG2E: ${Math.LOG2E}</li>
    <li>LOG10E: ${Math.LOG10E}</li></ul>`;
}

function calcularLogaritmos() {
  let errorFlag = true;
  let num;
  let parrafo = document.getElementById("act4");
  do {
    num = parseFloat(prompt("Introduzca un número:"));
    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>El logaritmo neperiano de ${num} es ${Math.log(
    num
  )}</p>`;
  parrafo.innerHTML += `<p>El logaritmo en base 2 de ${num} es ${
    Math.log(num) / Math.LN2
  }</p>`;
  parrafo.innerHTML += `<p>El logaritmo en base 10 de ${num} es ${
    Math.log(num) / Math.LN10
  }</p>`;
}

function anguloToRadianes() {
  let errorFlag = true;
  let angulo;
  let parrafo = document.getElementById("act5");
  do {
    angulo = parseFloat(prompt("Introduzca un ángulo (0-360):"));
    if (isNaN(angulo)) {
      alert("El ángulo debe ser un número.");
    } else if (angulo < 0 || angulo > 360) {
      alert("Los ángulos solo admiten valores entre 0 y 360");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>${angulo}º en radianes es igual a ${
    angulo / 180
  } radianes</p>`;
}

function calcularCosSinTan() {
  let errorFlag = true;
  let angulo;
  let parrafo = document.getElementById("act6");
  do {
    angulo = parseFloat(prompt("Introduzca un ángulo (0-360):"));
    if (isNaN(angulo)) {
      alert("El ángulo debe ser un número.");
    } else if (angulo < 0 || angulo > 360) {
      alert("Los ángulos solo admiten valores entre 0 y 360");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  let radianes = angulo / 180;
  parrafo.innerHTML += `<p>El seno de ${radianes} es igual a ${Math.sin(
    radianes
  ).toFixed(2)}</p>`;
  parrafo.innerHTML += `<p>El coseno de ${radianes} es igual a ${Math.cos(
    radianes
  ).toFixed(2)}</p>`;
  parrafo.innerHTML += `<p>La tangente de ${angulo} es igual a ${Math.tan(
    angulo
  ).toFixed(2)}</p>`;
}

function calcularArcCosSinTan() {
  let errorFlag = true;
  let radianes;
  let parrafo = document.getElementById("act7");
  do {
    radianes = parseFloat(prompt("Introduzca un radian(0-1):"));
    if (isNaN(radianes)) {
      alert("El radian debe ser un número.");
    } else if (radianes < 0 || radianes > 1) {
      alert("Los radianes solo admiten valores entre 0 y 1");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>El arcoseno de ${radianes} es igual a ${Math.asin(
    radianes
  ).toFixed(2)}</p>`;
  parrafo.innerHTML += `<p>El arcocoseno de ${radianes} es igual a ${Math.acos(
    radianes
  ).toFixed(2)}</p>`;
  parrafo.innerHTML += `<p>La arcotangente de ${radianes} es igual a ${Math.atan(
    radianes
  ).toFixed(2)}</p>`;
}

function calcularTechoCieloRedondeo() {
  let errorFlag = true;
  let num;
  let parrafo = document.getElementById("act8");
  do {
    num = parseFloat(prompt("Introduzca un número:"));
    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>El techo de ${num} es igual a ${Math.ceil(num)}</p>`;
  parrafo.innerHTML += `<p>El suelo de ${num} es igual a ${Math.floor(
    num
  )}</p>`;
  parrafo.innerHTML += `<p>El redondeo de ${num} es igual a ${Math.round(
    num
  )}</p>`;
}
