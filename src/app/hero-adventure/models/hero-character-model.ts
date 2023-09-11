export class HeroCharacterModel {
  name: string;
  HP: number;
  ATK: number;
  DEF: number;
  maxHP: number;
  guard: boolean;

  constructor(
    name: string, HP: number, ATK: number, DEF: number, guard: boolean
    ) {
    this.name = name;
    this.HP = HP;
    this.ATK = ATK;
    this.DEF = DEF;
    this.maxHP = HP;
    this.guard = guard;
  }


}
