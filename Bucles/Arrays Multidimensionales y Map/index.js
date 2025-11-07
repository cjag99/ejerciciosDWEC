function mostrarNombresListaOl() {
  let datos = new Array();
  datos[0] = new Array("Cristina", "Seguridad", 24);
  datos[1] = new Array("Catalina", "Bases de Datos", 17);
  datos[2] = new Array("Vieites", "Sistemas Informáticos", 28);
  datos[3] = new Array("Benjamin", "Redes", 26);
  function sacarNombre(registro) {
    return registro[0];
  }
  let parrafo = document.getElementById("act1");
  parrafo.innerHTML +=
    "<ol><li>" + datos.map(sacarNombre).join("</li><li>") + "</li></ol>";
}
