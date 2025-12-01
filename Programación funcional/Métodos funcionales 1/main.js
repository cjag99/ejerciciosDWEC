const { act } = require("react");

//! Ejercicio 1: Inventario de productos en una tienda
function inventarioProductos() {
  let idTienda = Array.from("1,2,3,4,5".split(","), Number);
  let act1 = document.getElementById("act1");
  act1.innerHTML = `<p>ID de productos: [${idTienda}]</p>`;
  idTienda.fill(7, 2, 4);
  act1.innerHTML += `<p>Devolución de productos rotos [${idTienda}]</p>`;
  idTienda.unshift(0, 0);
  act1.innerHTML += `<p>Nuevos productos recibidos [${idTienda}]</p>`;
  idTienda.pop();
  act1.innerHTML += `<p>Producto vendido, inventario actualizado [${idTienda}]</p>`;
  let nuevoLote = idTienda.concat([10, 20, 30]);
  act1.innerHTML += `<p>Nuevo lote recibido [${nuevoLote}]</p>`;
}

//! Ejercicio 2: Lista de empleados
function empleados() {
  let iniciales = Array.from(
    "Ana,Bruno,Carlos,Daniela,Ernesto,Fernanda".split(","),
    (string) => string[0].toLocaleLowerCase()
  );
  let act2 = document.getElementById("act2");
  act2.innerHTML = `<p>Iniciales de empleados: [${iniciales}]</p>`;
  act2.innerHTML += `<p>Inicial del tercer empleado: [${iniciales.at(2)}]</p>`;
  act2.innerHTML += `<p>Inicial del último empleado: [${iniciales.at(-1)}]</p>`;
  let nuevaPlantilla = iniciales.with(1, "X");
  act2.innerHTML += `<p>Modificación de la inicial del segundo empleado: [${nuevaPlantilla}]</p>`;
  nuevaPlantilla.shift();
  act2.innerHTML += `<p>Empleado con inicial eliminada: [${nuevaPlantilla}]</p>`;
  nuevaPlantilla.push("Y", "Z");
  act2.innerHTML += `<p>Incorporación de nuevos empleados: [${nuevaPlantilla}]</p>`;
}
//! Ejercicio 3: Gestión de calificaciones
function calificaciones() {
  let calificaciones = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let act3 = document.getElementById("act3");
  act3.innerHTML = `<p>Calificaciones iniciales: [${calificaciones}]</p>`;
  calificaciones.fill(99, 4, 8);
  act3.innerHTML += `<p>Calificaciones ajustadas: [${calificaciones}]</p>`;
  calificaciones.unshift(5, 6, 7);
  act3.innerHTML += `<p>Calificaciones con nuevos estudiantes: [${calificaciones}]</p>`;
  calificaciones.shift();
  act3.innerHTML += `<p>Calificaciones después de eliminar el primer estudiante: [${calificaciones}]</p>`;
  calificaciones.pop();
  act3.innerHTML += `<p>Calificaciones después de eliminar el último estudiante: [${calificaciones}]</p>`;
}

//! Ejercicio 4: Precio de productos
function productos() {
  let precios = [100, 200, 300, 400];
  let act4 = document.getElementById("act4");
  act4.innerHTML = `<p>Precios iniciales: [${precios}]</p>`;
  precios.push(500, 600);
  act4.innerHTML += `<p>Precios después de agregar nuevos productos: [${precios}]</p>`;
  precios.shift();
  act4.innerHTML += `<p>Precios después de eliminar el primer producto: [${precios}]</p>`;
  let nuevosPrecios = precios.with(2, 999);
  act4.innerHTML += `<p>Precios después de modificar el tercer producto: [${nuevosPrecios}]</p>`;
  let preciosFinal = nuevosPrecios.concat([700, 800, 900]);
  act4.innerHTML += `<p>Precios finales después de combinar con nuevos precios: [${preciosFinal}]</p>`;
}

//! Ejercicio 5: Modificación de texto en una base de datos
function generarTexto() {
  let texto = Array.from("hello world");
  let act5 = document.getElementById("act5");
  act5.innerHTML = `<p>Letras iniciales: [${texto}]</p>`;
  act5.innerHTML += `<p>Quinta letra: [${texto.at(4)}]</p>`;
  act5.innerHTML += `<p>Última letra: [${texto.at(-1)}]</p>`;
  texto.unshift("#");
  act5.innerHTML += `<p>Después de agregar un carácter al inicio: [${texto}]</p>`;
  texto.fill("*", texto.indexOf(" "), texto.indexOf(" ") + 1);
  act5.innerHTML += `<p>Después de reemplazar el espacio con '*': [${texto}]</p>`;
  let nuevoTexto = texto.concat(["!", "!", "!"]);
  act5.innerHTML += `<p>Texto final con exclamaciones: [${nuevoTexto}]</p>`;
}

//! Ejercicio 6: Gestión de pedidos
function gestionarPedidos() {
  let pedidos = [101, 102, 103, 104, 105];
  let act6 = document.getElementById("act6");
  act6.innerHTML = `<p>Pedidos iniciales: [${pedidos}]</p>`;
  act6.innerHTML += `<p>Tercer pedido: [${pedidos.at(2)}]</p>`;
  act6.innerHTML += `<p>Último pedido: [${pedidos.at(-1)}]</p>`;
  let nuevoPedidos = pedidos.with(0, 0); // Modificar el primer pedido a 0
  act6.innerHTML += `<p>Después de modificar el primer pedido: [${nuevoPedidos}]</p>`;
  nuevoPedidos.fill(8, 1, 4); // Marcar pedidos del 2 al 4 como procesados (8)
  act6.innerHTML += `<p>Después de marcar pedidos procesados: [${nuevoPedidos}]</p>`;
  nuevoPedidos.shift(); // Eliminar el primer pedido
  nuevoPedidos.pop(); // Eliminar el último pedido
  act6.innerHTML += `<p>Después de eliminar el primer y último pedido: [${nuevoPedidos}]</p>`;
  nuevoPedidos.push(7, 8, 9); // Agregar nuevos pedidos
  act6.innerHTML += `<p>Después de agregar nuevos pedidos: [${nuevoPedidos}]</p>`;
}
