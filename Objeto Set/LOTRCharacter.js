export class LOTRCharacter {
  constructor(
    nombre,
    faccion,
    retrato = "https://tolkiengateway.net/w/images/thumb/9/93/Michele_Mantoani_-_One_Ring_to_Rule_Them_All.jpg/800px-Michele_Mantoani_-_One_Ring_to_Rule_Them_All.jpg"
  ) {
    this.nombre = nombre;
    this.faccion = faccion;
    this.retrato = retrato;
  }

  compareCharacters(char1) {
    if (!(char1 instanceof LOTRCharacter)) return false;
    return (
      char1.nombre.toLowerCase() === this.nombre.toLowerCase() &&
      char1.faccion.toLowerCase() === this.faccion.toLowerCase()
    );
  }
  toString() {
    return `<div style='display: flex; align-items: center; gap: 10px;'>
  <ul style='margin: 0; padding: 0; list-style: none;'>
    <li><b>Nombre: </b>${this.nombre}</li>
    <li><b>Facción: </b>${this.faccion}</li>
  </ul>
  <img src='${this.retrato}' alt='${this.nombre}' style='width: 50px; height: 50px; object-fit: cover;' />
</div>`;
  }
}
window.LOTRCharacter = LOTRCharacter;
