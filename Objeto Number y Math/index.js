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

function redondeoDecimal() {
  let errorFlag = true;
  let num;
  let parrafo = document.getElementById("act9");
  do {
    num = parseFloat(prompt("Introduzca un número:"));
    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  let num2 = Math.round(num * 10) / 10;
  parrafo.innerHTML += `<p>El redondeo decimal de ${num} es ${num2}</p>`;
}

function calcularMaxMin() {
  let arrayNum = [];
  let num, numMax, numMin;
  let parrafo = document.getElementById("act10");
  do {
    num = parseFloat(prompt("Introduzca un número (0 para salir):"));

    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      arrayNum.push(num);
    }
  } while (num !== 0);
  if (arrayNum.length > 0) {
    for (let i = 0; i < arrayNum.length; i++) {
      if (i == 0) {
        numMax = arrayNum[i];
        numMin = arrayNum[i];
      } else {
        numMax = Math.max(numMax, arrayNum[i]);
        numMin = Math.min(numMin, arrayNum[i]);
      }
    }
  }
  parrafo.innerHTML += `<p>Se han introducido los números ${arrayNum.toLocaleString()}</p>`;
  parrafo.innerHTML += `<p>El número más grande es ${numMax}</p>`;
  parrafo.innerHTML += `<p>El número más pequeño es ${numMin}</p>`;
}

