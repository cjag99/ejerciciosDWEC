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
  generateSampleCharacters() {
    let hobbits = [
      new LOTRCharacter(
        "Frodo Bolsón",
        "La Comarca",
        "https://tolkiengateway.net/w/images/4/40/Anna_Lee_-_Frodo.jpg"
      ),
      new LOTRCharacter(
        "Samsagaz Gamyi",
        "La Comarca",
        "https://tolkiengateway.net/w/images/thumb/3/35/Campbell_White_-_Sam%2C_Loyal_Attendant.jpg/1280px-Campbell_White_-_Sam%2C_Loyal_Attendant.jpg"
      ),
      new LOTRCharacter(
        "Peregrin Tuk",
        "La Comarca",
        "https://tolkiengateway.net/w/images/thumb/2/2b/Campbell_White_-_Peregrin_Took.jpg/1280px-Campbell_White_-_Peregrin_Took.jpg"
      ),
      new LOTRCharacter(
        "Meriadoc Brandigamo",
        "La Comarca",
        "https://tolkiengateway.net/w/images/thumb/6/61/Jenny_Dolfen_-_Master_Holbytla.jpg/800px-Jenny_Dolfen_-_Master_Holbytla.jpg"
      ),
      new LOTRCharacter(
        "Bilbo Bolsón",
        "La Comarca",
        "https://tolkiengateway.net/w/images/thumb/2/21/Daniel_Govar_-_Riddles_in_the_Dark.jpg/800px-Daniel_Govar_-_Riddles_in_the_Dark.jpg"
      ),
    ];
    hobbits.forEach((e) => this.addCharacter(e));
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
};
window.Main = Main;
