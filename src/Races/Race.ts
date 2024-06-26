abstract class Race {
  private _name = '';
  private _dexterity = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  } 
}

export default Race;