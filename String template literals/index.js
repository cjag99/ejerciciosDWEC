function mostrarUsuarios() {
  let datosUsuarios = [
    [
      "Carlos Méndez",
      32,
      "Valencia",
      ["ciclismo", "fotografía", "gastronomía"],
    ],
    ["Diego Fernández", 34, "Buenos Aires", ["música", "senderismo", "cocina"]],
    ["Ana Torres", 26, "Bogotá", ["lectura", "cine", "arte"]],
  ];
  for (let i = 0; i < datosUsuarios.length; i++) {
    let nombre = datosUsuarios[i][0];
    let edad = datosUsuarios[i][1];
    let ciudad = datosUsuarios[i][2];
    let intereses = datosUsuarios[i][3];
    let tarjetaUsuario = `
    <div class="tarjeta">
    <h2>${nombre}</h2>
    <p>Edad: ${edad}</p>
    <p>Ciudad: ${ciudad}</p>
    <h4>Intereses:</h4>
    <ul>
    ${intereses.map((interes) => `<li>${interes}</li>`).join("")}
    </ul>
    </div>
    `;
    document.getElementById("act1").innerHTML += tarjetaUsuario;
  }
}

function formatearDescripcion() {
  let producto = "auriculares inalámbricos";
  let precio = 59.99;
  let marca = "SoundMax";
  let descripcion = `<div><p>Los ${producto} de la marca ${marca} cuestan ${precio}€</p></div>`;
  let parrafo = document.getElementById("act2");
  parrafo.innerHTML += descripcion;
  let palabras = descripcion.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toLocaleUpperCase() + palabras[i].slice(1);
  }
  let descripcion2 = palabras.join(" ");
  parrafo.innerHTML += `<div><p>${descripcion2}</p></div>`;
  let descripicion3 = descripcion.replace("€", "euros");
  parrafo.innerHTML += `<div><p>${descripicion3}</p></div>`;
}

function crearPlantillaEmail() {
  let nombre = " juan pérez ";
  let producto = "Teclado mecánico RGB";
  let fecha = "09/10/2025";
  nombre.trim();
  let plantilla = `<div><p>Hola ${nombre}, tu pedido del producto ${producto} se enviará el ${fecha}.</p></div>`;
  let parrafo = document.getElementById("act3");
  parrafo.innerHTML += plantilla;
  let palabras = nombre.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toLocaleUpperCase() + palabras[i].slice(1);
  }
  let plantilla2 = `<div><p>Hola ${palabras.join(
    " "
  )}, tu pedido del producto ${producto} se enviará el ${fecha}.</p></div>`;
  parrafo.innerHTML += plantilla2;
  parrafo.innerHTML += plantilla.toLocaleUpperCase();
}

function generarLista() {
  let usuarios = [" ana ", "PEDRO", "maria "];
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i] =
      usuarios[i].trim().charAt(0).toUpperCase() +
      usuarios[i].trim().slice(1).toLowerCase();
  }
  let parrafo = document.getElementById("act4");
  let lista = `<div><ul>`;
  for (const usuario of usuarios) {
    lista += `<li>${usuario.padEnd(5, "*")}</li>`;
  }
  lista += `</ul></div>`;
  parrafo.innerHTML += lista;
}

function analizarTexto() {
  let nombre = "Lucía";
  let hobby = "leer libros de ciencia ficción";
  let parrafo = document.getElementById("act5");
  let mensaje = `<p>A ${nombre} le encanta ${hobby}.</p>`;
  parrafo.innerHTML += mensaje;
  let mensaje2 = `<p>El mensaje tiene una longitud de ${mensaje.length} caracteres</p>`;
  parrafo.innerHTML += mensaje2;
  let mensaje3;
  if (mensaje.includes("ficción")) {
    mensaje3 = `<p>El mensaje contiene la palabra ficción.</p>`;
  } else {
    mensaje3 = `<p>El mensaje no contiene la palabra ficción.</p>`;
  }
  parrafo.innerHTML += mensaje3;
  let mensaje4 = mensaje.replace("ciencia ficción", "aventuras");
  parrafo.innerHTML += mensaje4;
  let mensaje5 = `<p>A ${nombre} le encanta ${hobby.toLocaleLowerCase()}.</p>`;
  let mensaje6 = `<p>A ${nombre} le encanta ${hobby.toLocaleUpperCase()}.</p>`;
  let mensaje7 = mensaje.toLocaleUpperCase();
  parrafo.innerHTML += mensaje5;
  parrafo.innerHTML += mensaje6;
  parrafo.innerHTML += mensaje7;
}

function generarPerfil() {
  const usuario = {
    nombre: "Beatriz",
    descripcion:
      "Apasionada del desarrollo web, la inteligencia artificial y los videojuegos.",
  };
  let parrafo = document.getElementById("act6");
  let perfil = `<p>Perfil de ${usuario.nombre}: ${usuario.descripcion}`;
  parrafo.innerHTML += perfil;
  let perfil2;
  if (usuario.descripcion.length > 50) {
    usuario.descripcion = usuario.descripcion.slice(0, 50).concat("...");
    perfil2 = `<p>Perfil de ${usuario.nombre}: ${usuario.descripcion}`;
  }
  parrafo.innerHTML += perfil2;
}
