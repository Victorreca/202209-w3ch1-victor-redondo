import Character from "../Character";
import KingStructure from "./types";

class King extends Character implements KingStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public yearsOfKingdom: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}VAIS A MORIR TODOS!`;
  }
}

export default King;
