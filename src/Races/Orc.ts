import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static instancerNumber = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    Orc.instancerNumber += 1;
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.instancerNumber;
  }
}

export default Orc;