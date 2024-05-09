import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static instancesNumber = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    Elf.instancesNumber += 1;
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.instancesNumber;
  }
}

export default Elf;