export class EnemyCharacterModel {
  name: string;
  health: number;
  power: number;
  defense: number;

  constructor(
    name: string, health: number, power: number, defense: number
  ) {
    this.name = name;
    this.health = health;
    this.power = power;
    this.defense = defense;
  }
}
