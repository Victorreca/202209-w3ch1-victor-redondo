import Advisor from "./characters/Advisor/Advisor.js";
import Fighter from "./characters/Fighter/Fighter.js";
import King from "./characters/King/King.js";
import Squire from "./characters/Squire/Squire.js";

const jaime = new Fighter("Jaime", "Lannister", 40, "sword", 9);

const joffrey = new King("Joffrey", "Lannister", 16, 1);

const daenerys = new Fighter("Daenerys", "Targaryen", 25, "Dragons", 5);

const tyrion = new Advisor("Tyrion", "Lannister", 30, daenerys);

const bronn = new Squire("Bronn", "Blackwater", 45, jaime, 3);

const characters = [joffrey, jaime, daenerys, tyrion, bronn];

export default characters;
