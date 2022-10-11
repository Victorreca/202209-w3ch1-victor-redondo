import CharacterStructure from "./types";

class Character implements CharacterStructure {
  isAlive = true;
  show = "Juego de Tronos";

  constructor(public name: string, public family: string, public age: number) {}

  communicate() {
    return `${this.name} dice: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
