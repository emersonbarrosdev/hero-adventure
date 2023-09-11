export class HeroCharacterModel {
  name: string;
  health: number;
  power: number;
  defense: number;
  guard: boolean;

  constructor(
    name: string, health: number, power: number, defense: number, guard: boolean
    ) {
    this.name = name;
    this.health = health;
    this.power = power;
    this.defense = defense;
    this.guard = guard;
  }


}
