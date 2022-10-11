import Character from "../Character";
import Fighter from "../Fighter/Fighter";
import SquireStructure from "./types";

class Squire extends Character implements SquireStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public serveTo: Fighter,
    public pelotism: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}Soy un looser`;
  }
}
export default Squire;
