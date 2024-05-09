import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instancesNumber = 0;
  private _type: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.instancesNumber += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Warrior.instancesNumber;
  }
}

export default Warrior;