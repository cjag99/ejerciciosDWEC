function generarArray(size, maxValor) {
  let array = new Array(size);
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.round(maxValor * Math.random() + 1);
  }
  return array;
}
function maxArray(array) {
  let max = array[0];
  for (const num of array) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}
function minArray(array) {
  let min = array[0];
  for (const num of array) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}

function mediaArray(array) {
  let suma = 0;
  for (const num of array) {
    suma += num;
  }
  return suma / array.length;
}
function ejercicio1() {
  let array = generarArray(50, 100);
  let numMax = maxArray(array);
  let numMin = minArray(array);
  let media = mediaArray(array);
  let parrafo = document.getElementById("act1");
  parrafo.innerHTML = "";
  parrafo.innerHTML += `<p>Número mayor: ${numMax}</p>
    <p>Número menor: ${numMin}</p>
    <p>Media: ${media}</p>`;
}
function moda10(array) {
  let repeticiones = new Array(10).fill(0);

  for (const num of array) {
    repeticiones[num - 1]++;
  }
  let moda = 1;
  let cont = repeticiones[0];
  for (const num in repeticiones) {
    if (cont < repeticiones[num]) {
      cont = repeticiones[num];
      moda = parseInt(num) + 1;
    }
  }
  return moda;
}
function ordenarArray(array) {
  let copiaArray = array.slice();
  for (let i = 0; i < copiaArray.length; i++) {
    for (let j = 0; j < copiaArray.length - 1; j++) {
      if (copiaArray[j + 1] < copiaArray[j]) {
        let copiaPos = copiaArray[j + 1];
        copiaArray[j + 1] = copiaArray[j];
        copiaArray[j] = copiaPos;
      }
    }
  }
  return copiaArray;
}
function getMediana(array) {
  let ordenado = ordenarArray(array);
  let mediana = 0;
  let mitad = Math.floor(ordenado.length / 2);

  if (ordenado.length % 2 == 0) {
    mediana =
      (ordenado[ordenado.length / 2 - 1] + ordenado[ordenado.length / 2]) / 2;
  } else {
    mediana = ordenado[mitad];
  }
  return mediana;
}
function ejercicio2() {
  let array = generarArray(50, 10);
  let moda = moda10(array);
  let mediana = getMediana(array);
  let parrafo = document.getElementById("act2");
  parrafo.innerHTML = "";
  parrafo.innerHTML += array.valueOf();
  parrafo.innerHTML += "<br>La moda del array es " + moda + "<br>";
  parrafo.innerHTML += "la mediana del array es " + mediana;
}

function ejercicio3() {
  let ventana = window.open("", "ejercicio3", "width=100", "height= 600");
  ventana.document.write(`<!DOCTYPE html><html >
<head> <meta charset="UTF-8" />
<title>Ejercicio Arrays</title> </head>
<body>
<br><h2> Ejercicio Arrays </h2>
<p> Array X <input type="text" size ="60" name="caja1" value ="X1,X2,X3,X4,X5"> </p>
<p> <input type="button" name="button" value="Add Array" onclick="addArrays();" > </p>
<hr> <p id="explica"></p> <h2 id="tamano"></h2>
<br>
<p>Este script se dedica a insertar en un array elementos de 5 en 5 y mostrar por pantalla su tamaño</p>
<script language="JavaScript">
var arrayX= new Array();
var arraymix= new Array();
function addArrays() {
arrayXstr = document.getElementsByName("caja1")[0].value;
arrayX=arrayXstr.split(',');
lX =arrayX.length;
for (var i=0; i< lX;i++ ) { arraymix.push(arrayX[i]);}
contenidostr = "El contenido del array es " + arraymix.join('-');
tamanostr = "El tamano del array es " + arraymix.length;
//alert(contenidostr);
document.getElementById("explica").innerHTML=contenidostr ;
document.getElementById("tamano").innerHTML=tamanostr;
}
</script>
</body>
</html>`);
  ventana.document.close();
}

function ejercicio4() {
  let ventana = window.open("", "ejercicio4", "width = 800", "height = 600");
  ventana.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ejercicio Arrays</h1>
    <form action="#">
      <label for="array">etiqueta 1:</label>
      <input type="text" name="texto" id="elemento" />
      <button type="button" onclick="addElement()">Add</button>
    </form>
    <hr />
    <p id="content"></p>
    <h3 id="size"></h3>
    <script>
      const array = new Array();
      function addElement() {
        let elemento = document.getElementById("elemento");
        let content = document.getElementById("content");
        let size = document.getElementById("size");
        array.push(elemento.value);
        content.innerHTML = "";
        size.innerHTML = "";
        content.innerHTML += "El contenido del array es " + array.valueOf();
        size.innerHTML += "El tamaño del array es de " + array.length;
      }
    </script>
  </body>
</html>
`);
  ventana.document.close();
}

function ejercicio5() {
  let ventana = window.open("", "ejercicio4", "width = 800", "height = 600");
  ventana.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ejercicio Arrays</h1>
    <form action="#">
      <label for="array">etiqueta 1:</label>
      <input type="text" name="texto" id="elemento" />
      <button type="button" onclick="addElement()">Add</button>
    </form>
    <hr />
    <p id="content"></p>
    <h3 id="size"></h3>
    <script>
      const array = new Array();
      function addElement() {
        let elemento = document.getElementById("elemento");
        let content = document.getElementById("content");
        let size = document.getElementById("size");
        array.push(elemento.value);
        array.sort();
        content.innerHTML = "";
        size.innerHTML = "";
        content.innerHTML += "El contenido del array es " + array.valueOf();
        size.innerHTML += "El tamaño del array es de " + array.length;
      }
    </script>
  </body>
</html>
`);
  ventana.document.close();
}

