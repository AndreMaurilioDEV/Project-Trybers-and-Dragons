import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static instancesNumber = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    Halfling.instancesNumber += 1;
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.instancesNumber;
  }
}

export default Halfling;