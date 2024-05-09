import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instancesNumber = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    Dwarf.instancesNumber++;
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.instancesNumber;
  }
}   

export default Dwarf;