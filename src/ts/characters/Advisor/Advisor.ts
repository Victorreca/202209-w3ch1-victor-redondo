import Character from "../Character.js";
import Fighter from "../Fighter/Fighter";
import AdvisorStructure from "./types";

class Advisor extends Character implements AdvisorStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public adviseTo: Fighter
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;
