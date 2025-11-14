import { LOTRCharacter } from "./LOTRCharacter.js";
// * Initialized LOTR Characters Set List
const LOTRSet = new Set();
const Main = {
  LOTRSet,

  getCharacterForm(idNombre, idFaccion, idRetrato = "cogerId") {
    let nombre = document.getElementById(idNombre).value;
    let faccion = document.getElementById(idFaccion).value;
    let retrato = document.getElementById(idRetrato).value;
    return retrato != null && retrato != ""
      ? new LOTRCharacter(nombre, faccion, retrato)
      : new LOTRCharacter(nombre, faccion);
  },
  async generateSampleCharacters() {
    try {
      const response = await fetch("./characters.json");
      const data = await response.json();
      const personajes = data.map(
        (e) => new LOTRCharacter(e.nombre, e.faccion, e.retrato)
      );
      const seleccionados = new Set();
      while (seleccionados.size < 5) {
        const numR = Math.floor(Math.random() * personajes.length);
        seleccionados.add(personajes[numR]);
      }
      seleccionados.forEach((e) => this.addCharacter(e));
    } catch (error) {
      console.log(error);
    }
  },
  addCharacter(nuevoCharacter) {
    if (this.characterExists(nuevoCharacter)) {
      console.log("No se ha añadido el personaje porque ya está en la lista");
    } else {
      this.LOTRSet.add(nuevoCharacter);
      console.log(
        `${nuevoCharacter.nombre} ha sido añadido al conjunto con éxito`
      );
    }
  },
  showCharacters() {
    let parrafo = document.getElementById("listaChars");
    let characters = "";
    LOTRSet.forEach((e) => (characters += e.toString() + "<br>"));
    parrafo.innerHTML = characters;
  },
  characterExists(nuevoCharacter) {
    let alreadyExists = false;

    for (const character of this.LOTRSet) {
      if (character.compareCharacters(nuevoCharacter)) {
        alreadyExists = true;
        break;
      }
    }
    return alreadyExists;
  },
  showCharacterExistence(nuevoCharacter) {
    let parrafo = document.getElementById("verificarPersonaje");
    parrafo.innerHTML = this.characterExists(nuevoCharacter)
      ? `${nuevoCharacter.nombre} ya está dentro del conjunto`
      : `${nuevoCharacter.nombre} no está en el conjunto`;
  },
  getSetSize() {
    let setSize = document.getElementById("setSize");
    setSize.innerHTML = `En la lista hay ${this.LOTRSet.size} personajes`;
  },
  deleteCharacter(nuevoCharacter) {
    let toDelete = null;

    for (const character of this.LOTRSet) {
      if (character.compareCharacters(nuevoCharacter)) {
        toDelete = character;
        break;
      }
    }

    if (toDelete) {
      this.LOTRSet.delete(toDelete);
      console.log(`Se ha eliminado el personaje ${toDelete.nombre}`);
    } else {
      console.log(`ERROR: ${nuevoCharacter.nombre} no está en el conjunto`);
    }
  },
  async generateCombinationSet() {
    LOTRSet.clear();
    let seleccionados = new Set();
    try {
      const response = await fetch("./characters.json");
      const data = await response.json();
      const personajes = data.map(
        (e) => new LOTRCharacter(e.nombre, e.faccion, e.retrato)
      );
      const seleccionados1 = new Set();
      const seleccionados2 = new Set();
      while (seleccionados1.size < 5) {
        const numR = Math.floor(Math.random() * personajes.length);
        seleccionados1.add(personajes[numR]);
      }
      while (seleccionados2.size < 5) {
        const numR = Math.floor(Math.random() * personajes.length);
        seleccionados2.add(personajes[numR]);
      }
      seleccionados = new Set(seleccionados1);
      for (const char of seleccionados2) {
        let duplicate = false;
        for (const char2 of seleccionados) {
          if (char2.compareCharacters(char)) {
            duplicate = true;
            break;
          }
        }
        if (!duplicate) {
          seleccionados.add(char);
        }
      }
    } catch (error) {
      console.log(error);
    }
    seleccionados.forEach((e) => this.addCharacter(e));
  },
};

window.Main = Main;
