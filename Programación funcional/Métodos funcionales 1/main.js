//! Ejercicio 1: Inventario de productos en una tienda
console.log("EJERCICIO 1");
let idTienda = Array.from("1,2,3,4,5".split(","), Number);
console.log(idTienda);
idTienda.fill(7, 2, 4);
console.log(idTienda);
idTienda.unshift(0, 0);
console.log(idTienda);
idTienda.pop();
console.log(idTienda);
let nuevoLote = idTienda.concat([10, 20, 30]);
console.log(nuevoLote);

//! Ejercicio 2: Lista de empleados
console.log("EJERCICIO 2");
let iniciales = Array.from(
  "Ana,Bruno,Carlos,Daniela,Ernesto,Fernanda".split(","),
  (string) => string[0].toLocaleLowerCase()
);
console.log(iniciales);
console.log(iniciales.at(2));
console.log(iniciales.at(-1));
let nuevaPlantilla = iniciales.with(1, "X");
console.log(nuevaPlantilla);
nuevaPlantilla.shift();
console.log(nuevaPlantilla);
nuevaPlantilla.push("Y", "Z");
console.log(nuevaPlantilla);

//! Ejercicio 3: Gestión de calificaciones
console.log("EJERCICIO 3");
let calificaciones = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(calificaciones);
calificaciones.fill(99, 4, 8);
console.log(calificaciones);
calificaciones.unshift(5, 6, 7);
console.log(calificaciones);
calificaciones.shift();
console.log(calificaciones);
calificaciones.pop();
console.log(calificaciones);

//! Ejercicio 4: Precio de productos
console.log("EJERCICIO 4");
let precios = [100, 200, 300, 400];
console.log(precios);
precios.shift();
console.log(precios);
precios.push(500, 600);
console.log(precios);
let nuevosPrecios = precios.with(2, 999);
console.log(nuevosPrecios);
let preciosFinal = nuevosPrecios.concat([700, 800, 900]);
console.log(preciosFinal);

//! Ejercicio 5: Modificación de texto en una base de datos
console.log("EJERCICIO 5");
let texto = Array.from("hello world");
console.log(texto);
console.log(texto.at(4));
console.log(texto.at(-1));
texto.unshift("#");
console.log(texto);
texto.fill("*", texto.indexOf(" "), texto.indexOf(" ") + 1);
console.log(texto);
let nuevoTexto = texto.concat(["!", "!", "!"]);
console.log(nuevoTexto);
