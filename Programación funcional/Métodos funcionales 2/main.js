//! ACT 1: Gestion de datos en una tabla
function trabajarTabla() {
  let tabla = [10, 20, 30, 40, 50];
  let act1 = document.getElementById("act1");
  act1.innerHTML += `<p>Contenido inicial de la tabla: [${tabla}]</p>`;
  let tablaNueva = tabla.copyWithin(0, 2, 4); // Copia los elementos desde el índice 2 hasta el 4 al inicio
  act1.innerHTML += `<p>Tabla después de copyWithin(0, 2, 4): [${tablaNueva}]</p>`;
  tablaNueva.reverse();
  act1.innerHTML += `<p>Tabla después de reverse(): [${tablaNueva}]</p>`;
  let tablaFinal = tablaNueva.slice(0, 3);
  act1.innerHTML += `<p>Tabla después de slice(0, 3): [${tablaFinal}]</p>`;
}

//! ACT 2: Gestión de productos en un catálogo
function catalogoProductos() {
  let catalogo = ["manzana", "naranja", "plátano"];
  let act2 = document.getElementById("act2");
  act2.innerHTML += `<p>Catálogo inicial: [${catalogo}]</p>`;
  let indices = catalogo.entries();
  act2.innerHTML += `<p>Índices y productos en el catálogo:</p>`;
  for (let [index, producto] of indices) {
    act2.innerHTML += `<p>Producto ${index}: ${producto}</p>`;
  }
  let claves = Array.from(catalogo.keys());
  act2.innerHTML += `<p>Claves de productos: [${claves}]</p>`;
}

//! ACT 3: Filtrar y ordenar un registro de estudiantes
function registroEstudiantes() {
  let calificaciones = [85, 75, 95, 65, 90];
  let act3 = document.getElementById("act3");
  act3.innerHTML += `<p>Calificaciones iniciales: [${calificaciones}]</p>`;
  let iteradorCalificaciones = calificaciones.values(); // Obtener solo los valores
  act3.innerHTML += `<p>Valores de las calificaciones: [${Array.from(
    iteradorCalificaciones
  )}]</p>`;
  let calificacionesOrdenadas = calificaciones.sort((a, b) => b - a); // Ordenar de mayor a menor
  act3.innerHTML += `<p>Calificaciones ordenadas de mayor a menor: [${calificacionesOrdenadas}]</p>`;
  let calificacionesAltas = calificacionesOrdenadas.slice(0, 3); // Obtener las tres calificaciones más altas
  act3.innerHTML += `<p>Las tres calificaciones más altas: [${calificacionesAltas}]</p>`;
}

//! ACT 4: Gestión de pedidos en una tienda en línea
function gestionPedidos() {
  let pedidos = [1003, 1001, 1002, 1005, 1004];
  let act4 = document.getElementById("act4");
  act4.innerHTML += `<p>Números de pedidos iniciales: [${pedidos}]</p>`;
  let pedidosOrdenados = pedidos.sort((a, b) => a - b); // Ordenar en orden ascendente
  act4.innerHTML += `<p>Pedidos ordenados en orden ascendente: [${pedidosOrdenados}]</p>`;
  let pedidosInvertidos = pedidosOrdenados.reverse(); // Invertir el orden para mostrar en orden descendente
  act4.innerHTML += `<p>Pedidos en orden descendente (priorizando los más recientes): [${pedidosInvertidos}]</p>`;
  let pedidosPrioritarios = pedidosInvertidos.slice(0, 3); // Obtener los tres primeros pedidos prioritarios
  act4.innerHTML += `<p>Los tres pedidos prioritarios: [${pedidosPrioritarios}]</p>`;
}

//! ACT 5: Reorganizar y filtrar una lista de empleados
function reorganizarEmpleados() {
  let empleados = [300, 200, 400, 100];
  let act5 = document.getElementById("act5");
  act5.innerHTML += `<p>IDs de empleados iniciales: [${empleados}]</p>`;
  let empleadosOrdenados = empleados.toSorted((a, b) => a - b); // Ordenar en orden ascendente sin modificar el original
  act5.innerHTML += `<p>Empleados ordenados en orden ascendente: [${empleadosOrdenados}]</p>`;
  let empleadosInvertidos = empleadosOrdenados.toReversed(); // Invertir el orden
  act5.innerHTML += `<p>Empleados invertidos: [${empleadosInvertidos}]</p>`;
  let empleadosRecientes = empleadosInvertidos.slice(0, 2); // Seleccionar los dos primeros empleados más recientes
  act5.innerHTML += `<p>Empleados más recientes: [${empleadosRecientes}]</p>`;
}

//! ACT 6: Selección de artículos destacados en una tienda
function seleccionarArticulos() {
  let precios = [50, 30, 20, 10, 40];
  let act6 = document.getElementById("act6");
  act6.innerHTML += `<p>Precios iniciales de artículos: [${precios}]</p>`;
  let nuevosPrecios = precios.copyWithin(3, 1, 3); // Copiar el precio del índice 2 al índice 1
  act6.innerHTML += `<p>Precios después de copyWithin(3, 1, 3): [${nuevosPrecios}]</p>`;
  precios.sort((a, b) => a - b); // Ordenar en orden ascendente
  act6.innerHTML += `<p>Precios ordenados en orden ascendente: [${precios}]</p>`;
  let preciosDestacados = precios.slice(0, 3); // Seleccionar los tres precios más bajos
  act6.innerHTML += `<p>Precios destacados (los tres más bajos): [${preciosDestacados}]</p>`;
}

//! ACT 7: Mostrar claves y valores de configuraciones del sistema
function mostrarConfiguraciones() {
  let configuraciones = ["pantalla completa", "sonido activado", "modo oscuro"];
  let act7 = document.getElementById("act7");
  act7.innerHTML += `<p>Configuraciones del sistema: [${configuraciones}]</p>`;
  let claves = configuraciones.keys();
  let valores = configuraciones.values();
  act7.innerHTML += `<p>Claves y valores de las configuraciones:</p>`;
  for (let [clave, valor] of configuraciones.entries()) {
    act7.innerHTML += `<p>Clave ${clave}: ${valor}</p>`;
  }
}

//! ACT 8: Reorganizar comentarios de un blog
function reorganizarComentarios() {
  let comentarios = [5003, 5001, 5002, 5005, 5004];
  let act8 = document.getElementById("act8");
  act8.innerHTML += `<p>IDs de comentarios iniciales: [${comentarios}]</p>`;
  let comentariosOrdenados = comentarios.toSorted((a, b) => a - b); // Ordenar en orden ascendente sin modificar el original
  act8.innerHTML += `<p>Comentarios ordenados en orden ascendente: [${comentariosOrdenados}]</p>`;
  comentariosOrdenados.reverse(); // Invertir el orden
  act8.innerHTML += `<p>Comentarios en orden descendente (más recientes primero): [${comentariosOrdenados}]</p>`;
  let comentariosRecientes = comentariosOrdenados.slice(0, 2); // Seleccionar los dos últimos comentarios publicados
  act8.innerHTML += `<p>Comentarios más recientes: [${comentariosRecientes}]</p>`;
}