function ejercicio6() {
  let ventana = window.open("", "ejercicio6", "width=800", "height=600");
  ventana.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ejercicio Arrays</h1>
    <form action="#">
      <label for="arrayNum">Introduce los enteros separados por comas</label>
      <br />
      <input type="text" name="arrayNum" id="arrayNum" />
      <button type="button" onclick="createArray()">Cargar ejemplo</button>
      <br />
      <button type="button" onclick="realizarCalculos()">Calcular</button>
      <button type="reset">Reiniciar</button>
    </form>
    <hr />
    <p id="operations"></p>
    <script>
      let arrayNum = [];
      function createArray() {
        let cadena = document.getElementById("arrayNum").value;
        arrayNum = cadena.split(",");
        for (const key in arrayNum) {
          arrayNum[key] = parseInt(arrayNum[key]);
        }
        console.log("Array cargado:", arrayNum);
      }
      function calcularSuma(array) {
        let suma = 0;
        for (const num of array) {
          suma += num;
        }
        return suma;
      }
      function calcularMedia(array) {
        let media = calcularSuma(array) / array.length;
        return media;
      }
      function numMaxArray(array) {
        let max = array[0];
        for (const num of array) {
          if (max < num) {
            max = num;
          }
        }
        return max;
      }
      function numMinArray(array) {
        let min = array[0];
        for (const num of array) {
          if (min > num) {
            min = num;
          }
        }
        return min;
      }
      function realizarCalculos() {
        let suma = calcularSuma(arrayNum);
        let media = calcularMedia(arrayNum);
        let numMax = numMaxArray(arrayNum);
        let numMin = numMinArray(arrayNum);
        let operations = document.getElementById("operations");
        operations.innerHTML = "";
        operations.innerHTML += "La suma es " + suma + "<br>";
        operations.innerHTML += "La media es " + media + "<br>";
        operations.innerHTML += "El mayor es " + numMax + "<br>";
        operations.innerHTML += "El menor es " + numMin;
      }
    </script>
  </body>
</html>
`);
  ventana.document.close();
}

function ejercicio7() {
  let ventana = window.open("", "ejercicio7", "width=800", "height=600");
  ventana.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ejercicio Arrays</h1>
    <form action="#">
      <h3>Debe introducir los elementos separados por una coma</h3>
      <label for="array1">Array1</label>
      <input type="text" name="array1" id="array1" required />
      <br />
      <label for="array2">Array2</label>
      <input type="text" name="array2" id="array2" required />
      <br />
      <button type="button" onclick="createArrayMix()">Mezclar Arrays</button>
    </form>
    <hr />
    <p id="content"></p>
    <h3 id="size"></h3>
    <script>
      function createArrayMix() {
        let array1 = document.getElementById("array1").value.split(",");
        let array2 = document.getElementById("array2").value.split(",");
        let array = new Array();
        let content = document.getElementById("content");
        let size = document.getElementById("size");
        for (const ind in array1) {
          array.push(array1[ind]);
          array.push(array2[ind]);
        }
        content.innerHTML = "";
        size.innerHTML = "";
        content.innerHTML +=
          "El contenido del array es " + array.valueOf() + "<br>";
        size.innerHTML += "El tamaño del array es " + array.length;
      }
    </script>
  </body>
</html>
`);
  ventana.document.close();
}

function ejercicio8() {
  let ventana = window.open("", "ejercicio8", "width=800", "height=600");
  ventana.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ejercicio Arrays</h1>
    <form action="#">
      <h3>Debe introducir los elementos separados por una coma</h3>
      <label for="array1">Array1</label>
      <input type="text" name="array1" id="array1" required />
      <br />
      <label for="array2">Array2</label>
      <input type="text" name="array2" id="array2" required />
      <br />
      <label for="array3">Array3</label>
      <input type="text" name="array3" id="array3" required />
      <button type="button" onclick="createArrayMix()">Mezclar Arrays</button>
    </form>
    <hr />
    <p id="content"></p>
    <h3 id="size"></h3>
    <script>
      function createArrayMix() {
        let array1 = document.getElementById("array1").value.split(",");
        let array2 = document.getElementById("array2").value.split(",");
        let array3 = document.getElementById("array3").value.split(",");
        let array = new Array();
        let content = document.getElementById("content");
        let size = document.getElementById("size");
        for (const ind in array1) {
          array.push(array1[ind]);
          if (ind < array2.length) {
            array.push(array2[ind]);
          }
          if (ind < array3.length) {
            array.push(array3[ind]);
          }
        }
        content.innerHTML = "";
        size.innerHTML = "";
        content.innerHTML +=
          "El contenido del array es " + array.valueOf() + "<br>";
        size.innerHTML += "El tamaño del array es " + array.length;
      }
    </script>
  </body>
</html>
`);
  ventana.document.close();
}