function mostrarNumRandom() {
  let numA, numB, numC;
  let errorFlag = true;
  let parrafo = document.getElementById("act11");
  do {
    numA = parseInt(prompt("Introduzca un número:"));
    numB = parseInt(prompt("Introduzca un número:"));
    numC = parseInt(prompt("Introduzca un número:"));
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>Número aleatorio entre 0 y ${numA} = ${Math.round(
    Math.random() * numA
  )}</p>`;
  parrafo.innerHTML += `<p>Número aleatorio entre ${numB} y ${numC} = ${Math.round(
    numB + Math.random() * numC
  )}</p>`;
}

function notacionNum() {
  let num;
  let errorFlag = true;
  let parrafo = document.getElementById("act12");
  do {
    num = parseFloat(prompt("Introduzca un número:"));
    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);

  parrafo.innerHTML += `<p>${num} en base 2 = ${num.toString(
    2
  )}</p>   <p>${num} en base 8 = ${num.toString(8)}</p>
  <p>${num} en base 16 = ${num.toString(16)}</p>
  <p>${num} en notación exponencial = ${num.toExponential()} </p>
  <p>${num} con 10 dígitos decimales detrás del punto = ${num.toFixed(10)} </p>
  <p>${num} con número a la longitud 8 = ${num
    .toString()
    .padStart(8, "0")}</p>`;
}

function mostrarDinero() {
  let num;
  let errorFlag = true;
  let parrafo = document.getElementById("act13");
  do {
    num = parseFloat(prompt("Introduzca un número:"));
    if (isNaN(num)) {
      alert("Debe introducir un número");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  parrafo.innerHTML += `<p>${num} como euros: ${new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(num)}</p>
  <p>${num} como yenes: ${new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(num)}</p>
  <p>${num} con 3 decimales mínimo: ${num.toLocaleString(undefined, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 20, //Si no estableces máximo por defecto pone el minimo indicado
  })}</p>
   <p>${num} con 3 decimales mínimo y máximo: ${num.toLocaleString(undefined, {
    minimumFractionDigits: 3,
  })}</p>`;
}

function resolverEcuacion() {
  let numA, numB, numC;
  let errorFlag = true;
  let parrafo = document.getElementById("act14");
  do {
    numA = parseInt(prompt("Introduzca el nº a:"));
    numB = parseInt(prompt("Introduzca el nº b:"));
    numC = parseInt(prompt("Introduzca el nº c:"));
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      alert("Debes introducir números");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  if (numA == 0) {
    if (numB == 0) {
      parrafo.innerHTML +=
        numC == 0
          ? `<p>Infinitas soluciones. </p>`
          : `<p>No existen soluciones.</p>`;
    } else {
      let x = -numC / numB;
      parrafo.innerHTML += `La solución de la ecuación lineal es x = ${x}`;
    }
  } else {
    let discriminante = numB ** 2 - 4 * numA * numC;
    if (discriminante < 0) {
      parrafo.innerHTML += `<p>No existen soluciones reales.</p>`;
    } else {
      let x1 = (-numB + Math.sqrt(discriminante)) / (2 * numA);
      let x2 = (-numB - Math.sqrt(discriminante)) / (2 * numA);
      parrafo.innerHTML += `<p>Las soluciones de la ecuación son x1 = ${x1} y x2 = ${x2}</p>`;
    }
  }
}
function resolverSistema() {
  let a1, a2, b1, b2, c2;
  let errorFlag = true;
  let parrafo = document.getElementById("act15");
  do {
    a1 = parseFloat(prompt("Introduzca un número:"));
    a2 = parseFloat(prompt("Introduzca un número:"));
    b1 = parseFloat(prompt("Introduzca un número:"));
    b2 = parseFloat(prompt("Introduzca un número:"));
    c1 = parseFloat(prompt("Introduzca un número:"));
    c2 = parseFloat(prompt("Introduzca un número:"));
    if (
      isNaN(a1) ||
      isNaN(a2) ||
      isNaN(b1) ||
      isNaN(b2) ||
      isNaN(c1) ||
      isNaN(c2)
    ) {
      alert("Debes introducir números");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);
  let m = a1 * b2 - a2 * b1;
  if (m == 0) {
    parrafo.innerHTML += `<p>El sistema no tiene solución única (determinante cero)</p>`;
  } else {
    let mx = c1 * b2 - c2 * b1;
    let my = a1 * c2 - a2 * c1;
    let x = mx / m;
    let y = my / m;
    parrafo.innerHTML += `<p>Las soluciones son x = ${x} , y = ${y}</p>`;
  }
}

function seleccionarFigura() {
  let figura;
  let errorFlag = true;
  do {
    figura = prompt("Indique de que figura va a calcular área y volumen:");
    switch (figura) {
      case "cubo":
      case "Cubo":
      case "CUBO":
        errorFlag = false;
        calcularAreaVolumen(1);
        break;
      case "ortoedro":
      case "Ortoedro":
      case "ORTOEDRO":
        errorFlag = false;
        calcularAreaVolumen(2);
        break;
      case "esfera":
      case "Esfera":
      case "ESFERA":
        errorFlag = false;
        calcularAreaVolumen(3);
        break;
      case "cilindro":
      case "Cilindro":
      case "CILINDRO":
        errorFlag = false;
        calcularAreaVolumen(4);
        break;
      case "cono":
      case "Cono":
      case "CONO":
        errorFlag = false;
        calcularAreaVolumen(5);
        break;
      case "piramide":
      case "Piramide":
      case "PIRAMIDE":
        errorFlag = false;
        calcularAreaVolumen(6);
        break;
      default:
        alert("No se reconoce esa figura geométrica");
    }
  } while (errorFlag);
}
function calcularAreaVolumen(num) {
  let errorFlag = true;
  let area, volumen;
  let parrafo = document.getElementById("act16");
  switch (num) {
    case 1:
      let cuboA;
      do {
        cuboA = parseFloat(prompt("Introduzca el lado del cubo:"));
        if (isNaN(cuboA)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area = 6 * cuboA ** 2;
      volumen = cuboA ** 3;
      parrafo.innerHTML += `<p>Área del cubo = ${area}</p>
      <p>Volumen del cubo = ${volumen}</p>`;
      break;
    case 2:
      let ortoA, ortoB, ortoC;
      do {
        ortoA = parseFloat(prompt("Introduzca un número:"));
        ortob = parseFloat(prompt("Introduzca un número:"));
        ortoc = parseFloat(prompt("Introduzca un número:"));
        if (isNaN(ortoA) || isNaN(ortoB) || isNaN(ortoC)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area = 2 * (ortoA * ortoB + ortoB * ortoC + ortoA * ortoC);
      volumen = ortoA * ortoB * ortoC;
      parrafo.innerHTML += `<p>Área del ortoedro = ${area}</p>
      <p>Volumen del ortoedro = ${volumen}</p>`;
      break;
    case 3:
      let radioEsfera;
      do {
        radioEsfera = parseFloat(prompt("Introduzca un número:"));
        if (isNaN(radioEsfera)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area = 4 * Math.PI * radioEsfera ** 2;
      volumen = (4 / 3) * Math.PI * radioEsfera ** 3;
      parrafo.innerHTML += `<p>Área de la esfera = ${area}</p>
      <p>Volumen de la esfera = ${volumen}</p>`;
      break;
    case 4:
      let radioCilindro, alturaCilindro;
      do {
        radioCilindro = parseFloat(prompt("Introduzca un número:"));
        alturaCilindro = parseFloat(prompt("Introduzca un número:"));
        if (isNaN(radioCilindro) || isNaN(alturaCilindro)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area =
        2 *
        (Math.PI * radioCilindro ** 2 +
          Math.PI * radioCilindro * alturaCilindro);
      volumen = Math.PI * radioCilindro ** 2 * alturaCilindro;
      parrafo.innerHTML += `<p>Área del cilindro = ${area}</p>
      <p>Volumen del cilindro = ${volumen}</p>`;
      break;
    case 5:
      let radioCono, alturaCono;
      do {
        radioCono = parseFloat(prompt("Introduzca un número:"));
        alturaCono = parseFloat(prompt("Introduzca un número:"));
        if (isNaN(radioCono) || isNaN(alturaCono)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area =
        Math.PI * Math.sqrt(radioCono ** 2 + alturaCono ** 2) * radioCono +
        Math.PI * radioCono ** 2;
      volumen = (1 / 3) * Math.PI * radioCono ** 2 * alturaCono;
      parrafo.innerHTML += `<p>Área del cono = ${area}</p>
      <p>Volumen del cono = ${volumen}</p>`;
      break;
    case 6:
      let ladoBase, alturaPiramide;
      do {
        ladoBase = parseFloat(prompt("Introduzca un número:"));
        alturaPiramide = parseFloat(prompt("Introduzca un número:"));
        if (isNaN(ladoBase) || isNaN(alturaPiramide)) {
          alert("Debes introducir un número");
        } else {
          errorFlag = false;
        }
      } while (errorFlag);
      area =
        ladoBase ** 2 +
        2 * ladoBase * Math.sqrt((ladoBase / 2) ** 3 + alturaPiramide ** 2);
      volumen = (1 / 3) * (2 * ladoBase) * alturaPiramide;
      parrafo.innerHTML += `<p>Área de la pirámide = ${area}</p>
      <p>Volumen de la pirámide = ${volumen}</p>`;
      break;
  }
}

function mostrarPH() {
  let iones;
  let errorFlag = true;
  let parrafo = document.getElementById("act17");
  do {
    iones = parseFloat(prompt("Introduzca el nº de iones de hidrógeno:"));
    if (isNaN(iones) || iones <= 0) {
      alert("Debes introducir un número positivo.");
    } else {
      errorFlag = false;
    }
  } while (errorFlag);

  let pH = -Math.log10(iones);
  pH = Math.min(14, Math.max(0, pH));
  const pHredondeado = Math.round(pH);

  parrafo.innerHTML += `
    <p>El pH es ${pHredondeado}</p>
    <label for="phBar">Nivel:</label>
    <input type="range" id="phBar" min="0" max="14" step="1" list="ticks" value="${pHredondeado}">
    <div id="phValue">pH ${pHredondeado}</div>
  `;

  const colores = [
    "#ff0000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ffff00",
    "#ccff00",
    "#00ff00",
    "#00ff99",
    "#00ffff",
    "#0099ff",
    "#0066ff",
    "#0000ff",
    "#6600ff",
    "#9900ff",
  ];
  const etiquetas = [
    "Extremadamente ácido",
    "Muy ácido",
    "Ácido fuerte",
    "Ácido moderado",
    "Ácido suave",
    "Ligeramente ácido",
    "Casi neutro",
    "Neutro",
    "Ligeramente básico",
    "Básico suave",
    "Básico moderado",
    "Básico fuerte",
    "Muy básico",
    "Extremadamente básico",
    "Máximo alcalino",
  ];

  const phSlider = document.getElementById("phBar");
  const phValue = document.getElementById("phValue");

  function actualizarColor(val) {
    phSlider.style.accentColor = colores[val];
    phValue.textContent = `pH ${val} (${etiquetas[val]})`;
    phValue.style.color = colores[val];
  }

  actualizarColor(pHredondeado);

  phSlider.addEventListener("input", function (e) {
    const val = parseInt(e.target.value);
    actualizarColor(val);
  });
}
