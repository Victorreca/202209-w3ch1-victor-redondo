import Character from "../Character";
import FighterStructure from "./types";

class Fighter extends Character implements FighterStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public usedWeapon: string,
    public dexterity: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()} Primero pego y luego pregunto`;
  }
}

export default Fighter;
