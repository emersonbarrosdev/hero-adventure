export class EnemyCharacterModel {
  name: string;
  HP: number;
  ATK: number;
  DEF: number;
  maxHP: number;

  constructor(
    name: string, HP: number, ATK: number, DEF: number
  ) {
    this.name = name;
    this.HP = HP;
    this.ATK = ATK;
    this.DEF = DEF;
    this.maxHP = HP;
  }
}
